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

export default function Grido(props) {
  const classes = useStyles();

  const { noticias } = props
  const destacadas = noticias.slice(3, 5).map(newsItem => {
    return newsItem
  })
  
  const grillaRoll = noticias.slice(5, 200).map(news => {
    return news
  })

  return (
    
    <div className={classes.root}>
      <Grid container spacing={3}>
        

        <Grid item xs={12}>
          <Carrusello noticias={noticias}/>
        </Grid>
        {destacadas.map(noticia => {
          return (
            <Grid item xs={6} key={noticia._id}>
              <Destacados noticia={noticia} />
            </Grid>
          )
        })}
        
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