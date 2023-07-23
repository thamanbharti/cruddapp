import React, { useState, useEffect } from 'react';
import './/update.css';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Update() {
  const [name, setname] = useState('');
  const [type, settype] = useState('');
  const [state, setstate] = useState(false);
  const [id, setID] = useState(null);
 const Navigate=useNavigate()
  useEffect(() => {
    setID(localStorage.getItem('ID'));
    setname(localStorage.getItem('name'));
    settype(localStorage.getItem('type'));
  }, []);

  const onupdate = () => {
    axios.put(`https://64bb931f7b33a35a44467b38.mockapi.io/pokemondb/${id}`, {
      name,
      type,
      state,
    }

    )
      .then((response) => {
        // Handle successful update here if needed
        console.log('Update successful:', response.data);
      })
      .catch((error) => {
        // Handle update error here if needed
        console.error('Error updating Pokemon:', error);
      });
      Navigate(-1)
  };

  return (
   <div className='form-update'> <Form >
    <h1>React Pokemon Crud App Updatepage</h1>
      <Form.Field>
        <label>Pokemon Name</label>
        <input placeholder='Pokemon Name' value={name} onChange={(e) => setname(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Type</label>
        <input placeholder='Type Name' value={type} onChange={(e) => settype(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label='I agree to the Terms and Conditions'
          checked={state}
          onClick={() => {
            setstate(!state);
          }}
        />
      </Form.Field>
      <Button type='submit' onClick={onupdate}>Update</Button>
    </Form>
    </div>
  );
}

export default Update;
