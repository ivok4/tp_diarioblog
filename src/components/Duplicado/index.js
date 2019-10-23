import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Cardo from '../Cardo'
import Carrusello from '../Carrusello'
import Destacados from '../Destacados'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Duplicado(props) {
  const classes = useStyles();

  const { noticias } = props

  
   const grillaRoll = noticias.slice(0, 3).map(newsItem => {
    return newsItem
})

  console.log(noticias)
  return (
    
    <div className={classes.root}>
      <Grid container spacing={3}>
        
        {grillaRoll.map(noticia => {
          return (
            <Grid item xs={3} key={noticia._id}>
              <Cardo noticia={noticia} />
            </Grid>
          )
        })}

      </Grid>
    </div>
  );
}