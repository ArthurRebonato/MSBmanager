import React, {useState, useLayoutEffect} from 'react'
import { Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { getRecados } from '../services/Firebase';

export default function Recado() {
    const [recados, setRecados] = useState([])

    useLayoutEffect(() => {
        pegarRecados()
    }, [])

    const pegarRecados = async () => {
        let dados = await getRecados()
        setRecados(dados)
    }

    return (
        <div>
            <h1>Recados</h1>
            <Grid container spacing={2}>
                {recados.map((row) => (
                    <Grid item xs={4}>
                        <Card sx={{ width: 'fullWidth', marginTop: '2rem', marginLeft: '2rem', marginRight: '2rem', textAlign: 'center'}}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {row.assunto}
                                    </Typography>
                                    <Typography color="text.secondary">
                                        {row.nome}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        {row.email}
                                    </Typography>
                                    <Typography variant="body2">
                                        {row.mensagem}
                                    </Typography>
                                </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            
            
        </div>
    )
}
