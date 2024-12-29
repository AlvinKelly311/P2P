import Peer from "simple-peer";

export const createPeer = (initiator) => {
  const peer = new Peer({ initiator, trickle: false });
  return peer;
};

export const handleSignal = (peer, signalData) => {
  peer.signal(signalData);
};
