import React, {useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './EthereumCard.scss'
import ButtonBase from '@material-ui/core/ButtonBase';
import ethereumLogo from '../../../../resources/images/cryptoLogos/ethereumLogoCard.png'
import {useHistory} from 'react-router-dom';


export default function EthereumCard({customClass = "ethereum-card"}) {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const history = useHistory();
  const handleClick = () => history.push('/ethDetail');
 

  return (
      <div className={'crypto-card '+ customClass}>
    <Card >
      <div onClick={handleClick}>
        <CardMedia
          classes={{root:'MuiCardMedia-root-custom'}}
          image={ethereumLogo}
          title="Show charts"
          
        />
      </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            Ethereum
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