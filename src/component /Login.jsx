// import React, { useState } from 'react';
// import { Container, Tabs, Tab, Box, TextField, Button, Typography, Grid, Paper } from '@mui/material';
// import { Google, Facebook } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

// const Login = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const navigate = useNavigate();  // Initialize the navigate function

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Logic for handling login form submission
//     // After successful login, navigate to the chat page
//     navigate('/chat');
//   };

//   const handleGoogleSignIn = () => {
//     // Logic for Google sign-in (authentication)
//     console.log('Google Sign-In');
//     navigate('/chat');  // Redirect to chat page after Google sign-in
//   };

//   const handleFacebookSignIn = () => {
//     // Logic for Facebook sign-in (authentication)
//     console.log('Facebook Sign-In');
//     navigate('/chat');  // Redirect to chat page after Facebook sign-in
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 5 }}>
//       <Paper elevation={3} sx={{ p: 3 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Welcome Back
//         </Typography>
//         <Typography variant="subtitle1" align="center" gutterBottom>
//           Sign in or create an account to continue
//         </Typography>
//         <Tabs
//           value={activeTab}
//           onChange={handleTabChange}
//           variant="fullWidth"
//           sx={{ mt: 2, mb: 3 }}
//         >
//           <Tab label="Login" />
//           <Tab label="Sign Up" />
//         </Tabs>
//         <Box component="form" onSubmit={handleSubmit}>
//           {activeTab === 0 ? (
//             // Login Form
//             <Box>
//               <TextField
//                 label="Email"
//                 type="email"
//                 fullWidth
//                 required
//                 margin="normal"
//               />
//               <TextField
//                 label="Password"
//                 type="password"
//                 fullWidth
//                 required
//                 margin="normal"
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 sx={{ mt: 2 }}
//               >
//                 Login
//               </Button>
//               <Typography variant="body2" align="center" sx={{ mt: 2 }}>
//                 Or sign in with
//               </Typography>
//               <Grid container spacing={2} sx={{ mt: 1 }}>
//                 <Grid item xs={6}>
//                   <Button
//                     fullWidth
//                     variant="outlined"
//                     startIcon={<Google />}
//                     color="error"
//                     onClick={handleGoogleSignIn}
//                   >
//                     Google
//                   </Button>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Button
//                     fullWidth
//                     variant="outlined"
//                     startIcon={<Facebook />}
//                     color="primary"
//                     onClick={handleFacebookSignIn}
//                   >
//                     Facebook
//                   </Button>
//                 </Grid>
//               </Grid>
//             </Box>
//           ) : (
//             // Sign-Up Form
//             <Box>
//               <TextField
//                 label="Full Name"
//                 type="text"
//                 fullWidth
//                 required
//                 margin="normal"
//               />
//               <TextField
//                 label="Email"
//                 type="email"
//                 fullWidth
//                 required
//                 margin="normal"
//               />
//               <TextField
//                 label="Password"
//                 type="password"
//                 fullWidth
//                 required
//                 margin="normal"
//               />
//               <TextField
//                 label="Confirm Password"
//                 type="password"
//                 fullWidth
//                 required
//                 margin="normal"
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 sx={{ mt: 2 }}
//               >
//                 Sign Up
//               </Button>
//             </Box>
//           )}
//         </Box>
//         <Grid container justifyContent="center" sx={{ mt: 3 }}>
//           <Typography variant="body2" align="center">
//             {activeTab === 0
//               ? "Don't have an account? Switch to Sign Up"
//               : 'Already have an account? Switch to Login'}
//           </Typography>
//         </Grid>
//       </Paper>
//     </Container>
//   );
// }

// export default Login;

// import React, { useState } from 'react';
// import { Container, Tabs, Tab, Box, TextField, Button, Typography, Grid, Paper } from '@mui/material';
// import { Google, Facebook } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom'; // Use this to navigate to the chat page
// import supabase from './SupabaseClient'; // Import the supabase client

