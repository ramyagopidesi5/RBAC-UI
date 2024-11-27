let users = [
    { id: 1, name: "Alice", role: "Admin", status: "Active" },
    { id: 2, name: "Bob", role: "User", status: "Inactive" },
  ];
  
  let roles = [
    { id: 1, name: "Admin", permissions: ["read", "write", "delete"] },
    { id: 2, name: "User", permissions: ["read"] },
  ];
  
  export const getUsers = () => Promise.resolve({ data: users });
  export const getRoles = () => Promise.resolve({ data: roles });
  
  export const addUser = (user) => {
    //users.push({ id: Date.now(), ...user });
    users.push(user);
    return Promise.resolve({ data: users });
  };
  
  export const updateUser = (id, updatedUser) => {
    users = users.map((user) => (user.id === id ? { ...user, ...updatedUser } : user));
    return Promise.resolve({ data: updatedUser });
  };
  
  export const deleteUser = (id) => {
    users = users.filter((user) => user.id !== id);
    return Promise.resolve({ data: id });
  };
  
  export const addRole = (role) => {
    roles.push({ id: Date.now(), ...role });
    return Promise.resolve({ data: role });
  };
  
  export const updateRole = (id, updatedRole) => {
    roles = roles.map((role) => (role.id === id ? { ...role, ...updatedRole } : role));
    return Promise.resolve({ data: updatedRole });
  };
  
  export const deleteRole = (id) => {
    roles = roles.filter((role) => role.id !== id);
    return Promise.resolve({ data: id });
  };
  