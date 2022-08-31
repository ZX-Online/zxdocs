//import * as React from "react";
import React, { useEffect, }  from "react";
import { BrowserRouter as Router ,
    Routes,
    Route,
    Link,
    useNavigate,




}
 from "react-router-dom";

import CssBaseline from '@mui/material/CssBaseline';
import { styled   } from '@mui/material/styles';
import {  createTheme, ThemeProvider } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import TerminalIcon from '@mui/icons-material/Terminal';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

import MenuIcon from '@mui/icons-material/Menu';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';


import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Button from '@mui/material/Button';

import MuiDrawer from '@mui/material/Drawer';


import axios from 'axios';


import LoginPage from './LoginPage'
import RequireAuth from './RequireAuth'
// import FileBrowser from './FileBrowser';
import ServerList  from './ServerList';
import DashBoard from './DashBoard';

import useAuth from './UseAuth';




import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import NotificationsIcon from '@mui/icons-material/Notifications';




const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);


function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
      setOpenM(false)
    };

  const { auth, setAuth } = useAuth(false);
  const mdTheme = createTheme();
  const [open, setOpen] = React.useState(false);
  const [openM, setOpenM] = React.useState(false);


  const toggleDrawer = () => {
    setOpen(!open);
};

  // if(!) {
  //   return <Login setAuth={setAuth} />
  // }
  //const [auth,setAuth]= useState('true' && localStorage.getItem('auth'));
  //let auth=localStorage.getItem('auth');

  useEffect ( () =>  {
    axios.post('/api/is_auth').then(response => {
      console.log(response.data);


      //localStorage.setItem('auth',response.data.auth);
      if (response.data.auth) {
        setAuth(true)

      } else {
        setAuth(false)




      }
      //
    });



      localStorage.setItem('auth',false);
//localStorage.getItem('auth')
  },[])


    // if (isLoggedIn) {
    //   button = <LogoutButton onClick={this.handleLogoutClick} />;
    // } else {
    //   button = <LoginButton onClick={this.handleLoginClick} />;
    // }