// const Login = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [email, setEmail] = useState(''); // Track email
//   const [password, setPassword] = useState(''); // Track password
//   const [loading, setLoading] = useState(false); // Track loading state
//   const navigate = useNavigate(); // Hook to navigate to the chat page

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   // Handle login form submit
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true); // Show loading state while submitting

//     // Log in using Supabase Auth
//     try {
//       const { user, error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       });

//       if (error) {
//         console.error('Error logging in:', error.message);
//         setLoading(false);
//       } else {
//         console.log('Login successful:', user);
//         setLoading(false);
//         navigate('/chat'); // Redirect to chat page after successful login
//       }
//     } catch (error) {
//       console.error('Unexpected error:', error);
//       setLoading(false);
//     }
//   };

//   // Handle Google sign-in
//   const handleGoogleSignIn = async () => {
//     try {
//       const { user, error } = await supabase.auth.signInWithOAuth({
//         provider: 'google',
//       });

//       if (error) {
//         console.error('Google Sign-In error:', error.message);
//       } else {
//         console.log('Google Sign-In successful:', user);
//         navigate('/chat'); // Redirect to chat page after successful Google login
//       }
//     } catch (error) {
//       console.error('Google Sign-In unexpected error:', error);
//     }
//   };

//   // Handle Facebook sign-in
//   const handleFacebookSignIn = async () => {
//     try {
//       const { user, error } = await supabase.auth.signInWithOAuth({
//         provider: 'facebook',
//       });

//       if (error) {
//         console.error('Facebook Sign-In error:', error.message);
//       } else {
//         console.log('Facebook Sign-In successful:', user);
//         navigate('/chat'); // Redirect to chat page after successful Facebook login
//       }
//     } catch (error) {
//       console.error('Facebook Sign-In unexpected error:', error);
//     }
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 5 }}>
//       <Paper elevation={3} sx={{ p: 3 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Welcome Back
//         </Typography>
//         <Typography variant="subtitle1" align="center" gutterBottom>
//           Sign in or create an account to continue
//         </Typography>
//         <Tabs
//           value={activeTab}
//           onChange={handleTabChange}
//           variant="fullWidth"
//           sx={{ mt: 2, mb: 3 }}
//         >
//           <Tab label="Login" />
//           <Tab label="Sign Up" />
//         </Tabs>
//         <Box component="form" onSubmit={handleSubmit}>
//           {activeTab === 0 ? (
//             // Login Form
//             <Box>
//               <TextField
//                 label="Email"
//                 type="email"
//                 fullWidth
//                 required
//                 margin="normal"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)} // Update email state
//               />
//               <TextField
//                 label="Password"
//                 type="password"
//                 fullWidth
//                 required
//                 margin="normal"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)} // Update password state
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 sx={{ mt: 2 }}
//                 disabled={loading} // Disable the button while loading
//               >
//                 {loading ? 'Logging In...' : 'Login'}
//               </Button>
//               <Typography variant="body2" align="center" sx={{ mt: 2 }}>
//                 Or sign in with
//               </Typography>
//               <Grid container spacing={2} sx={{ mt: 1 }}>
//                 <Grid item xs={6}>
//                   <Button
//                     fullWidth
//                     variant="outlined"
//                     startIcon={<Google />}
//                     color="error"
//                     onClick={handleGoogleSignIn}
//                     disabled={loading} // Disable button during loading
//                   >
//                     Google
//                   </Button>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Button
//                     fullWidth
//                     variant="outlined"
//                     startIcon={<Facebook />}
//                     color="primary"
//                     onClick={handleFacebookSignIn}
//                     disabled={loading} // Disable button during loading
//                   >
//                     Facebook
//                   </Button>
//                 </Grid>
//               </Grid>
//             </Box>
//           ) : (
//             // Sign-Up Form (not modified)
//             <Box>
//               <TextField
//                 label="Full Name"
//                 type="text"
//                 fullWidth
//                 required
//                 margin="normal"
//               />
//               <TextField
//                 label="Email"
//                 type="email"
//                 fullWidth
//                 required
//                 margin="normal"
//               />
//               <TextField
//                 label="Password"
//                 type="password"
//                 fullWidth
//                 required
//                 margin="normal"
//               />
//               <TextField
//                 label="Confirm Password"
//                 type="password"
//                 fullWidth
//                 required
//                 margin="normal"
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 sx={{ mt: 2 }}
//               >
//                 Sign Up
//               </Button>
//             </Box>
//           )}
//         </Box>
//         <Grid container justifyContent="center" sx={{ mt: 3 }}>
//           <Typography variant="body2" align="center">
//             {activeTab === 0
//               ? "Don't have an account? Switch to Sign Up"
//               : 'Already have an account? Switch to Login'}
//           </Typography>
//         </Grid>
//       </Paper>
//     </Container>
//   );
// };

