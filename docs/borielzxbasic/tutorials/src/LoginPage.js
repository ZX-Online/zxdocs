import React, {useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Link from '@mui/material/Link';
//import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const LoginPage = (setAuth)=> {
  const [ UsernameReg, setUsernameReg ] = useState('user')
  const [ UserpassReg, setUserpassReg ] = useState('')
  //const mylocation=useLocation();
  const navigate=useNavigate();


  const onLogin= ()=> {
    //const article = { title: 'React Hooks POST Request Example' };
    axios.post('/api/login', {'username':UsernameReg,'password':UserpassReg})
        .then(response => {

          if ([302].indexOf(response.status) !== -1) {
              //localStorage.setItem('auth',true);
              setAuth(true)
              navigate('/')
              window.location.reload(true);

              }
          else if ([200].indexOf(response.status) !== -1) {
            //localStorage.setItem('auth',false);
            navigate ('/')
            window.location.reload(true);
            //.reload(true);
          }

        //  window.location.href='/'
        });


//  onClose={handleClose}

  // if (UsernameReg==UserpassReg) {
  //   localStorage.setItem('auth', true )
  // }
  };
  const client_id="630aa5e108976b204d8a"
  return (
    <Modal
        keepMounted
        open={true}

        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
    <Box
      component="form"
      sx={style}
      noValidate
      autoComplete="off"
    >
      {UsernameReg }

       <div>
        <TextField sx={{ m: 1,width: '20ch'}}
          required
          id="outlined-required"
          label="Login"
          onChange = { (e)=> {
            setUsernameReg(e.target.value)
          }}
          />
        <TextField sx={{ m: 1,width: '20ch'}}
          required
          id="tlined-required"
          label="Password"
          defaultValue="Hello World"
          onChange = { (e)=> {
            setUserpassReg(e.target.value)
          }}
                  />
        </div>
        <div >
            <Button sx={{ m:1,width: '25ch' }}  variant="contained"
            onClick={ onLogin }>
                Login
            </Button>
            <Link  href={"https://github.com/login/oauth/authorize?scope=user:email&client_id=" + client_id}>

           <Button  variant="text" color="inherit" >
            Login with github
           </Button>
           </Link>


        </div>

          </Box>
          </Modal>

  );
 }

export default LoginPage;
