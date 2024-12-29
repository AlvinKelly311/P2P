import React, { useState } from 'react';
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


const users = [
  { name: "Alice", avatar: "https://example.com/alice.jpg" },
  { name: "Bob", avatar: "https://example.com/bob.jpg" },
  { name: "Charlie", avatar: "https://example.com/charlie.jpg" },
  { name: "David", avatar: "https://example.com/david.jpg" },
];


const Chat = () => {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);
  const [currentChat, setCurrentChat] = useState(users[0]); // Default to the first user
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
        if (input.trim()) {
          setMessages((prev) => [...prev, { sender: "You", content: input }]);
          setInput("");
        }
  };


  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        backgroundColor: '#123456',
      }}
    >
      {/* Sidebar for Desktop */}
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
          sx={{
            p: 2,
            backgroundColor: '#123456',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
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
                <ListItemText
                  primary={name}
                  secondary="Last message preview..."
                />
              </ListItem>
              <Divider sx={{ backgroundColor: '#ccc' }} />
            </React.Fragment>
          ))}
        </List>
      </Box>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        <Box
          sx={{
            width: 250,
            backgroundColor: '#123456',
            color: '#fff',
            height: '100%',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              p: 2,
              textAlign: 'center',
              fontWeight: 'bold',
            }}
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
                  <ListItemText
                    primary={name}
                    secondary="Last message preview..."
                  />
                </ListItem>
                <Divider sx={{ backgroundColor: '#ccc' }} />
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>



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

        {/* Chat Messages */}
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            p: 2,
          }}
        >
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Alice:
            </Typography>
            <Typography variant="body2">Hi there! How are you?</Typography>
          </Box>
          <Box sx={{ mb: 2, textAlign: 'right' }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              You:
            </Typography>
            <Typography variant="body2">I'm good, thank you! How about you?</Typography>
          </Box>
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
            sx={{ backgroundColor: "#123456", color: "#fff" }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;


