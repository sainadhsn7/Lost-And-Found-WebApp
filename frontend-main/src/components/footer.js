import React from 'react';
import { Box, Typography, Link, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email'; // Import Gmail icon

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Center the items vertically
                padding: '16px',
                marginTop: 'auto',
                width: '100%',
                maxWidth: { xs: '100%', sm: '600px', md: '800px' }, // Responsive maxWidth for footer
                marginLeft: 'auto', // Center horizontally
                marginRight: 'auto', // Center horizontally
            }}
        >
            
            <Typography variant="body2" color="text.secondary">
                {'© '}
                <Link color="inherit" href="https://lost-and-found-skbm.onrender.com">
                    Lost Found
                </Link>{' '}
                {new Date().getFullYear()}
                {'. All rights reserved.'}
            </Typography>

            {/* Contact Admin Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                <Typography variant="body2" color="text.secondary">
                    Contact Admin for issues
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
