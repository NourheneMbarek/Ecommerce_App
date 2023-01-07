import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import useScrollTrigger from '@mui/material/useScrollTrigger';

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
export default function Header(props){
    return (
        <ElevationScroll>
            <AppBar position="fixed">
                <Toolbar>
                    Arc Development
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        
    )
}