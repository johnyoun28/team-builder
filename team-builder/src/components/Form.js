import React, { useState } from 'react';

const initalTeam = [
  {
    name: '',
    email: '',
    role: '',
  },
];

function Form(props) {
  const [formValues, setFormValues] = useState(initalTeam);

  const change = (evt) => {
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submit = (evt) => {
    evt.preventDefault();
    console.log('here', props);
    props.form(formValues);
    // const newPerson = {
    //   name: formValues.name.trim(),
    //   email: formValues.email.trim(),
    //   role: formValues.role,
    // };
    // setTeamMem([...team, newPerson]);
    // const [teamMem, setTeamMem] = useState(team);
  };

  return (
    <div className="container">
      <form onSubmit={submit}>
        <h1>Teams</h1>
        <label>
          Name
          <input
            name="name"
            type="text"
            value={formValues.name}
            onChange={change}
            maxLength="20"
            placeholder="name"
          ></input>
        </label>

        <br />
        <label>
          Email
          <input
            name="email"
            type="email"
            value={formValues.email}
            onChange={change}
            maxLength="20"
            placeholder="email"
          ></input>
        </label>

        <br />
        <label>
          Role
          <select name="role" value={formValues.role} onChange={change}>
            <option value="">--select role--</option>
            <option value="designer">Designer</option>
            <option value="Frontend Engineer">Frontend Engineer</option>
            <option value="Backend Engineer">Backend Engineer</option>
          </select>
        </label>

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
