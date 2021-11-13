import { Container, Grid, ListItem, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box style={{ backgroundColor: '#000', color: "#fff", marginTop: '30px' }}
        >
            <Container sx={{ py: 3 }}>
                <Typography sx={{ textAlign: 'center' }} variant='h5'>Drone House <span> Copyright naimur. All Rights Reserved</span></Typography>

            </Container>
        </Box>
    );
};

export default Footer;