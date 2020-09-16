import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Team from './components/Team';

const team = [
  {
    name: 'john',
    email: 'john@gmail.com',
    role: 'frontend engineer',
  },
];

function App() {
  const [members, setMembers] = useState(team);

  const person = (item) => {
    const newPerson = {
      name: item.name.trim(),
      email: item.email.trim(),
      role: item.role,
    };
    setMembers([...members, newPerson]);
  };

  return (
    <div className="App">
      <Form form={person} />
      <Team team={members} />
    </div>
  );
}

export default App;
