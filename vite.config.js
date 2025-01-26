// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
// import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
// import nodePolyfills from 'rollup-plugin-polyfill-node';

// export default defineConfig({
//   plugins: [
//     react(),
//     nodePolyfills(), // Merged plugins
//   ],
//   optimizeDeps: {
//     esbuildOptions: {
//       define: {
//         global: 'globalThis',
//       },
//       plugins: [
//         NodeGlobalsPolyfillPlugin({
//           process: true,
//           buffer: true,
//         }),
//         NodeModulesPolyfillPlugin(),
//       ],
//     },
//   },
//   define: {
//     global: {}, // Polyfill for global
//     'process.env': {
//       NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
//     },
//   },
//   resolve: {
//     alias: {
//       crypto: 'crypto-browserify',
//       events: 'events/',
//       util: 'util/',
//     },
//   },
// });

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

// Export Vite configuration
export default ({ mode }) => {
  // Load environment variables (VITE_ prefixed)
  const env = loadEnv(mode, process.cwd(), 'VITE_');

  return defineConfig({
    plugins: [react()],

    resolve: {
      alias: {
        // Ensure process is aliased for the browser
        'react-native': 'react-native-web',
        stream: 'stream-browserify',
        util: 'util',
        process: 'process/browser', // Alias process to process/browser
      },
    },

    define: {
      global: 'globalThis', // Polyfill global for browser
      'process.env': {
        NODE_ENV: JSON.stringify(mode), // Define mode (development or production)
        VITE_API_URL: JSON.stringify(env.VITE_API_URL || ''), // Example of custom env variable
      },
    },

    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis', // Ensure global is defined in esbuild
        },
        plugins: [
          NodeGlobalsPolyfillPlugin({
            process: true, // Polyfill process for esbuild
            buffer: true,  // Polyfill Buffer for esbuild
          }),
          NodeModulesPolyfillPlugin(), // Polyfill Node.js modules for esbuild
        ],
      },
    },

    build: {
      sourcemap: true, // Enable sourcemaps for easier debugging
      rollupOptions: {
        output: {
          manualChunks: {
            // Example: Group frequently used dependencies into vendor chunk
            vendor: ['react', 'react-dom'],
          },
        },
      },
    },
  });
};
