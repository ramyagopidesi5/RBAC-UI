import React, { useState, useEffect } from "react";
import { getRoles } from "../../api/mockApi";
import { Button, List, ListItem, ListItemText } from "@mui/material";


const RoleList = ({ onEdit, onDelete }) => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    getRoles().then((res) => setRoles(res.data));
  }, []);

  return (
    <List>
      {roles.map((role) => (
        <ListItem key={role.id}>
          <ListItemText
            primary={role.name}
            secondary={`Permissions: ${role.permissions.join(", ")}`}
          />
          <Button onClick={() => onEdit(role)} variant="contained">
            Edit
          </Button>
          <Button
            onClick={() => onDelete(role.id)}
            variant="outlined"
            color="error"
            style={{ marginLeft: "10px" }}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default RoleList;
