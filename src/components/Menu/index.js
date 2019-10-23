import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';

import {withRouter} from 'react-router-dom';
import Navbar from '../Navbar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '30px',
  },
  toolbar:{
    borderBottom: `1px solid #AFAFAF`,

  },
  
  title: {
    flexGrow: 1,
    display: 'none',
    textAlign:'center',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      color:'#000',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },

  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '-2px -48px',
    color:'#000',

  },
  inputRoot: {
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
      backgroundColor: '#F5F3F2',

    },
  },
}));

const Menu = (props) => {
  const classes = useStyles();
  const {applyFilter} = props

  return (
    <div className={classes.root}>
      
      <AppBar style={{ background: '#FFF' }} position="static">
        <Toolbar className={classes.toolbar}>
        
          <Typography className={classes.title} variant="h6" noWrap>
            Diario
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={applyFilter}
              onKeyPress={(event)=>event.key === 'Enter' ? props.history.push(`/search/${event.target.value}`):null}
            />
                      <Divider />

          </div>

          </Toolbar>

          <Navbar />

      </AppBar>
    </div>
  );
}

export default withRouter(Menu)