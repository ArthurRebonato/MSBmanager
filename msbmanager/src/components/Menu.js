import React from 'react'
import { Grid } from '@mui/material'
import {useHistory} from "react-router-dom";
import { logoff } from '../services/Firebase'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ContactsIcon from '@mui/icons-material/Contacts';

export default function Menu() {
    let history = useHistory();

    const efetuarLogoff = () => {
        logoff().then(() => history.push("/"))
    }

    return (
        <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" 
                        size="medium" 
                        endIcon={<HomeIcon />} 
                        onClick={() => history.push("/home")}
                        fullWidth>
                        Home
                        </Button>
                    </Stack>
                </Grid>
                <Grid item xs={2}>
                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" 
                        size="medium" 
                        endIcon={<AddCircleOutlineIcon />} 
                        onClick={() => history.push("/obras")}
                        fullWidth>
                        Fazer Cadastros
                        </Button>
                    </Stack>
                </Grid>
                <Grid item xs={2}>
                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" 
                        size="medium" 
                        endIcon={<ListAltIcon />} 
                        onClick={() => history.push("/obraslista")}
                        fullWidth>
                        Visualizar Lista
                        </Button>
                    </Stack>
                </Grid>
                <Grid item xs={2}>
                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" 
                        size="medium" 
                        endIcon={<CommentIcon />} 
                        fullWidth>
                        Recados
                        </Button>
                    </Stack>
                </Grid>
                <Grid item xs={2}>
                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" 
                        size="medium" 
                        endIcon={<ContactsIcon />} 
                        fullWidth>
                        Contato
                        </Button>
                    </Stack>
                </Grid>
                <Grid item xs={2}>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" 
                        size="medium" 
                        endIcon={<LogoutIcon />} 
                        onClick={efetuarLogoff}
                        color="error"
                        fullWidth>
                        Logoff
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
    )
}
