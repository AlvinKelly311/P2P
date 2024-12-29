import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Avatar,
  Button,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import saro from '../assets/saro.jpg';

const pages = ['Home', 'Chat'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    if (page && location.pathname !== `/${page.toLowerCase()}`) {
      navigate(`/${page.toLowerCase()}`);
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
//     <AppBar position="static" sx={{ backgroundColor: '#123456' }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             ChipChat
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
//   {pages.map((page) => (
//     <Button
//       key={page}
//       onClick={() => handleCloseNavMenu(page)}
//       disabled={location.pathname === `/${page.toLowerCase()}`}
//       sx={{
//         my: 2,
//         color: location.pathname === `/${page.toLowerCase()}` ? 'gray' : 'white',
//         fontWeight: location.pathname === `/${page.toLowerCase()}` ? 'bold' : 'normal',
//         '&:hover': {
//           backgroundColor:
//             location.pathname === `/${page.toLowerCase()}` ? 'transparent' : 'rgba(255, 255, 255, 0.1)',
//           cursor: location.pathname === `/${page.toLowerCase()}` ? 'default' : 'pointer',
//         },
//       }}
//     >
//       {page}
//     </Button>
//   ))}
// </Box>


//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Chip" src={saro} />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
<AppBar position="static" sx={{ backgroundColor: '#123456' }}>
  <Container maxWidth="xl">
    <Toolbar disableGutters>
      {/* Desktop Logo */}
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="#"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        ChipChat
      </Typography>

      {/* Mobile Hamburger Menu */}
      <IconButton
        size="large"
        aria-label="open navigation menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
        sx={{ display: { xs: 'flex', md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>

      {/* Mobile Logo */}
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="#"
        sx={{
          flexGrow: 1,
          textAlign: 'center',
          display: { xs: 'flex', md: 'none' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        ChipChat
      </Typography>

      {/* Desktop Navigation Links */}
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={() => handleCloseNavMenu(page)}
            disabled={location.pathname === `/${page.toLowerCase()}`}
            sx={{
              my: 2,
              color: location.pathname === `/${page.toLowerCase()}` ? 'gray' : 'white',
              fontWeight: location.pathname === `/${page.toLowerCase()}` ? 'bold' : 'normal',
              '&:hover': {
                backgroundColor:
                  location.pathname === `/${page.toLowerCase()}` ? 'transparent' : 'rgba(255, 255, 255, 0.1)',
                cursor: location.pathname === `/${page.toLowerCase()}` ? 'default' : 'pointer',
              },
            }}
          >
            {page}
          </Button>
        ))}
      </Box>

      {/* Profile Icon (Visible on Both Desktop and Mobile) */}
      <Avatar
        alt="Profile"
        src= {saro}
        sx={{ ml: { xs: 0, md: 'auto' }, display: 'flex' }}
      />

      {/* Mobile Navigation Links Menu */}
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {pages.map((page) => (
          <MenuItem
            key={page}
            onClick={() => handleCloseNavMenu(page)}
            disabled={location.pathname === `/${page.toLowerCase()}`}
          >
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Toolbar>
  </Container>
</AppBar>




  );
};

export default Navbar;
