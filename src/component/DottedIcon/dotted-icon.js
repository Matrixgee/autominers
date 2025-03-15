import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import toast from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";

const DottedIcon = ({ userId, onDeleteSuccess }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const token = Cookies.get("access_token");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleDeleteClick = () => {
    handleClose();
    setOpenConfirmDialog(true);
  };

  const handleConfirmDialogClose = () => {
    setOpenConfirmDialog(false);
  };

  const confirmDelete = async () => {
    const toastLoadingId = toast.loading("Deleting user...");

    try {
      await axios.delete(
        `https://autominner-backend.onrender.com/api/admin/users/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("User deleted successfully");
      handleConfirmDialogClose();

      // Call the callback function if provided to refresh the user list
      if (onDeleteSuccess) {
        onDeleteSuccess();
      }
    } catch (error) {
      toast.error("Failed to delete user");
      console.error(error);
    } finally {
      toast.dismiss(toastLoadingId);
    }
  };

  return (
    <div>
      <IconButton onClick={handleClick} aria-describedby={id} size="small">
        <MoreVertIcon />
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          elevation: 2,
          sx: {
            width: 150,
            borderRadius: "8px",
          },
        }}
      >
        <List disablePadding>
          <ListItem
            button
            onClick={handleDeleteClick}
            sx={{
              color: "error.main",
              "&:hover": { backgroundColor: "rgba(211, 47, 47, 0.08)" },
            }}
          >
            <DeleteIcon fontSize="small" sx={{ mr: 1 }} />
            <ListItemText primary="Delete" />
          </ListItem>
        </List>
      </Popover>

      {/* Confirmation Dialog */}
      <Dialog
        open={openConfirmDialog}
        onClose={handleConfirmDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          elevation: 3,
          sx: { borderRadius: "10px", p: 1 },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm Delete User"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this user? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ pb: 2, px: 3 }}>
          <Button onClick={handleConfirmDialogClose} variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={confirmDelete}
            variant="contained"
            color="error"
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DottedIcon;
