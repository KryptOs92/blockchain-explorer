import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

function Navbar() {
    const classes = useStyles();
    const [value, setValue] = React.useState<string>('recents');

    const handleChange = (event : any, newValue: string) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="" value="recents" icon={<Link to={"\cryptoList"} ><div>Crypto List</div></Link>} />
            <BottomNavigationAction label="" value="favorites" icon={<Link to={"\library"} ><div>LIBRARY</div></Link>} />
            <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
            <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
    );
}

export default Navbar