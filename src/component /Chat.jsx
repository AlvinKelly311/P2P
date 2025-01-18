
// import React, { useState, useEffect } from 'react';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
// import SendIcon from '@mui/icons-material/Send';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Drawer from '@mui/material/Drawer';
// import Peer from 'simple-peer';
// import { encryptMessage, decryptMessage } from './ConnectionManager';

// const secretKey = 'your-secret-key'; // Replace with a secure key

// const Chat = () => {
//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [peer, setPeer] = useState(null);
//   const [mySignalData, setMySignalData] = useState('');  // Initially empty
//   const [peerSignalInput, setPeerSignalInput] = useState('');
//   const [conversations, setConversations] = useState({
//     Alice: [],
//     Bob: [],
//   });

//   const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

//   useEffect(() => {
//     const initiator = new Peer({ initiator: true, trickle: false });

//     initiator.on('signal', (data) => {
//       setMySignalData(JSON.stringify(data)); // Set the signal data to share
//     });

//     initiator.on('data', (data) => {
//       const decrypted = decryptMessage(data.toString(), secretKey);
//       setMessages((prev) => [...prev, { sender: 'Alice', content: decrypted }]);

//       setConversations((prev) => ({
//         ...prev,
//         Alice: [...prev.Alice, { sender: 'Alice', content: decrypted }],
//       }));
//     });

//     setPeer(initiator);
//   }, []);

//   const handleSendMessage = () => {
//     if (input.trim() && peer) {
//       const encrypted = encryptMessage(input, secretKey);
//       peer.send(encrypted);

//       const newMessage = { sender: 'You', content: input };
//       setMessages((prev) => [...prev, newMessage]);
//       setConversations((prev) => ({
//         ...prev,
//         Alice: [...prev.Alice, newMessage],
//       }));
//       setInput('');
//     }
//   };

//   const handleJoin = () => {
//     if (peer && peerSignalInput) {
//       peer.signal(JSON.parse(peerSignalInput));
//     }
//   };

//   const handleGenerateSignal = () => {
//     if (peer) {
//       console.log('Signal Data Generated:', mySignalData);
//     }
//   };

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#123456' }}>
//       {/* Sidebar */}
//       <Box sx={{ display: { xs: 'none', md: 'flex' }, width: '25%', backgroundColor: '#123456', color: '#fff', flexDirection: 'column' }}>
//         <Typography variant="h6" sx={{ p: 2, textAlign: 'center', fontWeight: 'bold' }}>
//           Conversations
//         </Typography>
//         <List>
//           {['Alice', 'Bob', 'Charlie', 'David'].map((name) => (
//             <React.Fragment key={name}>
//               <ListItem button>
//                 <ListItemAvatar>
//                   <Avatar>{name[0]}</Avatar>
//                 </ListItemAvatar>
//                 <ListItemText primary={name} secondary="Last message preview..." />
//               </ListItem>
//               <Divider sx={{ backgroundColor: '#ccc' }} />
//             </React.Fragment>
//           ))}
//         </List>
//       </Box>

//       {/* Chat Panel */}
//       <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#fff' }}>
//         {/* Chat Header */}
//         <Box sx={{ p: 2, backgroundColor: '#123456', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <IconButton onClick={toggleDrawer} sx={{ color: '#fff', display: { xs: 'block', md: 'none' } }}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" sx={{ flex: 1, textAlign: 'center' }}>
//             Chat with Alice
//           </Typography>
//         </Box>

//         {/* Signal Data Section */}
//         <Box sx={{ p: 2 }}>
//           <Typography variant="body1" sx={{ mb: 1 }}>
//             My Signal Data:
//           </Typography>
//           <TextField
//             fullWidth
//             value={mySignalData}
//             multiline
//             rows={4}
//             disabled
//             sx={{ mb: 2 }}
//             placeholder="Click 'Generate Signal Data' to generate your signal data."
//           />
//           <Button
//             variant="contained"
//             onClick={handleGenerateSignal}
//             sx={{ backgroundColor: '#123456', color: '#fff', mb: 2 }}
//           >
//             Generate Signal Data
//           </Button>
//           <Typography variant="body1" sx={{ mb: 1 }}>
//             Peer Signal Data:
//           </Typography>
//           <TextField
//             fullWidth
//             placeholder="Paste Peer Signal Data Here..."
//             multiline
//             rows={4}
//             value={peerSignalInput}
//             onChange={(e) => setPeerSignalInput(e.target.value)}
//             sx={{ mb: 2 }}
//           />
//           <Button
//             variant="contained"
//             onClick={handleJoin}
//             sx={{ backgroundColor: '#123456', color: '#fff' }}
//           >
//             Join
//           </Button>
//         </Box>

//         {/* Chat Messages */}
//         <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
//           {messages.map((msg, index) => (
//             <Box key={index} sx={{ mb: 2, textAlign: msg.sender === 'You' ? 'right' : 'left' }}>
//               <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                 {msg.sender}:
//               </Typography>
//               <Typography variant="body2">{msg.content}</Typography>
//             </Box>
//           ))}
//         </Box>

