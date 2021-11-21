import React from 'react'
import {useHistory} from "react-router-dom";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import CollectionsIcon from '@mui/icons-material/Collections';
import ContactsIcon from '@mui/icons-material/Contacts';
import HomeIcon from '@mui/icons-material/Home';
import MSBmanager from '../images/msbmanager.png';

export default function HeaderLogin() {
    let history = useHistory();

    return (
        <header id="header">
            <div className="inner">
                <img className="logo" src={MSBmanager} alt="Logo do site"/>
                <nav id="nav">
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                        </Grid>
                        <Grid item xs={2}>
                            <Stack direction="row" spacing={2}>
                                <Button variant="outlined" 
                                size="medium" 
                                endIcon={<HomeIcon />} 
                                style={{backgroundColor:'white'}}
                                onClick={() => history.push("/")}
                                fullWidth>
                                    Inicial
                                </Button>
                            </Stack>
                        </Grid>
                        <Grid item xs={2}>
                            <Stack direction="row" spacing={2}>
                                <Button variant="outlined" 
                                size="medium" 
                                endIcon={<CollectionsIcon />} 
                                style={{backgroundColor:'white'}}
                                onClick={() => history.push("/allobras")}
                                fullWidth>
                                All Obras
                                </Button>
                            </Stack>
                        </Grid>
                        <Grid item xs={2}>
                            <Stack direction="row" spacing={2}>
                                <Button variant="outlined" 
                                size="medium" 
                                endIcon={<ContactsIcon />} 
                                style={{backgroundColor:'white'}}
                                onClick={() => history.push("/contato")}
                                fullWidth>
                                Contato
                                </Button>
                            </Stack>
                        </Grid>
                        <Grid item xs={2}>
                            <Stack direction="row" spacing={2}>
                                <Button variant="contained" 
                                size="medium" 
                                endIcon={<MeetingRoomIcon />} 
                                onClick={() => history.push("/login")}
                                color="info"
                                fullWidth>
                                Login
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