// const getAuth= ()=> {
//   //const article = { title: 'React Hooks POST Request Example' };
//
// // if (UsernameReg==UserpassReg) {
// //   localStorage.setItem('auth', true )
// // }
// };
//

  return (
        <Router>
        <ThemeProvider theme={mdTheme}>
             <Box sx={{ display: 'flex' }}>
               <CssBaseline />
               <AppBar position="absolute" open={open}>
                 <Toolbar
                   sx={{
                     pr: '24px', // keep right padding when drawer closed
                   }}
                 >
                   { auth &&<IconButton
                     edge="start"
                     color="inherit"
                     aria-label="open drawer"
                     onClick={toggleDrawer}
                     sx={{
                       marginRight: '36px',
                       ...(open && { display: 'none' }),
                     }}
                   >
                     <MenuIcon />
                   </IconButton> }

                     Dashboard


                     <Link  to="/profile">
                       <Button color="inherit">
                       User
                       </Button>

                      </Link>



                       { auth &&<Link  to= "/logout" >
                      <Button  variant="text" color="inherit" >
                       logout
                      </Button>
                      </Link>}


                      { !auth &&<Link  to= "/login" >
                     <Button  color="inherit">
                      login
                     </Button>
                     </Link>}

                     { auth &&<Typography
                       component="h1"
                       variant="h6"
                       color="inherit"
                       noWrap
                       sx={{ flexGrow: 1 }}
                     >

                   <IconButton color="inherit">
                     <Badge badgeContent={4} color="secondary">
                       <NotificationsIcon />
                     </Badge>
                   </IconButton>
                   </Typography>}

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={openMenu ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={openM}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

                 </Toolbar>
               </AppBar>
                { auth &&<Drawer variant="permanent" open={open}>
                 <Toolbar
                   sx={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'flex-end',
                     px: [1],
                   }}
                 >
                   <IconButton onClick={toggleDrawer}>
                     <ChevronLeftIcon />
                   </IconButton>
                 </Toolbar>
                 <Divider />

                 <List component="nav">
                 <ListItemButton>
                  <ListItemIcon >
                   <HomeIcon />
                       </ListItemIcon >
                      <ListItemText primary={'Главная'} />
                 </ListItemButton>

                 <ListItemButton>

                  <ListItemIcon >
                   <AppsIcon />
                       </ListItemIcon >
                      <ListItemText primary={'Приложения'} />
                 </ListItemButton>
                 <ListItemButton>

                  <ListItemIcon >
                   <FolderOpenIcon />
                       </ListItemIcon >
                      <ListItemText primary={'Файлы'} />
                 </ListItemButton>

                 <ListItemButton>

                  <ListItemIcon >
                   <TerminalIcon />
                       </ListItemIcon >
                      <ListItemText primary={'Консоли'} />
                 </ListItemButton>
                   <Divider sx={{ my: 1 }} />

                 </List>
               </Drawer> }
               <Box
                 component="main"
                 sx={{
                   backgroundColor: (theme) =>
                     theme.palette.mode === 'light'
                       ? theme.palette.grey[100]
                       : theme.palette.grey[900],
                   flexGrow: 1,
                   height: '100vh',
                   overflow: 'auto',
                 }}
               >
                 <Toolbar />
                 <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>







          <Routes>
            <Route path="/" element={<Home auth={auth} />} />
            <Route path="/login" element={<LoginPage setAuth={setAuth}  />} />
            <Route path="/logout" element={<Logout setAuth={setAuth} />} />
            <Route  path="/profile" element={
              <RequireAuth isAuth={auth} >
              <DashBoard  />
              </RequireAuth>
            } />
            <Route  path="/servers" element={
              <RequireAuth isAuth={auth} >
              <ServerList  />
              </RequireAuth>
            } />





        </Routes>
        Copyright
      </Container>
    </Box>
              </Box>
              </ThemeProvider>
        </Router>

    );
}
// <Route  path="/profile2" element={
//   <RequireAuth isAuth={auth} >
//   <Profile  />
//   </RequireAuth>
// } />

// function User() {
//   return (
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//       User
//       </Box>
//   );
// }




function Logout(setAuth) {
  const navigate=useNavigate();

  axios.post('/api/logout').then(response => {
    console.log(response.data);

    //if (response.data.auth) {
    if ([302].indexOf(response.status) !== -1) {
      setAuth(false)
      //localStorage.setItem('auth',false);
      navigate('/')

      window.location.reload(true);
    }
    //
  });


  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    Home
    </Box>
  );
}


function Home(auth) {
  return (
    <div>
    {JSON.stringify({'rez':auth})}
    HOME</div>
  );
}
export default App;
//onClick={buttonClick('apps')}
// <List>
//
//     <ListItem button  >
//       <ListItemIcon>
//         <InboxIcon />
//       </ListItemIcon>
//       <ListItemText primary="Приложения" />
//     </ListItem>
//     <ListItem button >
//       <ListItemIcon>
//         <InboxIcon />
//       </ListItemIcon>
//       <ListItemText primary="Виртуальные сервера" />
//     </ListItem>
// </List>
//---------------------------------------
// </Link >
//  {auth &&
//  <Link to="/profile">
// <Button sx={{ my: 2, color: 'white', display: 'block' }}>
//     User
// </Button>
//   </Link>
// }
//  {auth &&
//   <Link  to= "/logout" >
//   <Button  sx={{ my: 2, color: 'white', display: 'block' }} >
//    logout
//   </Button>
//   </Link>
// }
// {!auth &&
//  <Link  to= "/login" >
//  <Button  sx={{ my: 2, color: 'white', display: 'block' }} >
//   login
//  </Button>
//  </Link>
// }
// <Link  to= "/profile2" >
// <Button  sx={{ my: 2, color: 'white', display: 'block' }} >
// profile2
// </Button>
// </Link>
// < Link to="/">
//  <Button sx={{ my: 2,  color: 'white', display: 'block' }}>
//      Home
//  </Button>