//         {/* Chat Input */}
//         <Box sx={{ display: 'flex', alignItems: 'center', p: 2, borderTop: '1px solid #ccc', flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
//           <TextField
//             fullWidth
//             placeholder="Type your message..."
//             variant="outlined"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             sx={{ flex: 1, mb: { xs: 1, md: 0 }, mr: { xs: 0, md: 2 } }}
//           />
//           <Button variant="contained" endIcon={<SendIcon />} onClick={handleSendMessage} sx={{ backgroundColor: '#123456', color: '#fff' }}>
//             Send
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Chat;



import React, { useState, useEffect } from 'react';
import { create } from 'zustand';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Peer from 'simple-peer';

// Zustand store for state management
const useChatStore = create((set) => ({
  messages: [],
  setMessages: (newMessages) => set((state) => ({ messages: [...state.messages, ...newMessages] })),
  peer: null,
  setPeer: (peer) => set(() => ({ peer })),
}));

const Chat = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [input, setInput] = useState('');
  const [mySignalData, setMySignalData] = useState('');
  const [peerSignalInput, setPeerSignalInput] = useState('');

  const { messages, setMessages, peer, setPeer } = useChatStore();

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

  useEffect(() => {
    const initiator = new Peer({ initiator: true, trickle: false });

    initiator.on('signal', (data) => {
      setMySignalData(JSON.stringify(data)); // Set the signal data to share
    });

    initiator.on('data', (data) => {
      setMessages([{ sender: 'Peer', content: data.toString() }]);
    });

    setPeer(initiator);
  }, [setPeer, setMessages]);

  const handleSendMessage = () => {
    if (input.trim() && peer) {
      peer.send(input);
      setMessages([{ sender: 'You', content: input }]);
      setInput('');
    }
  };

  const handleJoin = () => {
    if (peer && peerSignalInput) {
      peer.signal(JSON.parse(peerSignalInput));
    }
  };

  const handleGenerateSignal = () => {
    if (peer) {
      console.log('Signal Data Generated:', mySignalData);
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#123456' }}>
      {/* Sidebar */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          width: '25%',
          backgroundColor: '#123456',
          color: '#fff',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h6"
          sx={{ p: 2, textAlign: 'center', fontWeight: 'bold' }}
        >
          Conversations
        </Typography>
        <List>
          {['Alice', 'Bob', 'Charlie', 'David'].map((name) => (
            <React.Fragment key={name}>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar>{name[0]}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={name} secondary="Last message preview..." />
              </ListItem>
              <Divider sx={{ backgroundColor: '#ccc' }} />
            </React.Fragment>
          ))}
        </List>
      </Box>

      {/* Chat Panel */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
        }}
      >
        {/* Chat Header */}
        <Box
          sx={{
            p: 2,
            backgroundColor: '#123456',
            color: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <IconButton
            onClick={toggleDrawer}
            sx={{ color: '#fff', display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flex: 1, textAlign: 'center' }}>
            Chat with Alice
          </Typography>
        </Box>

        {/* Signal Data Section */}
        <Box sx={{ p: 2 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            My Signal Data:
          </Typography>
          <TextField
            fullWidth
            value={mySignalData}
            multiline
            rows={4}
            disabled
            sx={{ mb: 2 }}
            placeholder="Click 'Generate Signal Data' to generate your signal data."
          />
          <Button
            variant="contained"
            onClick={handleGenerateSignal}
            sx={{ backgroundColor: '#123456', color: '#fff', mb: 2 }}
          >
            Generate Signal Data
          </Button>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Peer Signal Data:
          </Typography>
          <TextField
            fullWidth
            placeholder="Paste Peer Signal Data Here..."
            multiline
            rows={4}
            value={peerSignalInput}
            onChange={(e) => setPeerSignalInput(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            onClick={handleJoin}
            sx={{ backgroundColor: '#123456', color: '#fff' }}
          >
            Join
          </Button>
        </Box>

        {/* Chat Messages */}
        <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
          {messages.map((msg, index) => (
            <Box
              key={index}
              sx={{ mb: 2, textAlign: msg.sender === 'You' ? 'right' : 'left' }}
            >
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {msg.sender}:
              </Typography>
              <Typography variant="body2">{msg.content}</Typography>
            </Box>
          ))}
        </Box>

        {/* Chat Input */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 2,
            borderTop: '1px solid #ccc',
            flexWrap: { xs: 'wrap', md: 'nowrap' },
          }}
        >
          <TextField
            fullWidth
            placeholder="Type your message..."
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            sx={{ flex: 1, mb: { xs: 1, md: 0 }, mr: { xs: 0, md: 2 } }}
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleSendMessage}
            sx={{ backgroundColor: '#123456', color: '#fff' }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
