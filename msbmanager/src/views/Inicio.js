import React, {useState, useLayoutEffect} from 'react'
import Grid from '@mui/material/Grid';
import icone from '../images/icone.png';
import Footer from '../components/Footer';
import Header from '../components/HeaderLogin';
import Banner from '../components/Banner';
import Secoes from '../components/Secoes';

export default function Inicio() {
    const [image, setImage] = useState([])

    useLayoutEffect(() => {
        pegarImagem()
    }, [])

    const pegarImagem = () => {
        let dados = <img src={icone} alt="Icone do site"/>
        setImage(dados)
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Banner />
                    <Header />
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={8}>
                    {image}
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={9}><h1>O que é?</h1> <b>MSBmanager é um aplicativo para gerenciar e controlar os filmes, 
                séries e livros já lidos/assistidos, podendo marcar se já completou, em que parte está ou 
                se tem interesse! </b></Grid>
                <Grid item xs={12}>
                    <Secoes />
                    <Footer />
                </Grid>
            </Grid>
        </div>
    )
}
