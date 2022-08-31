import React, { useEffect,useState }  from "react";
import Grid from '@mui/material/Grid';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import HomeIcon from '@mui/icons-material/Home';
// import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import FolderIcon from '@mui/icons-material/Folder';

// import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
// import DeleteIcon from '@mui/icons-material/Delete';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemIcon from '@mui/material/ListItemIcon';

// import ListItemText from '@mui/material/ListItemText';
// import FolderIcon from '@mui/icons-material/Folder';

// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Toolbar from '@mui/material/Toolbar';
// import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';


// import MailIcon from '@mui/icons-material/Mail';
// import StorageIcon from '@mui/icons-material/Storage';
// import CommentIcon from '@mui/icons-material/Comment';
// import IconButton from '@mui/material/IconButton';
// import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';

// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import Button from '@mui/material/Button';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import Container from '@mui/material/Container';


import axios from 'axios';


// const drawerWidth = 240;
//const data_auth= true;





function DashBoard () {
  // const [dashboard,setDashboard]= useState('servers');
//   const buttonClick = (dash) => () => {
//   // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//   //   return;
//   // }
//
//   setDashboard(dash);
// };

  // const [data]= useState(
  //   {"auth": true, "files": [{"modify_time": "2022-06-15 22:32:49", "is_dir": true, "name": "back", "size_str": "4.0 KB", "permiss": "drwxrwxr-x"}, {"modify_time": "2022-06-15 22:32:16", "is_dir": true, "name": ".cache", "size_str": "4.0 KB", "permiss": "drwx------"}, {"modify_time": "2022-05-25 06:46:10", "is_dir": false, "name": ".gitignore", "size_str": "1.7568359375 KB", "permiss": "-rw-rw-r--"}, {"modify_time": "2022-06-15 22:29:49", "is_dir": true, "name": "front", "size_str": "4.0 KB", "permiss": "drwxrwxr-x"}, {"modify_time": "2022-05-25 06:46:10", "is_dir": false, "name": "index.html", "size_str": "2.1435546875 KB", "permiss": "-rw-rw-r--"}, {"modify_time": "2022-05-25 06:46:10", "is_dir": false, "name": "1", "size_str": "28 bytes", "permiss": "-rw-rw-r--"}, {"modify_time": "2022-06-15 22:27:47", "is_dir": true, "name": ".git", "size_str": "4.0 KB", "permiss": "drwxrwxr-x"}, {"modify_time": "2022-05-25 06:46:10", "is_dir": false, "name": "README.md", "size_str": "21 bytes", "permiss": "-rw-rw-r--"}, {"modify_time": "2022-06-15 22:32:19", "is_dir": true, "name": ".local", "size_str": "4.0 KB", "permiss": "drwxr-xr-x"}, {"modify_time": "2022-05-25 06:46:10", "is_dir": true, "name": "task2.1", "size_str": "4.0 KB", "permiss": "drwxrwxr-x"}]}
  //
  //
  // );

  const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
  //const auth=true;
  const [data,setData]= useState('');
  useEffect ( () =>  {
    axios.post('/api/profile')
        .then(response => {
          console.log(response);
          setData(response.data)
          localStorage.setItem('auth',response.data.auth)
        })
        .catch(error => {
           console.error('There was an error!', error);
        });

  },[])

//   const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));
//  {JSON.stringify(data.files) }
  // setData({"auth": true, "files": [{"modify_time": "2022-06-15 22:32:49", "is_dir": true, "name": "back", "size_str": "4.0 KB", "permiss": "drwxrwxr-x"}, {"modify_time": "2022-06-15 22:32:16", "is_dir": true, "name": ".cache", "size_str": "4.0 KB", "permiss": "drwx------"}, {"modify_time": "2022-05-25 06:46:10", "is_dir": false, "name": ".gitignore", "size_str": "1.7568359375 KB", "permiss": "-rw-rw-r--"}, {"modify_time": "2022-06-15 22:29:49", "is_dir": true, "name": "front", "size_str": "4.0 KB", "permiss": "drwxrwxr-x"}, {"modify_time": "2022-05-25 06:46:10", "is_dir": false, "name": "index.html", "size_str": "2.1435546875 KB", "permiss": "-rw-rw-r--"}, {"modify_time": "2022-05-25 06:46:10", "is_dir": false, "name": "1", "size_str": "28 bytes", "permiss": "-rw-rw-r--"}, {"modify_time": "2022-06-15 22:27:47", "is_dir": true, "name": ".git", "size_str": "4.0 KB", "permiss": "drwxrwxr-x"}, {"modify_time": "2022-05-25 06:46:10", "is_dir": false, "name": "README.md", "size_str": "21 bytes", "permiss": "-rw-rw-r--"}, {"modify_time": "2022-06-15 22:32:19", "is_dir": true, "name": ".local", "size_str": "4.0 KB", "permiss": "drwxr-xr-x"}, {"modify_time": "2022-05-25 06:46:10", "is_dir": true, "name": "task2.1", "size_str": "4.0 KB", "permiss": "drwxrwxr-x"}]})
  return (
    <div>



      { !data.auth &&
        <div>
          <p>Forbidden</p>
        </div>
      }
      { data.auth &&
          <div>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 600,
                width: 750,

                maxHeight: 600,


              }}
            >



            <Breadcrumbs aria-label="breadcrumb">
                    <Link
                      underline="hover"
                      sx={{ display: 'flex', alignItems: 'center' }}
                      color="inherit"

                    >
                      <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                      MUI
                    </Link>
                    <Link
                      underline="hover"
                      sx={{ display: 'flex', alignItems: 'center' }}
                      color="inherit"

                    >

                      Core
                    </Link>
                    <Typography
                      sx={{ display: 'flex', alignItems: 'center' }}
                      color="text.primary"
                    >

                      Breadcrumb
                    </Typography>
                  </Breadcrumbs>

<List dense={true}
  component="nav"
  sx={{maxHeight: 300,
    fontSize: 14,
    overflow: 'auto',
    width:690,
    position: 'relative',}}
     >

  { data && data.files.map((item)=>
    <Demo key={item.name} >


    <ListItem>
    <ListItemButton item xs={4}>

      <IconButton  sx={{ color: '#888' ,width: 40,fontSize:'10px'}}  edge="start" aria-label="delete"> {item.is_dir ?<FolderIcon />:<InsertDriveFileIcon />} </IconButton>
        <ListItemText item xs={4}  sx={{ width: 150}}             primary=<div>{item.name}</div>             />
        </ListItemButton>

        <IconButton  sx={{ color: '#888' ,width: 40,fontSize:'10px'}}  edge="end" aria-label="delete"> <DownloadIcon /> </IconButton>
        <IconButton sx={{ color: '#888' ,width: 40,fontSize: '10px'}}  edge="end" aria-label="delete"> <EditIcon /> </IconButton>
        <IconButton  sx={{ color: '#888' ,width: 40,fontSize:'10px'}}  edge="end" aria-label="delete"> <DeleteIcon /> </IconButton>
        <ListItemText   item xs={4} sx={{  fontSize: '13px' ,color: '#888' , width: 150}}                primary=<div>{" "+item.modify_time +"  "+item.size_str}</div>             />
    </ListItem>

  </Demo>)}
</List>



    </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >

              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                Orders
              </Paper>
            </Grid>
          </Grid>


        </div>    }

</div>
)}



export default  DashBoard;
