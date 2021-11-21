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
import MSBmanager from '../images/msbmanager.png';

export default function Header() {
    let history = useHistory();

    const efetuarLogoff = () => {
        logoff().then(() => history.push("/"))
    }

    return (
        <header id="header">
            <div className="inner">
                <img className="logo" src={MSBmanager} alt="Logo do site"/>
                <nav id="nav">
                    <Grid container spacing={2}>
                        <Grid item xs={3.8}></Grid>
                        <Grid item xs={1.6}>
                            <Stack direction="row" spacing={2}>
                                <Button variant="outlined" 
                                size="medium" 
                                endIcon={<HomeIcon />} 
                                style={{backgroundColor:'white'}}
                                onClick={() => history.push("/home")}
                                fullWidth>
                                Home
                                </Button>
                            </Stack>
                        </Grid>
                        <Grid item xs={1.7}>
                            <Stack direction="row" spacing={2}>
                                <Button variant="outlined" 
                                size="medium" 
                                endIcon={<AddCircleOutlineIcon />} 
                                style={{backgroundColor:'white'}}
                                onClick={() => history.push("/obrascadastro")}
                                fullWidth>
                                Cadastro
                                </Button>
                            </Stack>
                        </Grid>
                        <Grid item xs={1.7}>
                            <Stack direction="row" spacing={2}>
                                <Button variant="outlined" 
                                size="medium" 
                                endIcon={<ListAltIcon />} 
                                style={{backgroundColor:'white'}}
                                onClick={() => history.push("/obraslista")}
                                fullWidth>
                                Lista
                                </Button>
                            </Stack>
                        </Grid>
                        <Grid item xs={1.6}>
                            <Stack direction="row" spacing={2}>
                                <Button variant="outlined" 
                                size="medium" 
                                endIcon={<CommentIcon />}
                                style={{backgroundColor:'white'}}
                                onClick={() => history.push("/recados")} 
                                fullWidth>
                                Recados
                                </Button>
                            </Stack>
                        </Grid>
                        <Grid item xs={1.6}>
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
                </nav>
                <a href="#navPanel" class="navPanelToggle"><span class="fa fa-bars"></span></a>
            </div>
        </header>
    )
}
