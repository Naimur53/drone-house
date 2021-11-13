import { Container, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box style={{ backgroundColor: '#000', color: "#fff", marginTop: '30px' }}
        >
            <Container sx={{ py: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h3'>Drone House</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <List>
                            <ListItem>About Tour</ListItem>
                            <ListItem>Read our blog </ListItem>
                            <ListItem>Sign up to see details</ListItem>
                            <ListItem>Add your info</ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <List>
                            <ListItem>Get help</ListItem>
                            <ListItem>Read FAQs</ListItem>
                            <ListItem>View all cities</ListItem>
                            <ListItem>Tour center near me</ListItem>
                        </List>
                    </Grid>
                </Grid>
                <Box sx={{ display: 'flex', borderTop: '1px solid gray', mt: 3, py: 2 }}>
                    <small style={{ margin: 'auto' }}>Copyright &#169; 2021 Hash tour</small>
                    <List sx={{ display: 'flex', width: '80%' }}>
                        <ListItem>Privacy Policy</ListItem>
                        <ListItem>Terms of Use</ListItem>
                        <ListItem>Pricing</ListItem>
                    </List>
                </Box>

            </Container >
        </Box >
    );
};

export default Footer;