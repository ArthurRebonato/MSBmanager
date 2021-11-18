import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React, {useState, useLayoutEffect} from 'react';
import {storageSave, storageRemove, storageGet} from "./services/Storage"

function App() {
  const [lembreme, setLembreme] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  useLayoutEffect(() => {
      let emailStorage = storageGet("email")
      let passwordStorage = storageGet("password")

      if (emailStorage){
        setEmail(emailStorage)
        setPassword(passwordStorage)
        setLembreme(true)
      }
    }, [])

    const handleLembreme = (e) => {
      setLembreme(e.target.checked)
 
      if(e.target.checked === true){
       storageSave("email", email)
       storageSave("password", password)
      } else {
       storageRemove("email")
       storageRemove("password")
      }
    }

  return (
    <Grid container spacing={1}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TextField type="email" 
          id="filled-basic" 
          label="E-mail" 
          variant="filled" 
          fullWidth 
          margin="dense"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TextField type="password" 
          id="filled-basic" 
          label="Senha" 
          variant="filled" 
          fullWidth 
          margin="dense"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          <FormGroup>
            <FormControlLabel control={<Checkbox checked={lembreme} 
            onChange={handleLembreme} />} 
            label="Lembre-me" />
          </FormGroup>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" 
            size="medium" 
            startIcon={<AppRegistrationIcon/> }
            fullWidth>
              Registrar
            </Button>
            <Button variant="contained" 
            size="medium" 
            endIcon={<LoginIcon />} 
            fullWidth>
              Logar
            </Button>
          </Stack>
        </Grid>
      </Grid>
  );
}

export default App;
