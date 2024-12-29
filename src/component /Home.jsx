import React from 'react';
import { Typography, Button, Grid, Container, Card, CardContent, Icon } from '@mui/material';
import { Chat, Lock, Group } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate('/Login'); // Replace '/login' with the path to your login/signup page
  };
  return (
    <div>
      

      {/* Hero Section */}
      <Container sx={{ textAlign: 'center', py: 10, bgcolor: '#123456', color: 'white' }}>
        <Typography variant="h2">Stay Connected with the World!</Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>
          Real-time chat, secure messages, and powerful features for everyone.
        </Typography>
        <Button variant="contained" color="secondary" sx={{ mt: 3, mx: 1 }}  onClick={handleGetStarted}>Get Started</Button>
        <Button variant="outlined" color="secondary" sx={{ mt: 3, mx: 1 }}>Learn More</Button>
      </Container>

      {/* Features Section */}
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>Features</Typography>
        <Grid container spacing={4}>
          {[
            { title: "Secure Messaging", icon: <Lock />, description: "Your chats are end-to-end encrypted." },
            { title: "Group Chats", icon: <Group />, description: "Chat with multiple friends at once." },
            { title: "Media Sharing", icon: <Chat />, description: "Easily share photos and videos." },
          ].map((feature, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card sx={{ textAlign: 'center', p: 2 }}>
                <Icon sx={{ fontSize: 40, color: 'secondary.main' }}>{feature.icon}</Icon>
                <CardContent>
                  <Typography variant="h6">{feature.title}</Typography>
                  <Typography>{feature.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Container sx={{ bgcolor: 'grey.900', color: 'white', py: 4, mt: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Quick Links</Typography>
            <Typography>Features</Typography>
            <Typography>About Us</Typography>
            <Typography>Contact</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Follow Us</Typography>
            {/* Add Social Media Icons here */}
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography>© 2024 Alvin. All rights reserved.</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
