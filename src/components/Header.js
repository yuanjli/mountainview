import React, { Component } from 'react';

// import material ui components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import UpDrawer from './UpDrawer';

class Header extends Component {
    
    state = {
        drawerOpen: false,
        headerShow: false
    }

    componentDidMount(){ 
        window.addEventListener('scroll', this.handleScroll);

    }

    handleScroll = () => {
        console.log(' User scrolling')
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }
    
    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
                    boxShadow: 'none',
                    padding: '10px 0px',
                }}
            >
                <Toolbar>

                    <div className="header_logo">
                        <div className="font_righteous header_logo_venue"> The Parks </div>
                        <div className="header_logo_tittle"> Exploring National Parks </div>
                    </div>

                    <IconButton
                         aria-label="Menu"
                         color="inherit"
                         onClick={() => this.toggleDrawer(true)}
                    >
                        <MenuIcon></MenuIcon>
                    </IconButton>

                    <UpDrawer 
                        open={this.state.drawerOpen}
                        onClose={(value)=> this.toggleDrawer(value)}
                    />

                </Toolbar>

            </AppBar>
        );
    }
}

export default Header;