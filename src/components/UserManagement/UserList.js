import React from "react";
import { Button, List, ListItem, ListItemText } from "@mui/material";

const UserList = ({ onEdit, onDelete, users }) => {
   

  return (
    <List>
      {users.map((user) => (
        <ListItem key={user.id}>
          <ListItemText primary={user.name} secondary={user.email} />
          <Button onClick={() => onDelete(user.id)} variant="outlined" color="error">
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default UserList;
