import React, {useState} from 'react'
import { Grid } from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';
import {saveObras} from '../services/Firebase';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useHistory} from "react-router-dom";
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

export default function ObrasCadastro() {
    let history = useHistory();
    const [nome, setNome] = useState("")
    const [sinopse, setSinopse] = useState("")
    const [categoria, setCategoria] = useState("")
    const [capa, setCapa] = useState("")
    const [progresso, setProgresso] = useState("")
    const [msg, setMsg] = useState("")
    const [open, setOpen] = React.useState(false);
    const [errorStatus, setErrorStatus] = React.useState(true);

    const save = async () => {
        if (nome === "" || sinopse === "" || categoria === "" || capa === "" || progresso === "") {
            setMsg("Preencha todos os campos!")
            setOpen(true)
            setErrorStatus(true)
        } else {
            let objeto = {
            nome: nome,
            sinopse: sinopse,
            categoria: categoria,
            capa: capa,
            progresso: progresso
            }
            try{
                await saveObras(objeto)
                history.push("/obraslista")
            } catch(error){
                setMsg(error)
                setOpen(true)
            }   
        }
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{textAlign:'center'}}><h1>Cadastro Obras</h1></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4} style={{textAlign:'center'}}>
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
                <Grid item xs={2.5}></Grid>
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
                <Grid item xs={5.5}>
                    <FormControl sx={{minWidth: 437}}>
                        <InputLabel id="demo-simple-select-standard-label">Categoria</InputLabel>
                        <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        size="small"
                        fullWidth
                        value={categoria}
                        onChange={(e)=> setCategoria(e.target.value)}
                        label="Categoria"
                        >
                        <MenuItem value={"Filme"}>Filme</MenuItem>
                        <MenuItem value={"Série"}>Série</MenuItem>
                        <MenuItem value={"Livro"}>Livro</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2.5}></Grid>
                <Grid item xs={4}>
                    <TextField type="text" 
                    id="filled-basic" 
                    label="Link img" 
                    variant="outlined" 
                    size="small"
                    fullWidth
                    value={capa}
                    onChange={(e)=> setCapa(e.target.value)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField type="text" 
                    id="filled-basic" 
                    label="Progresso" 
                    variant="outlined" 
                    size="small"
                    fullWidth
                    value={progresso}
                    onChange={(e)=> setProgresso(e.target.value)}
                    />
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4.6}>
                    <TextField type="text" 
                    id="filled-basic" 
                    label="Sinopse" 
                    variant="outlined" 
                    multiline
                    rows={5}
                    size="small"
                    fullWidth
                    value={sinopse}
                    onChange={(e)=> setSinopse(e.target.value)}
                    />
                </Grid>
                <Grid item xs={4.3}></Grid>
                <Grid item xs={4}>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" 
                        size="medium" 
                        endIcon={<SaveIcon />} 
                        color="info"
                        onClick={save}
                        fullWidth>
                        Salvar
                        </Button>
                    </Stack>
                </Grid>
                <Grid item xs={5}></Grid>
            </Grid>
        </div>
    )
}

