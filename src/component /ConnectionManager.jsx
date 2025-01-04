// import Peer from "simple-peer";

// export const createPeer = (initiator) => {
//   const peer = new Peer({ initiator, trickle: false });
//   return peer;
// };

// export const handleSignal = (peer, signalData) => {
//   peer.signal(signalData);
// };

import Peer from 'simple-peer';
import CryptoJS from 'crypto-js';

export const createInitiator = (signalCallback) => {
  const peer = new Peer({ initiator: true, trickle: false });

  peer.on('signal', (data) => {
    console.log('Initiator Signal Data:', data);
    signalCallback(data);
  });

  return peer;
};

export const createResponder = (signalData, signalCallback) => {
  const peer = new Peer({ initiator: false, trickle: false });

  peer.signal(signalData);

  peer.on('signal', (data) => {
    console.log('Responder Signal Data:', data);
    signalCallback(data);
  });

  return peer;
};

// Function to encrypt a message
export const encryptMessage = (message, secretKey) => {
  return CryptoJS.AES.encrypt(message, secretKey).toString();
};

// Function to decrypt a message
export const decryptMessage = (encryptedMessage, secretKey) => {
  const bytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};
