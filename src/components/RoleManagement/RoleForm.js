import React, { useState } from "react";
import { TextField, Button, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

const permissionsList = ["read", "write", "delete"];

const RoleForm = ({ onSubmit, role = {} }) => {
    const [name, setName] = useState(role ? role.name : "");
    const [permissions, setPermissions] = useState(role ? role.permissions.join(", ") : "");


  const handleCheckboxChange = (permission) => {
    setPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((p) => p !== permission)
        : [...prev, permission]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: role ? role.id : "", name, permissions });
    setName("");
    setPermissions([]);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <TextField
        label="Role Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <FormGroup>
        {permissionsList.map((permission) => (
          <FormControlLabel
            key={permission}
            control={
              <Checkbox
                checked={permissions.includes(permission)}
                onChange={() => handleCheckboxChange(permission)}
              />
            }
            label={permission.charAt(0).toUpperCase() + permission.slice(1)}
          />
        ))}
      </FormGroup>
      <Button type="submit" variant="contained" color="success">
        {role?.id ? "Update Role" : "Add Role"}
      </Button>
    </form>
  );
};

export default RoleForm;
