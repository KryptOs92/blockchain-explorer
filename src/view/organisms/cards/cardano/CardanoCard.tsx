import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './CardanoCard.scss'
import cardanoLogo from '../../../../resources/images/cryptoLogos/cardanoLogoSmall.png'


export default function CardanoCard({customClass = "cardano-card"}) {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <div className={'crypto-card '+ customClass}>
    <Card >
    
      <CardMedia
        classes={{root:'MuiCardMedia-root-custom'}}
        image={cardanoLogo}
        title="Show charts"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            Cardano
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      
      </CardActions>
     
    </Card>
    </div>

  );
}