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
import {storageSave, storageRemove, storageGet} from "../services/Storage"
import {login, registration} from '../services/Firebase'
import {useHistory} from "react-router-dom";
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import HeaderLogin from '../components/HeaderLogin';

function Login() {
   let history = useHistory();
   const [lembreme, setLembreme] = useState(false)
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [msg, setMsg] = useState("")
   const [open, setOpen] = React.useState(false);
   const [errorStatus, setErrorStatus] = React.useState(true);

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

   const efetuarLogin = async () => {
     login(email, password)
     .then(() => history.push("/home"))
     .catch(error => {
       setMsg(error)
       setErrorStatus(true)
       setOpen(true)
    })
   } 

   const efetuarCadastro = async () => {
     registration(email, password)
     .then((retorno) => {
       setMsg(retorno)
       setErrorStatus(false)
       setOpen(true)
     })
     .catch(error => {
      setMsg(error)
      setErrorStatus(true)
      setOpen(true)
     })
   }

  return (
      <div>
        <Banner />
        <HeaderLogin />
        <Grid container spacing={1}>
          <Grid item xs={5.5}></Grid>
          <Grid item xs={4}><h1>Login</h1></Grid>
          <Grid item xs={2.5}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Collapse in={open}>
              <Alert severity={errorStatus? "error" : "success"}
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                {msg}
              </Alert>
            </Collapse>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <TextField type="email" 
            id="filled-basic" 
            label="Email" 
            variant="filled" 
            margin="dense"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            fullWidth
            />
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <TextField type="password" 
            id="filled-basic" 
            label="Senha" 
            variant="filled"  
            margin="dense"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            fullWidth
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
              onClick={efetuarCadastro}
              fullWidth>
                Registrar
              </Button>
              <Button variant="contained" 
              size="medium" 
              endIcon={<LoginIcon />} 
              onClick={efetuarLogin}
              fullWidth>
                Logar
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}><Footer /></Grid>
        </Grid>
      </div>
  );
}

export default Login;
