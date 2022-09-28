import React, { useState } from 'react';

import AddUser from "./Components/Users/AddUser";
import UsersList from './Components/Users/UsersList';



function App() {
  const[userList, setUsersList] = useState([]);
  
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return[...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()},
      ];
    });
  };

  return (
    <div>
    <AddUser onAddUser={addUserHandler} />
    <UsersList users={[userList]} />
    </div>
  );
};

export default App;