// export default Login;

// const Login = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [email, setEmail] = useState(''); // Track email
//   const [password, setPassword] = useState(''); // Track password
//   const [loading, setLoading] = useState(false); // Track loading state
//   const [error, setError] = useState(null); // Track error messages
//   const navigate = useNavigate(); // Hook to navigate to the chat page

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//     setError(null); // Reset error on tab change
//   };

//   // Handle login form submit
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true); // Show loading state while submitting
//     setError(null); // Reset any previous errors

//     try {
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       });

//       if (error) {
//         console.error('Error logging in:', error.message);
//         setError(error.message);
//         setLoading(false);
//       } else {
//         console.log('Login successful:', data.user);
//         setLoading(false);
//         navigate('/chat'); // Redirect to chat page after successful login
//       }
//     } catch (err) {
//       console.error('Unexpected error:', err);
//       setError('An unexpected error occurred. Please try again.');
//       setLoading(false);
//     }
//   };

//   // Handle Google sign-in
//   const handleGoogleSignIn = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const { data, error } = await supabase.auth.signInWithOAuth({
//         provider: 'google',
//       });

//       if (error) {
//         console.error('Google Sign-In error:', error.message);
//         setError(error.message);
//         setLoading(false);
//       } else {
//         console.log('Google Sign-In successful:', data.user);
//         // The OAuth flow will handle navigation after successful login
//       }
//     } catch (err) {
//       console.error('Google Sign-In unexpected error:', err);
//       setError('An unexpected error occurred during Google Sign-In.');
//       setLoading(false);
//     }
//   };

//   const handleSignUp = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setError(null);
  
//     try {
//       const { data, error } = await supabase.auth.signUp({
//         email,
//         password,
//       });
  
//       if (error) {
//         console.error('Sign-Up error:', error.message);
//         setError(error.message);
//         setLoading(false);
//       } else {
//         console.log('Sign-Up successful:', data.user);
//         navigate('/welcome'); // Redirect after successful sign-up
//         setLoading(false);
//       }
//     } catch (err) {
//       console.error('Unexpected error during Sign-Up:', err);
//       setError('An unexpected error occurred during Sign-Up.');
//       setLoading(false);
//     }
//   };
  

//   // Handle Facebook sign-in
//   const handleFacebookSignIn = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const { data, error } = await supabase.auth.signInWithOAuth({
//         provider: 'facebook',
//       });

