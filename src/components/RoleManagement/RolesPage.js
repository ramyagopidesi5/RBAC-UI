import React, { useState } from "react";
import RoleList from "./RoleList";
import RoleForm from "./RoleForm";
import Grid2 from "@mui/material/Grid2";

const RolesPage = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["read", "write", "delete"] },
    { id: 2, name: "User", permissions: ["read"] },
  ]);
  const [currentRole, setCurrentRole] = useState(null);

  const handleAddRole = (role) => {
    if (role.id) {
      setRoles((prev) =>
        prev.map((r) => (r.id === role.id ? { ...r, ...role } : r))
      );
    } else {
      setRoles((prev) => [...prev, { ...role, id: Date.now() }]);
    }
    setCurrentRole(null);
  };

  const handleEditRole = (role) => {
    setCurrentRole(role);
  };

  const handleDeleteRole = (roleId) => {
    setRoles((prev) => prev.filter((role) => role.id !== roleId));
  };

  return (
    <Grid2 container spacing={2}>
      <Grid2 item xs={12} md={6}>
        <RoleList roles={roles} onEdit={handleEditRole} onDelete={handleDeleteRole} />
      </Grid2>
      <Grid2 item xs={12} md={6}>
        <RoleForm onSubmit={handleAddRole} role={currentRole} />
      </Grid2>
    </Grid2>
  );
};

export default RolesPage;
