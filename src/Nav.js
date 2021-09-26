import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';

const NavBar = () => {
    return (
        <AppBar position="fixed">
            <Toolbar variant="dense">
                <HomeIcon />

                <Typography variant="h5" color="inherit">
                    <Link color="inherit" href="/" underline="none">Home</Link>
                </Typography>

                <span className="navRight">
                    <Typography variant="h5" color="inherit">
                        React Weather Application
                    </Typography>
                </span>
            </Toolbar>
        </AppBar>

    );
}
export default NavBar;