import React, {useState, useLayoutEffect} from 'react'
import MenuLogin from '../components/MenuLogin';
import Grid from '@mui/material/Grid';
import icone from '../images/icone.png';
import Footer from '../components/Footer';

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
                    <MenuLogin/>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    {image}
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={5}></Grid>
                <Grid item xs={3}><h1>Seja Bem-vindo</h1></Grid>
                <Grid item xs={12}><h2>O que é?</h2> MSBmanager é um aplicativo para gerenciar e controlar os filmes, 
                séries e livros já lidos/assistidos, podendo marcar se já completo, em que parte está ou 
                tem interesse!</Grid>
                <Grid item xs={10}></Grid>
                <Grid item xs={12}><Footer /></Grid>
            </Grid>
        </div>
    )
}
