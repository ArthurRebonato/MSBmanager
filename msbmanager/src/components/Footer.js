import React from 'react'
import { Grid } from '@mui/material';

export default function Footer() {
    return (
        <footer>
            <Grid item xs={6}>
                Desenvolvido por Arthur Rebonato para a Disciplina de Tópicos especiais em programação|IMED
            </Grid>
            <Grid item xs={6}>
                Email para contato: arthur.rebonato@hotmail.com
            </Grid>
        </footer>
    )
}
