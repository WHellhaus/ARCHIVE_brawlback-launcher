import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const LauncherSettings = () => {

  return (
    <Box>
      <Grid container >
        <Grid item xs={6}>
          <TextField id="outlined-basic" label="Launcher" variant="outlined" defaultValue={"hello"} sx={{width: '95%'}} />
        </Grid>
        <Grid item xs={6}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" defaultValue={"hello"} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default LauncherSettings;