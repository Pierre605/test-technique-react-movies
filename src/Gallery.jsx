import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Gauge from './Gauge';



const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 425,
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    cards: {
      margin: '1em',
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
  }));
  
  export default function MovieCards(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
        <Grid item xs={3} className={classes.cards}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography color="textSecondary">
                    {props.category}
                    </Typography>
                    <Gauge id={props.id} likes={props.likes} dislikes={props.dislikes}/>
                </CardContent>
            </Card>
        </Grid>
    )
  }