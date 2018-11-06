import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const UpDrawer = (props) => {
    return (
        <Drawer
            anchor="top"
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick={()=> console.log('feature')}>

                    </ListItem>    
            </List>
            Drawer
        </Drawer>

    );
};

export default UpDrawer;