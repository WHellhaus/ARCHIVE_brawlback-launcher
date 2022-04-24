import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PPlusIcon from '../../assets/pplus.webp';
import React from 'react';


const PlayButton = () => {

  const onHitPlay: React.MouseEventHandler = async () => {
    window.api.send("runDolphin").then((data) => {
      console.log(data);
    });
  }

  return (
    <Box sx={{position: "relative", width: "fit-content"}}>
      <IconButton sx={{width: 150, height: 150, bgcolor: "primary.main", filter: "drop-shadow(0px 7px 5px #000000)"}} onClick={onHitPlay}>
        <PlayArrowIcon sx={{fontSize: 150}}></PlayArrowIcon>
      </IconButton>
      <Box sx={{
        borderRadius: "50%",
        width: 45, height: 45, 
        bgcolor: "primary.main", 
        display: "flex",
        position: "absolute",
        bottom: 0,
        right: 0,
        filter: "drop-shadow(0px 4px 5px #000000)"
      }}>
        <img src={PPlusIcon} />
      </Box>
    </Box>
  )
}

export default PlayButton;