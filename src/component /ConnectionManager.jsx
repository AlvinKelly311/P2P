
// import Peer from 'simple-peer';
// import CryptoJS from 'crypto-js';

// // Create an initiator peer
// export const createInitiator = (signalCallback) => {
//   const peer = new Peer({ initiator: true, trickle: false });

//   peer.on('signal', (data) => {
//     console.log('Initiator Signal Data:', data);
//     signalCallback(data);
//   });

//   peer.on('error', (err) => {
//     console.error('Peer Error (Initiator):', err);
//   });

//   return peer;
// };

// // Create a responder peer
// export const createResponder = (signalData, signalCallback) => {
//   const peer = new Peer({ initiator: false, trickle: false });

//   peer.signal(signalData);

//   peer.on('signal', (data) => {
//     console.log('Responder Signal Data:', data);
//     signalCallback(data);
//   });

//   peer.on('error', (err) => {
//     console.error('Peer Error (Responder):', err);
//   });

//   return peer;
// };

// // Encrypt a message
// export const encryptMessage = (message, secretKey) => {
//   return CryptoJS.AES.encrypt(message, secretKey).toString();
// };

// // Decrypt a message
// export const decryptMessage = (encryptedMessage, secretKey) => {
//   const bytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
//   return bytes.toString(CryptoJS.enc.Utf8);
// };


// import { create } from 'zustand';
// import Peer from 'simple-peer';
// import CryptoJS from 'crypto-js';

// // Encryption Functions (outside the store)
// export const encryptMessage = (message, secretKey) => {
//   if (!secretKey.trim()) {
//     console.error('Secret key is required for encryption.');
//     return '';
//   }
//   return CryptoJS.AES.encrypt(message, secretKey).toString();
// };

// export const decryptMessage = (encryptedMessage, secretKey) => {
//   if (!secretKey.trim()) {
//     console.error('Secret key is required for decryption.');
//     return '';
//   }
//   const bytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
//   return bytes.toString(CryptoJS.enc.Utf8);
// };

// // Define the Zustand store
// export const usePeerStore = create((set, get) => ({
//   // State
//   peer: null, // Holds the SimplePeer instance
//   isInitiator: false,
//   signal: '',
//   remoteSignal: '',
//   connected: false,
//   encryptedMessages: [],
//   message: '',
//   secretKey: '', // For encryption/decryption

//   // Setters
//   setIsInitiator: (value) => set({ isInitiator: value }),
//   setSignal: (value) => set({ signal: value }),
//   setRemoteSignal: (value) => set({ remoteSignal: value }),
//   setConnected: (value) => set({ connected: value }),
//   setMessage: (value) => set({ message: value }),
//   setSecretKey: (value) => set({ secretKey: value }),

//   // Create Initiator Peer
// // Create Initiator Peer
// createInitiator: (signalCallback) => {
//   const peer = new Peer({ initiator: true, trickle: false });

//   peer.on('signal', (data) => {
//     console.log('Initiator Signal Data:', data);
//     set({ signal: JSON.stringify(data) });
//     if (signalCallback) signalCallback(data);
//   });

//   peer.on('iceConnectionStateChange', (state) => {
//     console.log('ICE State Changed:', state);
//     if (state === 'failed') {
//       console.error('ICE Connection Failed!');
//       // Handle ICE failure (maybe retry or alert user)
//     }
//   });

//   peer.on('connect', () => {
//     console.log('Initiator connected successfully!');
//     set({ connected: true });
//   });

//   peer.on('error', (err) => {
//     console.error('Peer Error (Initiator):', err);
//   });

//   set({ peer }); // Store the peer instance
// },

// // Create Responder Peer
// createResponder: (signalData, signalCallback) => {
//   const peer = new Peer({ initiator: false, trickle: false });

//   peer.signal(signalData);

//   peer.on('signal', (data) => {
//     console.log('Responder Signal Data:', data);
//     set({ signal: JSON.stringify(data) });
//     if (signalCallback) signalCallback(data);
//   });

//   peer.on('iceCandidate', (candidate) => {
//     console.log('ICE Candidate:', candidate);
//     if (candidate) {
//       set({ signal: JSON.stringify(candidate) });
//       if (signalCallback) signalCallback(candidate);
//     }
//   });

