import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Button, Container, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import './MainNav.css'
import { borderBottom } from '@mui/system';
const MainNav = () => {
    const { user, logout } = useAuth();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const [colorChange, setColorChange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 600) {
            setColorChange(true);
        }
        else {
            setColorChange(false)
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    const noActive = { textDecoration: 'none', color: colorChange ? 'gray' : 'white', borderRadius: '0', transition: 'color .3s' }
    const activeStyle = { color: colorChange ? 'black' : 'orange' }
    const navStyle = { backgroundColor: colorChange ? 'white' : 'transparent', transition: '.3s', boxShadow: colorChange ? ' 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)' : 'none' }
    return (
        <AppBar sx={navStyle} position="fixed">
            <Container maxWidth="xl">

                <Toolbar disableGutters>
                    <IconButton
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon sx={{ color: colorChange ? 'gray' : 'white' }} />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'gray', textAlign: { xs: 'center', md: 'left' } }}>
                        <span className='main_title'>MPQ</span> Drone
                    </Typography>
                    <Box sx={{
                        display: { xs: 'none', md: 'block' },
                    }}>
                        <Button component={NavLink} style={noActive} activeStyle={activeStyle} to='/home' >Home</Button>
                        <Button component={NavLink} style={noActive} activeStyle={activeStyle} to='/explore' >Explore</Button>
                    </Box>

                    {
                        user?.email ?
                            <Box className='flex'>
                                <Box sx={{
                                    display: { xs: 'none', md: 'block' },
                                }}>
                                    <Button component={NavLink} style={noActive} activeStyle={activeStyle} to='/dashboard' >Dashboard</Button>
                                    <Button style={noActive} onClick={logout}  >Logout</Button>
                                </Box>
                                <Avatar className='inline-block' alt="user photo" src={user.photoURL} />

                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', }} to="/login">
                                <Button style={noActive}  >Login</Button>
                            </NavLink>

                    }
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' }
                        }}
                    >
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Button component={NavLink} style={noActive} activeStyle={activeStyle} to='/home' >Home</Button>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Button component={NavLink} style={noActive} activeStyle={activeStyle} to='/explore' >Explore</Button>
                        </MenuItem>
                        {
                            user?.email ?
                                <Box className='flex'>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Button component={NavLink} style={noActive} activeStyle={activeStyle} to='/dashboard' >Dashboard</Button>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Button style={noActive} onClick={logout}  >Logout</Button>
                                    </MenuItem>
                                </Box>
                                :
                                <NavLink style={{ textDecoration: 'none', }} to="/login">
                                    <Button  >Login</Button>
                                </NavLink>
                        }
                    </Menu>
                </Toolbar>

            </Container>
        </AppBar>
    );
};

export default MainNav;