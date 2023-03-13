import { Box, Button, Typography } from '@mui/material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const HomeText = () => {
  return (
    <Box
      backgroundColor="#2F0949"
      // width="50%"
      height="100vh"
      padding="2rem 3.5rem"
      paddingRight='8rem'
    >
      <Typography variant="h4" sx={{ color: '#8746A8', fontWeight: '600' ,fontSize:'2rem' }}>
        homebase
      </Typography>
      <ManageAccountsIcon
        sx={{ color: '#bd69dc', fontSize: '4rem', mt: '3rem' }}
      />
      <Typography
        variant="h5"
        sx={{ color: '#fff', fontWeight: '600', pr: '5rem', my: '1rem' ,fontSize:'1.6rem' }}
      >
        Everything you need to manage & pay your hourly team
      </Typography>
      <Typography variant="body1" sx={{ color: '#fff', pr: '5rem' }}>
        Simplify and save time with scheduling, time clocks, team communication,
        full-service payroll, and HR–all in one place.
      </Typography>
      <Button
        variant="text"
        sx={{
          textDecoration: 'underline',
          color: '#fff',
          px: '0px',
          textTransform: 'capitalize',
          fontSize: '1rem',
          my: '1rem',
          fontWeight: '600',
          ':hover': {
            color: '#868D96',
            bgcolor:'transparent',
            textDecoration: 'underline',
          },
          
        }}
      >
        Learn More
      </Button>
    </Box>
  );
};

export default HomeText;
