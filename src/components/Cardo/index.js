import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    height:'300px',
    color:'#000',

  },
  header:{
    color: '#000',
    height:'300px',

    },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    color: '#000',
    fontSize:15,
    display:'-webkit-inline-box',
  },
  cardContent:{
    color: '#000',
    fontSize:15,
    display:'-webkit-inline-box',
  },
}));

export default function Cardo(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const {noticia} = props
  const {
    category,
    img_url,
    url,
    title,
    source_name,
    source_id
    } = noticia

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (

    <Card className={classes.card}>
       <a href={noticia.url}  target="_blank">
      <CardHeader
      classes={{
        root: classes.titleBar,
        title: classes.title,
      }}
        title={title}
      />
       <CardContent className={classes.cardContent}>
      <Typography component="p">
      {source_name}
      </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={img_url}
        title={title}
        url={url}
      />

      </a>
    </Card>
  );
}