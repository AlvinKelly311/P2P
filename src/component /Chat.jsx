// import React, { useState } from 'react';
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


// const users = [
//   { name: "Alice", avatar: "https://example.com/alice.jpg" },
//   { name: "Bob", avatar: "https://example.com/bob.jpg" },
//   { name: "Charlie", avatar: "https://example.com/charlie.jpg" },
//   { name: "David", avatar: "https://example.com/david.jpg" },
// ];


// const Chat = () => {
//   const [isDrawerOpen, setDrawerOpen] = React.useState(false);
//   const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);
//   const [currentChat, setCurrentChat] = useState(users[0]); // Default to the first user
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const handleSendMessage = () => {
//         if (input.trim()) {
//           setMessages((prev) => [...prev, { sender: "You", content: input }]);
//           setInput("");
//         }
//   };


//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         height: '100vh',
//         backgroundColor: '#123456',
//       }}
//     >
//       {/* Sidebar for Desktop */}
//       <Box
//         sx={{
//           display: { xs: 'none', md: 'flex' },
//           width: '25%',
//           backgroundColor: '#123456',
//           color: '#fff',
//           flexDirection: 'column',
//         }}
//       >
//         <Typography
//           variant="h6"
//           sx={{
//             p: 2,
//             backgroundColor: '#123456',
//             textAlign: 'center',
//             fontWeight: 'bold',
//           }}
//         >
//           Conversations
//         </Typography>
//         <List>
//           {['Alice', 'Bob', 'Charlie', 'David'].map((name) => (
//             <React.Fragment key={name}>
//               <ListItem button>
//                 <ListItemAvatar>
//                   <Avatar>{name[0]}</Avatar>
//                 </ListItemAvatar>
//                 <ListItemText
//                   primary={name}
//                   secondary="Last message preview..."
//                 />
//               </ListItem>
//               <Divider sx={{ backgroundColor: '#ccc' }} />
//             </React.Fragment>
//           ))}
//         </List>
//       </Box>

//       {/* Drawer for Mobile */}
//       <Drawer
//         anchor="left"
//         open={isDrawerOpen}
//         onClose={toggleDrawer}
//         sx={{
//           display: { xs: 'block', md: 'none' },
//         }}
//       >
//         <Box
//           sx={{
//             width: 250,
//             backgroundColor: '#123456',
//             color: '#fff',
//             height: '100%',
//           }}
//         >
//           <Typography
//             variant="h6"
//             sx={{
//               p: 2,
//               textAlign: 'center',
//               fontWeight: 'bold',
//             }}
//           >
//             Conversations
//           </Typography>
//           <List>
//             {['Alice', 'Bob', 'Charlie', 'David'].map((name) => (
//               <React.Fragment key={name}>
//                 <ListItem button>
//                   <ListItemAvatar>
//                     <Avatar>{name[0]}</Avatar>
//                   </ListItemAvatar>
//                   <ListItemText
//                     primary={name}
//                     secondary="Last message preview..."
//                   />
//                 </ListItem>
//                 <Divider sx={{ backgroundColor: '#ccc' }} />
//               </React.Fragment>
//             ))}
//           </List>
//         </Box>
//       </Drawer>



//       {/* Chat Panel */}
//       <Box
//         sx={{
//           flex: 1,
//           display: 'flex',
//           flexDirection: 'column',
//           backgroundColor: '#fff',
//         }}
//       >
//         {/* Chat Header */}
//         <Box
//           sx={{
//             p: 2,
//             backgroundColor: '#123456',
//             color: '#fff',
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//           }}
//         >
//           <IconButton
//             onClick={toggleDrawer}
//             sx={{ color: '#fff', display: { xs: 'block', md: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" sx={{ flex: 1, textAlign: 'center' }}>
//             Chat with Alice
//           </Typography>
//         </Box>

//         {/* Chat Messages */}
//         <Box
//           sx={{
//             flex: 1,
//             overflowY: 'auto',
//             p: 2,
//           }}
//         >
//           <Box sx={{ mb: 2 }}>
//             <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//               Alice:
//             </Typography>
//             <Typography variant="body2">Hi there! How are you?</Typography>
//           </Box>
//           <Box sx={{ mb: 2, textAlign: 'right' }}>
//             <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//               You:
//             </Typography>
//             <Typography variant="body2">I'm good, thank you! How about you?</Typography>
//           </Box>
//         </Box>

        

//         {/* Chat Input */}
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             p: 2,
//             borderTop: '1px solid #ccc',
//             flexWrap: { xs: 'wrap', md: 'nowrap' },
//           }}
//         >


//           <TextField
//             fullWidth
//             placeholder="Type your message..."
//             variant="outlined"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             sx={{ flex: 1, mb: { xs: 1, md: 0 }, mr: { xs: 0, md: 2 } }}
//           />



//           <Button
//             variant="contained"
//             endIcon={<SendIcon />}
//             onClick={handleSendMessage}
//             sx={{ backgroundColor: "#123456", color: "#fff" }}
//           >
//             Send
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Chat;


import React, { useState, useEffect } from 'react';
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
import Drawer from '@mui/material/Drawer';
import Peer from 'simple-peer';
import { encryptMessage, decryptMessage } from './ConnectionManager';

const secretKey = 'your-secret-key'; // Replace with a secure key

const Chat = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [peer, setPeer] = useState(null);
  const [signalData, setSignalData] = useState(null);

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

  const handleSendMessage = () => {
    if (input.trim()) {
      const encrypted = encryptMessage(input, secretKey);
      peer.send(encrypted); // Send encrypted message
      setMessages((prev) => [...prev, { sender: 'You', content: input }]);
      setInput('');
    }
  };

  // Initialize Peer as Initiator
  useEffect(() => {
    const initiator = new Peer({ initiator: true, trickle: false });

    initiator.on('signal', (data) => {
      console.log('Signal Data:', data);
      setSignalData(data);
    });

    initiator.on('data', (data) => {
      const decrypted = decryptMessage(data.toString(), secretKey);
      setMessages((prev) => [...prev, { sender: 'Alice', content: decrypted }]);
    });

    setPeer(initiator);
  }, []);

  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#123456' }}>
      {/* Sidebar */}
      <Box sx={{ display: { xs: 'none', md: 'flex' }, width: '25%', backgroundColor: '#123456', color: '#fff', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{ p: 2, textAlign: 'center', fontWeight: 'bold' }}>
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
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#fff' }}>
        {/* Chat Header */}
        <Box sx={{ p: 2, backgroundColor: '#123456', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <IconButton onClick={toggleDrawer} sx={{ color: '#fff', display: { xs: 'block', md: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flex: 1, textAlign: 'center' }}>
            Chat with Alice
          </Typography>
        </Box>

        {/* Chat Messages */}
        <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
          {messages.map((msg, index) => (
            <Box key={index} sx={{ mb: 2, textAlign: msg.sender === 'You' ? 'right' : 'left' }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {msg.sender}:
              </Typography>
              <Typography variant="body2">{msg.content}</Typography>
            </Box>
          ))}
        </Box>

        {/* Chat Input */}
        <Box sx={{ display: 'flex', alignItems: 'center', p: 2, borderTop: '1px solid #ccc', flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
          <TextField
            fullWidth
            placeholder="Type your message..."
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            sx={{ flex: 1, mb: { xs: 1, md: 0 }, mr: { xs: 0, md: 2 } }}
          />
          <Button variant="contained" endIcon={<SendIcon />} onClick={handleSendMessage} sx={{ backgroundColor: '#123456', color: '#fff' }}>
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;


// import React, { useState } from "react";

// const Chat = () => {
//   const [contacts, setContacts] = useState([
//     { id: 1, name: "Alice", messages: ["Hi!"] },
//     { id: 2, name: "Bob", messages: [] },
//   ]);
//   const [currentContactId, setCurrentContactId] = useState(1); // Default to Alice
//   const [newMessage, setNewMessage] = useState("");

//   // Get current contact based on ID
//   const currentContact = contacts.find(
//     (contact) => contact.id === currentContactId
//   );

//   const sendMessage = () => {
//     if (!newMessage.trim()) return; // Prevent empty messages

//     setContacts((prevContacts) =>
//       prevContacts.map((contact) =>
//         contact.id === currentContactId
//           ? {
//               ...contact,
//               messages: [...contact.messages, `You: ${newMessage}`],
//             }
//           : contact
//       )
//     );
//     setNewMessage(""); // Clear input field after sending
//   };

//   const switchChat = (id) => {
//     setCurrentContactId(id);
//     setNewMessage(""); // Clear message input when switching chats
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Chat App</h1>
//       <div style={{ display: "flex", gap: "20px" }}>
//         {/* Contacts List */}
//         <div>
//           <h2>Contacts</h2>
//           <ul style={{ listStyle: "none", padding: 0 }}>
//             {contacts.map((contact) => (
//               <li
//                 key={contact.id}
//                 onClick={() => switchChat(contact.id)}
//                 style={{
//                   padding: "10px",
//                   cursor: "pointer",
//                   backgroundColor:
//                     contact.id === currentContactId ? "#ccc" : "transparent",
//                   border: "1px solid #000",
//                   marginBottom: "5px",
//                 }}
//               >
//                 {contact.name}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Chat Area */}
//         <div style={{ flexGrow: 1 }}>
//           <h2>Chat with {currentContact.name}</h2>
//           <div
//             style={{
//               border: "1px solid #000",
//               padding: "10px",
//               height: "300px",
//               overflowY: "auto",
//               marginBottom: "10px",
//             }}
//           >
//             {currentContact.messages.length > 0 ? (
//               currentContact.messages.map((msg, index) => (
//                 <div key={index}>{msg}</div>
//               ))
//             ) : (
//               <p>No messages yet.</p>
//             )}
//           </div>

//           {/* Message Input */}
//           <div style={{ display: "flex", gap: "10px" }}>
//             <input
//               type="text"
//               value={newMessage}
//               onChange={(e) => setNewMessage(e.target.value)}
//               placeholder="Type your message"
//               style={{ flexGrow: 1, padding: "10px" }}
//             />
//             <button onClick={sendMessage} style={{ padding: "10px" }}>
//               Send
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;

