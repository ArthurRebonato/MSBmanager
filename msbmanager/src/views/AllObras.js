import React, {useState, useLayoutEffect} from 'react'
import {getObras} from '../services/Firebase';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import HeaderLogin from '../components/HeaderLogin';

export default function AllObras() {
    const [obras, setObras] = useState([])

    useLayoutEffect(() => {
        pegarObras()
    }, [])

    const pegarObras = async () => {
        let dados = await getObras()
        setObras(dados)
    }
      
    return (
        <div>
            <Banner />
            <HeaderLogin />
            <Grid container spacing={2}>
                <Grid item xs={5}></Grid>
                <Grid item xs={7}>
                <h1>Todas as obras</h1>
                </Grid>
                {obras.map((row) => (
                    <Grid item xs={4}>
                        <Card sx={{ display: 'flex', marginLeft: '2rem', marginRight: '2rem', height: 350}}>
                            <CardMedia
                                component="img"
                                sx={{ width: 151 }}
                                className="image tamanhoObras"
                                image={row.capa}
                                alt="Imagem capa do filme/série/livro"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography variant="h7" color="text.secondary" component="div">
                                    {row.categoria}
                                </Typography>
                                <Typography component="div" variant="h5">
                                    {row.nome}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {row.sinopse}
                                </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                ))}
                <Grid item xs={12}></Grid>
                <Grid item xs={12}><Footer /></Grid>
            </Grid>
        </div>
    )
}
