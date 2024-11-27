import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const UserForm = ({ onSubmit , user }) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id : user ? user.id: Date.now(), name, email });
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button type="submit" variant="contained" color="success">Add User</Button>
    </form>
  );
};

export default UserForm;
