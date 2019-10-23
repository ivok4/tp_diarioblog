import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { shadows } from '@material-ui/system';
import Popover from '@material-ui/core/Popover';



const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    height: 300,
    color:'#000',
    shadows:theme.spacing(1),
  },

  cardDetails: {
    width:'50%',
    display:'-webkit-inline-box',
    color: '#000',
  },

  media: {
    height: '100%',
    width: '50%',
    float: 'right',
    display:'inline'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  
}));

export default function Destacados(props) {
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
  
  return (
  
    <Card className={classes.card}>
           <a href={noticia.url} target="_blank">
        <div className={classes.cardDetails}>
      <CardContent>
      <Typography component="h2" variant="h9">
      {title}
      </Typography>
      <Typography component="p">
      {source_name}
      </Typography>
      </CardContent>
      </div>
      <CardMedia
        className={classes.media}
        source_name={source_name}
        image={img_url}
        title={title}
        url={url}
      />
      </a>
    </Card>
      

      /*

          <div className={classes.cardDetails}>

                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.description}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                          Continue reading...
                        </Typography>
                      </CardContent>
                    </div>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                  </Card>

                  */
  );
}