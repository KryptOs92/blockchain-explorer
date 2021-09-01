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
import './EthereumCard.scss'
import ethereumLogo from '../../../../resources/images/cryptoLogos/ethereumLogoCard.png'


export default function EthereumCard({customClass = "ethereum-card"}) {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <div className={'crypto-card '+ customClass}>
    <Card >
    
      <CardMedia
        classes={{root:'MuiCardMedia-root-custom'}}
        image={ethereumLogo}
        title="Show charts"
      />
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