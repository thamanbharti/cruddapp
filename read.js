import React, { useEffect, useState } from 'react'
import { Header, Image, Table } from 'semantic-ui-react';
import axios from 'axios'
import './read.css'

function Read() {
     
       const [data,setdata]=useState([]);
       useEffect(()=>{
           axios.get("https://64bb931f7b33a35a44467b38.mockapi.io/pokemondb")
           .then((response)=>{
            setdata(response.data);
            console.log(data)
           })
       },[])
      
      

  return (


     <Table basic='very' celled collapsing>
     <Table.Header>
       <Table.Row>
         <Table.HeaderCell className='heading'>Pokemon</Table.HeaderCell>
         <Table.HeaderCell>Name</Table.HeaderCell>
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
            </Table.Row>)
         
        })
    }
     </Table.Body>
   </Table>
  )
}

export default Read;