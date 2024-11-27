import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";
import { Grid2 } from "@mui/material";
import {addUser,getUsers} from "../../api/mockApi";
const UsersPage = () => {
const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };
  const handleAddUser = (user) => {
  console.log("Adding User:", user);
  addUser(user);
  setUsers(prevUsers => [...prevUsers, user]);
  setUser(null);
};

  const handleEditUser = (newUser) => {
    console.log("Updateuser:", newUser);
    setUser({...newUser});
    //const updatedUsers = users.filter(user => user.id !== newUser.id);
    //setUsers(updatedUsers);
  };

  const handleDeleteUser = (userId) => {
    console.log("Deleting User:", userId);
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
  }

  return (
    <Grid2 container spacing={2}>
      <Grid2 item xs={12} md={6}>
        <UserList onEdit={handleEditUser} onDelete={handleDeleteUser} users={users} />
      </Grid2>
      <Grid2 item xs={12} md={6}>
        <UserForm onSubmit={handleAddUser} user={user}/>
      </Grid2>
    </Grid2>
  );
};

export default UsersPage;
