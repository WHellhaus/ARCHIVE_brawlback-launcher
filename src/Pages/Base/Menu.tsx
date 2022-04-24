import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Drawer from '@mui/material/Drawer';
import List  from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import BrawlbackLogo from '../../assets/brawlback_logo.png';
const drawerWidth = 270;

enum menuOption {
  Home,
  ReplaysBrawl,
  ReplaysPPlus,
  Settings
}

export default function Menu() {
  const [openReplayMenu, handleOpenReplayMenu] = useState(true);
  const navigate = useNavigate();
  const currentUrl = useLocation();
  
  const handleButtonClick = (ev: React.MouseEvent, option: menuOption) => {
    switch (option) {
      case menuOption.Home:
        navigate('/')
        break;
      case menuOption.ReplaysBrawl:
        navigate('replays?vBrawl')
        break;
      case menuOption.ReplaysPPlus:
        navigate('replays?P+')
        break;
      case menuOption.Settings:
        navigate('settings')
        break;
      default:
        break;
    }
  }

  return (
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            border:"none",
            overflowX: 'hidden'
          }
        }}
        variant='permanent'
        anchor='left'
        PaperProps={{elevation: 9}}
      >
        <Box sx={{ textAlign: 'center', marginBottom: "25px" }}>
          <img src={BrawlbackLogo} width={150} height={150}/>
        </Box>

        <List>

        <ListItem button 
          selected={currentUrl.pathname === '/'} 
          onClick={(ev) => handleButtonClick(ev, menuOption.Home)}
        >
          <ListItemText primary="Home"/>
        </ListItem>
        <Divider />

        <ListItem button onClick={() => handleOpenReplayMenu(!openReplayMenu)}>
          <ListItemText primary="Replays"/>
          {openReplayMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Divider />
        <Collapse in={openReplayMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button 
            sx={{ paddingLeft: 0, marginLeft: 4, borderLeft: 1 }} 
            selected={currentUrl.pathname === '/replays' && currentUrl.search === '?P+'}
            onClick={(ev) => handleButtonClick(ev, menuOption.ReplaysPPlus)}
            >
            <ListItemText sx={{ paddingLeft: 1 }} primary="P+" />
          </ListItem>
          <ListItem button 
            sx={{ paddingLeft: 0, marginLeft: 4, borderLeft: 1 }} 
            selected={currentUrl.pathname === '/replays' && currentUrl.search === '?vBrawl'}
            onClick={(ev) => handleButtonClick(ev, menuOption.ReplaysBrawl)}
            >
            <ListItemText sx={{ paddingLeft: 1 }} primary="vBrawl" />
          </ListItem>
        </List>
        <Divider />
      </Collapse>

        <ListItem button 
        selected={currentUrl.pathname === '/settings'}
        onClick={(ev) => handleButtonClick(ev, menuOption.Settings)}
        >
          <ListItemText primary="Settings"/>
        </ListItem>

        </List>
      </Drawer>
  )
}

