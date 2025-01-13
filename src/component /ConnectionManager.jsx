
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


import { create } from 'zustand';
import Peer from 'simple-peer';
import CryptoJS from 'crypto-js';

// Encryption Functions (outside the store)
export const encryptMessage = (message, secretKey) => {
  if (!secretKey.trim()) {
    console.error('Secret key is required for encryption.');
    return '';
  }
  return CryptoJS.AES.encrypt(message, secretKey).toString();
};

export const decryptMessage = (encryptedMessage, secretKey) => {
  if (!secretKey.trim()) {
    console.error('Secret key is required for decryption.');
    return '';
  }
  const bytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

// Define the Zustand store
export const usePeerStore = create((set, get) => ({
  // State
  peer: null, // Holds the SimplePeer instance
  isInitiator: false,
  signal: '',
  remoteSignal: '',
  connected: false,
  encryptedMessages: [],
  message: '',
  secretKey: '', // For encryption/decryption

  // Setters
  setIsInitiator: (value) => set({ isInitiator: value }),
  setSignal: (value) => set({ signal: value }),
  setRemoteSignal: (value) => set({ remoteSignal: value }),
  setConnected: (value) => set({ connected: value }),
  setMessage: (value) => set({ message: value }),
  setSecretKey: (value) => set({ secretKey: value }),

  // Create Initiator Peer
  createInitiator: (signalCallback) => {
    const peer = new Peer({ initiator: true, trickle: false });

    peer.on('signal', (data) => {
      console.log('Initiator Signal Data:', data);
      set({ signal: JSON.stringify(data) });
      if (signalCallback) signalCallback(data);
    });

    peer.on('connect', () => {
      console.log('Initiator connected successfully!');
      set({ connected: true });
    });

    peer.on('error', (err) => {
      console.error('Peer Error (Initiator):', err);
    });

    set({ peer }); // Store the peer instance
  },

  // Create Responder Peer
  createResponder: (signalData, signalCallback) => {
    const peer = new Peer({ initiator: false, trickle: false });

    peer.signal(signalData);

    peer.on('signal', (data) => {
      console.log('Responder Signal Data:', data);
      set({ signal: JSON.stringify(data) });
      if (signalCallback) signalCallback(data);
    });

    peer.on('connect', () => {
      console.log('Responder connected successfully!');
      set({ connected: true });
    });

    peer.on('error', (err) => {
      console.error('Peer Error (Responder):', err);
    });

    set({ peer }); // Store the peer instance
  },

  // Send an encrypted message
  sendMessage: () => {
    const { peer, connected, message, secretKey } = get();

    if (!peer || !connected) {
      console.error('Peer not connected.');
      return;
    }

    if (!message.trim()) {
      console.error('Cannot send an empty message.');
      return;
    }

    const encryptedMessage = encryptMessage(message, secretKey); // Encrypt the message using the external function
    console.log('Sending encrypted message:', encryptedMessage);

    peer.send(encryptedMessage);

    set((state) => ({
      encryptedMessages: [
        ...state.encryptedMessages,
        { sender: 'me', text: encryptedMessage, time: new Date().toLocaleTimeString() },
      ],
      message: '', // Clear the input field
    }));
  },

  // Handle incoming encrypted message
  handleMessage: (data) => {
    const { secretKey } = get();

    const decryptedMessage = decryptMessage(data.toString(), secretKey); // Decrypt the message using the external function
    console.log('Received decrypted message:', decryptedMessage);

    set((state) => ({
      encryptedMessages: [
        ...state.encryptedMessages,
        { sender: 'peer', text: decryptedMessage, time: new Date().toLocaleTimeString() },
      ],
    }));
  },
}));