//       if (error) {
//         console.error('Facebook Sign-In error:', error.message);
//         setError(error.message);
//         setLoading(false);
//       } else {
//         console.log('Facebook Sign-In successful:', data.user);
//         // The OAuth flow will handle navigation after successful login
//       }
//     } catch (err) {
//       console.error('Facebook Sign-In unexpected error:', err);
//       setError('An unexpected error occurred during Facebook Sign-In.');
//       setLoading(false);
//     }
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 5 }}>
//       <Paper elevation={3} sx={{ p: 3 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Welcome Back
//         </Typography>
//         <Typography variant="subtitle1" align="center" gutterBottom>
//           Sign in or create an account to continue
//         </Typography>
//         <Tabs
//           value={activeTab}
//           onChange={handleTabChange}
//           variant="fullWidth"
//           sx={{ mt: 2, mb: 3 }}
//         >
//           <Tab label="Login" />
//           <Tab label="Sign Up" />
//         </Tabs>
//         <Box component="form" onSubmit={handleSubmit}>
//           {activeTab === 0 ? (
//             // Login Form
//             <Box>
//               <TextField
//                 label="Email"
//                 type="email"
//                 fullWidth
//                 required
//                 margin="normal"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)} // Update email state
//               />
//               <TextField
//                 label="Password"
//                 type="password"
//                 fullWidth
//                 required
//                 margin="normal"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)} // Update password state
//               />
//               {error && (
//                 <Typography variant="body2" color="error" align="center" sx={{ mt: 1 }}>
//                   {error}
//                 </Typography>
//               )}
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 sx={{ mt: 2 }}
//                 disabled={loading} // Disable the button while loading
//               >
//                 {loading ? 'Logging In...' : 'Login'}
//               </Button>
//               <Typography variant="body2" align="center" sx={{ mt: 2 }}>
//                 Or sign in with
//               </Typography>
//               <Grid container spacing={2} sx={{ mt: 1 }}>
//                 <Grid item xs={6}>
//                   <Button
//                     fullWidth
//                     variant="outlined"
//                     startIcon={<Google />}
//                     color="error"
//                     onClick={handleGoogleSignIn}
//                     disabled={loading} // Disable button during loading
//                   >
//                     Google
//                   </Button>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Button
//                     fullWidth
//                     variant="outlined"
//                     startIcon={<Facebook />}
//                     color="primary"
//                     onClick={handleFacebookSignIn}
//                     disabled={loading} // Disable button during loading
//                   >
//                     Facebook
//                   </Button>
//                 </Grid>
//               </Grid>
//             </Box>
//           ) : (
//             // Sign-Up Form
//             <Box>
//               <TextField
//                 label="Full Name"
//                 type="text"
//                 fullWidth
//                 required
//                 margin="normal"
//               />
//               <TextField
//                 label="Email"
//                 type="email"
//                 fullWidth
//                 required
//                 margin="normal"
//               />
//               <TextField
//                 label="Password"
//                 type="password"
//                 fullWidth
//                 required
//                 margin="normal"
//               />
//               <TextField
//                 label="Confirm Password"
//                 type="password"
//                 fullWidth
//                 required
//                 margin="normal"
//               />
//               {/* Implement Sign-Up functionality as needed */}
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 sx={{ mt: 2 }}
//               >
//                 Sign Up
//               </Button>
//             </Box>
//           )}
//         </Box>
//         <Grid container justifyContent="center" sx={{ mt: 3 }}>
//           <Typography variant="body2" align="center">
//             {activeTab === 0
//               ? "Don't have an account? Switch to Sign Up"
//               : 'Already have an account? Switch to Login'}
//           </Typography>
//         </Grid>
//       </Paper>
//     </Container>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { Container, Paper, Typography, Tabs, Tab, Box, TextField, Button, Grid } from '@mui/material';
import { Google, Facebook } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import supabase from './SupabaseClient';

