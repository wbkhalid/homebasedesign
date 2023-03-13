import { Grid, Stack } from '@mui/material';
import HomeSignIn from './components/HomeSignIn';
import HomeText from './components/HomeText';

const App = () => {
  return (
    <Grid container>
      <Grid item lg={6} sm={12}>
        <HomeText />
      </Grid>
      <Grid item lg={6} sm={12}>
        <HomeSignIn />
      </Grid>
    </Grid>
  );
};

export default App;
