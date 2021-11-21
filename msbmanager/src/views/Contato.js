import React, {useState} from 'react'
import MenuLogin from '../components/MenuLogin'
import { Grid } from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { saveRecados } from '../services/Firebase';
import Footer from '../components/Footer';

export default function Contato() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [assunto, setAssunto] = useState("")
    const [mensagem, setMensagem] = useState("")

    const saveR = async () => {
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
            console.log("dados salvos")
        } catch(error){
            console.log(error)
        }
       
    }

    return (
        <div>
            <MenuLogin />
            <Grid container spacing={2}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                <h1>Recado aos usuários - Contato</h1>
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
