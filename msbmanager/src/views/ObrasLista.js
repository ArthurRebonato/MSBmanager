import React, {useState, useLayoutEffect} from 'react'
import { Grid } from '@mui/material'
import {deleteObras, getObrasbyID, getObrasbyIDandCategoria, getToken} from '../services/Firebase';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

export default function ObrasLista() {
    const [obras, setObras] = useState([])

    useLayoutEffect(() => {
        pegarObras()
    }, [])

    const pegarObras = async () => {
        let dados = await getObrasbyID(getToken())
        setObras(dados)
    }

    const pegarObrasbyCategoria = async (categoria) => {
        let dados = await getObrasbyIDandCategoria(getToken(), categoria)
        setObras(dados)
    }

    const deletar = async (id) => {
        await deleteObras(id)
        await pegarObras()
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
            <Grid container spacing={2}>
                <Grid item xs={12} style={{textAlign:'center'}}><h1>Lista de obras</h1></Grid>
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
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 1000 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Capa</TableCell>
                                        <TableCell align="center">Nome</TableCell>
                                        <TableCell align="center">Categoria</TableCell>
                                        <TableCell align="center">Progresso</TableCell>
                                        <TableCell align="center">Sinopse</TableCell>
                                        <TableCell align="center">Opções</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {obras.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="center"><img className="obrasLista" src={row.capa} alt="Imagem da obra"/></TableCell>
                                            <TableCell align="center"><h2>{row.nome}</h2></TableCell>
                                            <TableCell align="center">{row.categoria}</TableCell>
                                            <TableCell align="center">{row.progresso}</TableCell>
                                            <TableCell align="center">{row.sinopse}</TableCell>
                                            <TableCell align="center">
                                                <Stack direction="row" spacing={1}>
                                                    <IconButton aria-label="delete" size="large" onClick={(() => deletar(row.id))}>
                                                        <DeleteIcon fontSize="inherit" />
                                                    </IconButton>
                                                </Stack>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                </Grid>
                <Grid item xs={12}></Grid>
            </Grid>
        </div>
    )
}

