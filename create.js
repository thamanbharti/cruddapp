import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './/create.css'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Read from './read';
function Create() {
      const [name,setname]=useState('');
      const [type,settype]=useState('');
      const [state,setstate]=useState(false);
      const Navigate=useNavigate(); 
     
      const postdata=()=>{
        if(name!==""&&type!=="")
        axios.post("https://64bb931f7b33a35a44467b38.mockapi.io/pokemondb",{name,state,type})
        Navigate('/read')
      }
      
   
  return (
    <Form className='form'>
    <Form.Field>
      <label>Pokemon Name</label>
      <input placeholder='Pokemon Name' value={name} onChange={(e)=>{setname(e.target.value)}} />
    </Form.Field>
    <Form.Field>
      <label>Type</label>
      <input placeholder='Type Name'  value={type}onChange={(e)=>{settype(e.target.value)}}/>
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' onClick={()=>{
        setstate(!state)
      }} />
    </Form.Field>
    <Button type='submit' onClick={postdata}>Submit</Button>
  </Form>
  )
}

export default Create