

import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MoreVertIcon from "@mui/icons-material/MoreVert";

const DottedIcon = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionClick = (option) => {
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <IconButton onClick={handleClick} aria-describedby={id}>
        <MoreVertIcon />
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <List>
          <ListItem  onClick={() => handleOptionClick('Option 1')}>
            <ListItemText primary="Approve" />
          </ListItem>
          <ListItem  onClick={() => handleOptionClick('Option 2')}>
            <ListItemText primary="Delete" />
          </ListItem>
          <ListItem onClick={() => handleOptionClick('Option 3')}>
            <ListItemText primary="Edit" />
          </ListItem>
        </List>
      </Popover>
    </div>
  );
};

export default DottedIcon;
