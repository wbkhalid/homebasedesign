import { Google, PhoneEnabled } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

const HomeSignIn = () => {
  return (
    <Box
      // width="50%"
      height="100vh"
      display="flex"
      flexDirection="column"
      marginTop="5rem"
      alignItems="center"
    >
      <Typography variant="h5" sx={{ fontSize: '1.7rem', fontWeight: '600' }}>
        Welcome back.
      </Typography>
      <Stack direction="row">
        <Typography variant="body1" sx={{ color: '#50555A', p: '0px' }}>
          New to Homebase?
        </Typography>
        <Button
          sx={{ p: '0px', textTransform: 'capitalize', fontWeight: 'bold' }}
        >
          Sign Up
        </Button>
      </Stack>
      <Stack width="60%" direction="column">
        <TextField
          id="outlined-basic"
          placeholder="Email"
          variant="outlined"
          margin="dense"
          InputProps={{ sx: { height: 45 } }}
        />
        <TextField
          id="outlined-basic"
          placeholder="Password"
          variant="outlined"
          type="password"
          margin="dense"
          InputProps={{ sx: { height: 45 } }}
        />
        <Stack direction="row" justifyContent="space-between">
          <FormControlLabel control={<Checkbox />} label="Remember me" />
          <Button
            sx={{ p: '0px', textTransform: 'capitalize', fontWeight: 'bold' }}
          >
            Forgot Password
          </Button>
        </Stack>
        <Button
          variant="contained"
          sx={{
            textTransform: 'capitalize',
            bgcolor: '#5b148c',
            fontWeight: 'bold',
            ':hover': {
              bgcolor: '#390C57',
            },
          }}
        >
          Sign in
        </Button>

        <Typography
          variant="subtitle2"
          sx={{ color: '#959EAC', mt: '2rem', mb: '1rem', textAlign: 'center' }}
        >
          Or sign in with:
        </Typography>
        <Stack direction="row" justifyContent="space-around" width="100%">
          <Stack color="primary.main">
            <PhoneEnabled />
            <Typography variant="caption">Phone</Typography>
          </Stack>

          <Stack color="error.main">
            <Google />
            <Typography variant="caption">Google</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HomeSignIn;