//   peer.on('connect', () => {
//     console.log('Responder connected successfully!');
//     set({ connected: true });
//   });

//   peer.on('error', (err) => {
//     console.error('Peer Error (Responder):', err);
//   });

//   set({ peer }); // Store the peer instance
// },


//   // Send an encrypted message
//   sendMessage: () => {
//     const { peer, connected, message, secretKey } = get();

//     if (!peer || !connected) {
//       console.error('Peer not connected.');
//       return;
//     }

//     if (!message.trim()) {
//       console.error('Cannot send an empty message.');
//       return;
//     }

//     const encryptedMessage = encryptMessage(message, secretKey); // Encrypt the message using the external function
//     console.log('Sending encrypted message:', encryptedMessage);

//     peer.send(encryptedMessage);

//     set((state) => ({
//       encryptedMessages: [
//         ...state.encryptedMessages,
//         { sender: 'me', text: encryptedMessage, time: new Date().toLocaleTimeString() },
//       ],
//       message: '', // Clear the input field
//     }));
//   },

//   // Handle incoming encrypted message
//   handleMessage: (data) => {
//     const { secretKey } = get();

//     const decryptedMessage = decryptMessage(data.toString(), secretKey); // Decrypt the message using the external function
//     console.log('Received decrypted message:', decryptedMessage);

//     set((state) => ({
//       encryptedMessages: [
//         ...state.encryptedMessages,
//         { sender: 'peer', text: decryptedMessage, time: new Date().toLocaleTimeString() },
//       ],
//     }));
//   },
// }));

import { create } from 'zustand';
import SimplePeer from 'simple-peer';

// Zustand store to manage peer-to-peer connection
export const usePeerStore = create((set, get) => ({
  // Initial states
  isInitiator: false,
  signal: '',
  remoteSignal: '',
  connected: false,
  message: '',
  messages: [],
  peer: null, // SimplePeer instance

  // State updaters
  setIsInitiator: (value) => set({ isInitiator: value }),
  setSignal: (value) => set({ signal: value }),
  setRemoteSignal: (value) => set({ remoteSignal: value }),
  setConnected: (value) => set({ connected: value }),
  setMessage: (value) => set({ message: value }),
  setMessages: (updateFn) => 
    set((state) => ({ messages: updateFn(state.messages) })),

  // Create a SimplePeer instance
  createPeer: (initiator) => {
    const peer = new SimplePeer({ initiator, trickle: false });

    // Event listeners
    peer.on('signal', (data) => {
      console.log('Generated signal:', data);
      set({ signal: JSON.stringify(data) });
    });

    peer.on('connect', () => {
      console.log('Peer connected successfully!');
      set({ connected: true });
    });

    peer.on('data', (data) => {
      console.log('Received data:', data.toString());
      set((state) => ({
        messages: [
          ...state.messages,
          { sender: 'peer', text: data.toString(), time: new Date().toLocaleTimeString() },
        ],
      }));
    });

    set({ peer }); // Store the peer instance
    console.log('Peer created:', peer);
  },

  // Handle connection using the remote signal
  handleConnect: () => {
    const { peer, remoteSignal } = get();

    if (!peer) {
      console.error('Peer instance is not initialized.');
      return;
    }

    if (!remoteSignal || !remoteSignal.trim()) {
      console.error('Remote signal is empty or invalid.');
      return;
    }

    try {
      const signalData = JSON.parse(remoteSignal);
      peer.signal(signalData);
      console.log('Signaled peer with:', signalData);
    } catch (error) {
      console.error('Failed to parse remote signal data:', error);
    }
  },

  // Send a message via the peer
  sendMessage: () => {
    const { peer, connected, message } = get();

    if (!peer || !connected) {
      console.error('Peer not connected.');
      return;
    }

    if (!message.trim()) {
      console.error('Cannot send an empty message.');
      return;
    }

    console.log('Sending message:', message);
    peer.send(message);
    set((state) => ({
      messages: [
        ...state.messages,
        { sender: 'me', text: message, time: new Date().toLocaleTimeString() },
      ],
      message: '', // Clear the input field
    }));
  },
}));
