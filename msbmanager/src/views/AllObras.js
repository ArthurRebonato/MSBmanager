import React, {useState, useLayoutEffect} from 'react'
import {getObras, getObrasbyCategoria} from '../services/Firebase';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import HeaderLogin from '../components/HeaderLogin';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function AllObras() {
    const [obras, setObras] = useState([])

    useLayoutEffect(() => {
        pegarObras()
    }, [])

    const pegarObras = async () => {
        let dados = await getObras()
        setObras(dados)
    }

    const pegarObrasbyCategoria = async (categoria) => {
        let dados = await getObrasbyCategoria(categoria)
        setObras(dados)
    }

    const handleTodos = () => {
        pegarObras()
    }

    const handleFilmes = () => {
        pegarObrasbyCategoria("Filme")
    }

    const handleSeries = () => {
        pegarObrasbyCategoria("Série")
    }

    const handleLivro = () => {
        pegarObrasbyCategoria("Livro")
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
                <Grid item xs={3} style={{marginLeft:10, textAlign:'center'}}><h2>Filtrar por categoria:</h2></Grid>
                <Grid item xs={3}>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" 
                        size="medium" 
                        onClick={handleTodos}
                        fullWidth>
                            Todos
                        </Button>
                        <Button variant="outlined" 
                        size="medium" 
                        onClick={handleFilmes}
                        fullWidth>
                            Filmes
                        </Button>
                        <Button variant="outlined" 
                        size="medium" 
                        onClick={handleSeries}
                        fullWidth>
                            Séries
                        </Button>
                        <Button variant="outlined" 
                        size="medium" 
                        onClick={handleLivro}
                        fullWidth>
                            Livros
                        </Button>
                    </Stack>
                </Grid>
                <Grid item xs={12}></Grid>
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
