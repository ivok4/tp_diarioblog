import React from 'react'
//import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles(theme => ({
   
    toolbarLink: {
      padding: '100px',
      flexShrink: 0,
      color:'#000',
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
        width:'100%',
        height:'50px',
        paddingTop:'15px',
        paddingLeft:'60px',
      },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,.3)',
    },
   
  
  }));
  

const Navbar = () =>{
    const classes = useStyles();

    return(
        <div component="nav" variant="dense" className={classes.toolbarSecondary}>
          
            <Link to={'./'} 
                color="inherit"
                noWrap
                variant="body2"
                href="/"
                className={classes.toolbarLink}
             >
            Home
            </Link>
          
            <Link to={'/category/tecnologia'} 
            color="inherit"
            noWrap
            variant="body2"
            href="/category/tecnologia"
            className={classes.toolbarLink}
            >
            Tecnologia
            </Link>

            <Link to={'/category/politica'} 
            color="inherit"
            noWrap
            variant="body2"
            href="/category/politica"
            className={classes.toolbarLink}
            >
            Politica
            </Link>

            <Link to={'/category/internacionales'}
            color="inherit"
            noWrap
            variant="body2"
            href="/category/internacionales"
            className={classes.toolbarLink} 
            >
            Internacionales
            </Link>

            <Link to={'/category/espectaculos'} 
            color="inherit"
            noWrap
            variant="body2"
            href="/category/espectaculos"
            className={classes.toolbarLink}
            >
            Espectaculos
            </Link>
            <Link to={'/category/deportes'} 
            color="inherit"
            noWrap
            variant="body2"
            href="/category/deportes"
            className={classes.toolbarLink}
            >
            Deportes
            </Link>
        </div>
    )
}
export default Navbar