import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PaymentIcon from '@mui/icons-material/Payment';
import RateReviewIcon from '@mui/icons-material/RateReview';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HandymanIcon from '@mui/icons-material/Handyman';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import AddReviews from '../AddReview/AddReviews';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../../AdminRoute/AdminRoute';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddProduct from '../AddProduct/AddProduct';
import Pay from '../Pay/Pay';
const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { logout, admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    let { path, url } = useRouteMatch();
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {
                    !admin && <Box>
                        <ListItem component={NavLink} activeStyle={{ "color": 'red' }} to={`${url}/pay`} button >
                            <ListItemIcon>
                                <PaymentIcon />
                            </ListItemIcon>
                            <ListItemText primary={'pay'} />
                        </ListItem>
                        <ListItem component={NavLink} activeStyle={{ "color": 'red' }} to={`${url}/myorders`} button >
                            <ListItemIcon>
                                <ShoppingCartIcon />
                            </ListItemIcon>
                            <ListItemText primary={'MyOrders'} />
                        </ListItem>
                        <ListItem component={NavLink} activeStyle={{ "color": 'red' }} to={`${url}/review`} button >
                            <ListItemIcon>
                                <RateReviewIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Review'} />
                        </ListItem>
                    </Box>
                }
                {
                    admin && <Box>
                        <ListItem component={NavLink} activeStyle={{ "color": 'red' }} to={`${url}/makeAdmin`} button >
                            <ListItemIcon>
                                <AdminPanelSettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Add Admin'} />
                        </ListItem>
                        <ListItem component={NavLink} activeStyle={{ "color": 'red' }} to={`${url}/manageAllOrders`} button >
                            <ListItemIcon>
                                <RateReviewIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Manage all orders'} />
                        </ListItem>
                        <ListItem component={NavLink} activeStyle={{ "color": 'red' }} to={`${url}/manageproducts`} button >
                            <ListItemIcon>
                                <HandymanIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Manage Products'} />
                        </ListItem>
                        <ListItem component={NavLink} activeStyle={{ "color": 'red' }} to={`${url}/addproduct`} button >
                            <ListItemIcon>
                                <RateReviewIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Add Products'} />
                        </ListItem>
                    </Box>
                }
                <ListItem onClick={logout} button  >
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary={'LogOut'} />
                </ListItem>
            </List>
            <Divider />
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h5' sx={{ flexGrow: 1 }}>Drone House</Typography>
                    <Typography >
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/home"><Button color="inherit">Home</Button></NavLink>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/explore"><Button color="inherit">Explore</Button></NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, mt: 10, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >

                <Switch>
                    <Route exact path={path}>
                        {
                            admin ? <ManageAllOrders></ManageAllOrders> : <MyOrders></MyOrders>
                        }
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/myorders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <AddReviews></AddReviews>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addproduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;