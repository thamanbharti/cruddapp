import React, { useEffect, useState } from 'react'
import { Header, Image, Table,Button } from 'semantic-ui-react';
import axios from 'axios'
import './read.css'
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom'

function Read() {
     
       const [data,setdata]=useState([]);
        const Navigate=useNavigate();
       useEffect(()=>{
           axios.get("https://64bb931f7b33a35a44467b38.mockapi.io/pokemondb")
           .then((response)=>{
            setdata(response.data);
            console.log(data)
           })
       },[]);
       
       const fakeData=(data)=>{
        let { id, name, type} = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('name', name);
        localStorage.setItem('type', type);
        Navigate('/update')
        console.log(data)
       }
       
      const ondelete=(id)=>{
                     axios.delete(`https://64bb931f7b33a35a44467b38.mockapi.io/pokemondb/${id}`)
      }

  return (


     <div className='body'><Table basic='very' celled collapsing>
     <Table.Header>
       <Table.Row>
         <Table.HeaderCell className='heading'>Pokemon</Table.HeaderCell>
         <Table.HeaderCell>Type</Table.HeaderCell>
         <Table.HeaderCell>Update</Table.HeaderCell>
         <Table.HeaderCell>delete</Table.HeaderCell>
        </Table.Row>
     </Table.Header>
     <Table.Body>
     {
        data.map((item)=>{
           
           return( <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Image src='/images/avatar/small/lena.png' rounded size='mini' />
                  <Header.Content>
                    {item.name}           
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{item.type}</Table.Cell>
              <Table.Cell> 
                      <Button onClick={()=>{fakeData(item)}}>Update</Button>
            </Table.Cell>
           <Table.Cell>
                      <Button onClick={()=>{ondelete(item.id)}} >Delete</Button>
          </Table.Cell>
            </Table.Row>)
         
        })
    }
    
     </Table.Body>
   </Table>
   </div>

  )
}

export default Read;