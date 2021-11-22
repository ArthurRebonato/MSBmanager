import React, {useState} from 'react'
import { Grid } from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { saveRecados } from '../services/Firebase';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import HeaderLogin from '../components/HeaderLogin';

export default function Contato() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [assunto, setAssunto] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [msg, setMsg] = useState("")
    const [open, setOpen] = React.useState(false);
    const [errorStatus, setErrorStatus] = React.useState(true);

    const saveR = async () => {
        if (nome === "" || email === "" || assunto === "" || mensagem === "") {
            setMsg("Preencha todos os campos!")
            setOpen(true)
            setErrorStatus(true)
        } else {
            let objeto = {
            nome: nome,
            email: email,
            assunto: assunto,
            mensagem: mensagem
            }

            try{
                await saveRecados(objeto)
                setNome("")
                setEmail("")
                setAssunto("")
                setMensagem("")
                setMsg("Mensagem enviada!")
                setErrorStatus(false)
                setOpen(true)
            } catch(error){
                setMsg(error)
                setOpen(true)
                setErrorStatus(true)
            }
        }   
    }

    return (
        <div>
            <Banner />
            <HeaderLogin />
            <Grid container spacing={2}>
                <Grid item xs={3.5}></Grid>
                <Grid item xs={8.5}>
                <h1>Recado aos usuários - Contato</h1>
                </Grid>
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
                <Grid item xs={2}></Grid>
                <Grid item xs={4}>
                    <TextField type="text" 
                    id="filled-basic" 
                    label="Nome" 
                    variant="outlined" 
                    size="small"
                    fullWidth
                    value={nome}
                    onChange={(e)=> setNome(e.target.value)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField type="email"
                    id="filled-basic" 
                    label="Email" 
                    variant="outlined" 
                    size="small"
                    fullWidth
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={4}>
                    <TextField type="text" 
                    id="filled-basic" 
                    label="Assunto" 
                    variant="outlined" 
                    size="small"
                    fullWidth
                    value={assunto}
                    onChange={(e)=> setAssunto(e.target.value)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField type="text" 
                    id="filled-basic" 
                    label="Mensagem" 
                    variant="outlined" 
                    multiline
                    rows={5}
                    size="small"
                    fullWidth
                    value={mensagem}
                    onChange={(e)=> setMensagem(e.target.value)}
                    />
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" 
                        size="medium" 
                        color="info"
                        onClick={saveR}
                        fullWidth>
                        Enviar
                        </Button>
                    </Stack>
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}><Footer /></Grid>
            </Grid>
        </div>
    )
}