const Login = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [email, setEmail] = useState(''); // Track email
  const [password, setPassword] = useState(''); // Track password
  const [confirmPassword, setConfirmPassword] = useState(''); // Track confirm password for Sign-Up
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Track error messages
  const [passwordError, setPasswordError] = useState(''); // Track password validation error
  const navigate = useNavigate(); // Hook to navigate to the chat page

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setError(null); // Reset error on tab change
    setPasswordError(''); // Reset password error on tab change
  };

  // Password validation function
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  // Handle login form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Show loading state while submitting
    setError(null); // Reset any previous errors

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Error logging in:', error.message);
        setError(error.message);
        setLoading(false);
      } else {
        console.log('Login successful:', data.user);
        setLoading(false);
        navigate('/Chat'); // Redirect to chat page after successful login
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('An unexpected error occurred. Please try again.');
      setLoading(false);
    }
  };

  // Handle Google sign-in
  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });

      if (error) {
        console.error('Google Sign-In error:', error.message);
        setError(error.message);
        setLoading(false);
      } else {
        console.log('Google Sign-In successful:', data.user);
        // The OAuth flow will handle navigation after successful login
      }
    } catch (err) {
      console.error('Google Sign-In unexpected error:', err);
      setError('An unexpected error occurred during Google Sign-In.');
      setLoading(false);
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setPasswordError(''); // Reset password validation error

    // Validate password
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters long, include an uppercase letter, a number, and a special character.');
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.error('Sign-Up error:', error.message);
        setError(error.message);
        setLoading(false);
      } else {
        console.log('Sign-Up successful:', data.user);
        navigate('/Chat'); // Redirect after successful sign-up
        setLoading(false);
      }
    } catch (err) {
      console.error('Unexpected error during Sign-Up:', err);
      setError('An unexpected error occurred during Sign-Up.');
      setLoading(false);
    }
  };

  // Handle Facebook sign-in
  const handleFacebookSignIn = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'facebook',
      });

      if (error) {
        console.error('Facebook Sign-In error:', error.message);
        setError(error.message);
        setLoading(false);
      } else {
        console.log('Facebook Sign-In successful:', data.user);
        // The OAuth flow will handle navigation after successful login
      }
    } catch (err) {
      console.error('Facebook Sign-In unexpected error:', err);
      setError('An unexpected error occurred during Facebook Sign-In.');
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome Back
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Sign in or create an account to continue
        </Typography>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{ mt: 2, mb: 3 }}
        >
          <Tab label="Login" />
          <Tab label="Sign Up" />
        </Tabs>
        <Box component="form" onSubmit={activeTab === 0 ? handleSubmit : handleSignUp}>
          {activeTab === 0 ? (
            // Login Form
            <Box>
              <TextField
                label="Email"
                type="email"
                fullWidth
                required
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                required
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
              />
              {error && (
                <Typography variant="body2" color="error" align="center" sx={{ mt: 1 }}>
                  {error}
                </Typography>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                disabled={loading} // Disable the button while loading
              >
                {loading ? 'Logging In...' : 'Login'}
              </Button>
              <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                Or sign in with
              </Typography>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<Google />}
                    color="error"
                    onClick={handleGoogleSignIn}
                    disabled={loading} // Disable button during loading
                  >
                    Google
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<Facebook />}
                    color="primary"
                    onClick={handleFacebookSignIn}
                    disabled={loading} // Disable button during loading
                  >
                    Facebook
                  </Button>
                </Grid>
              </Grid>
            </Box>
          ) : (
            // Sign-Up Form
            <Box>
              <TextField
                label="Full Name"
                type="text"
                fullWidth
                required
                margin="normal"
              />
              <TextField
                label="Email"
                type="email"
                fullWidth
                required
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                required
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                label="Confirm Password"
                type="password"
                fullWidth
                required
                margin="normal"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {passwordError && (
                <Typography variant="body2" color="error" align="center" sx={{ mt: 1 }}>
                  {passwordError}
                </Typography>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                disabled={loading}
              >
                {loading ? 'Signing Up...' : 'Sign Up'}
              </Button>
            </Box>
          )}
        </Box>
        <Grid container justifyContent="center" sx={{ mt: 3 }}>
          <Typography variant="body2" align="center">
            {activeTab === 0
              ? "Don't have an account? Switch to Sign Up"
              : 'Already have an account? Switch to Login'}
          </Typography>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Login;
