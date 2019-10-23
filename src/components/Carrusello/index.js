import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
//import tileData from './tileData';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    height:'400px',
  },
  title: {
    color: '#FFF',
    fontSize:40,
    lineHeight:'100%',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      lineHeight:'100%',
  },


  
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

export default function Carrusello({noticias}) {
  const classes = useStyles();
  const carrusel = noticias.slice(0, 3).map(newsItem => {
    return newsItem
  })
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={1}>
        {carrusel.map(noticia => (
          <GridListTile  style={{ height: '400px' }} key={noticia._id}>
           <p> <a href={noticia.url} style={{ width: '100%' }} target="_blank"><img style={{ height: '100%', width:'100%'}} src={noticia.img_url} alt={noticia.title}/></a></p>
            <GridListTileBar
              title={noticia.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
             
            />
          
          </GridListTile>
        ))}
       
      </GridList>
    </div>
  );
}