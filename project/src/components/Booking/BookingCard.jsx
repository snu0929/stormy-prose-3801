import React from 'react'
import { Box,Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
// "id": 2,
// "name": "Dr. John Doe",
// "image": "https://example.com/images/john-doe.jpg",
// "profile": "neurologist",
// "description": "Dr. John Doe is a neurologist with expertise in treating disorders of the brain and nervous system. He is dedicated to providing personalized care to his patients.",
// "waiting_time": 15,
// "rating": 4.7,
// "fees": "$350",
// "location": "456 Elm St, Anytown, USA",
// "status": false,
// "gender": "male",
// "category": "brain"
export const BookingCard = ({id,name,profile,image,fees,waiting_time,status,rating,description}) => {
 const handel=()=>{
    
    
 }
  return (
    <div className='card'>
      <Box display="flex"  alignItems="center" boxShadow='dark-lg' m='5' p='15' rounded='md' bg='white'>
     <Box width="30%" rounded='md'>
    <img className='img' src={image} alt={name} />
    </Box> 
    <Box width="60%" pl="10"  > 
    <h3>{name}</h3>
    <h3>{profile}</h3>
    <h3>Fees:{fees}</h3>
    <h3>Waiting Time :{waiting_time}</h3>
    <h3>Hotline:{'91'+Date.now()%1000}</h3>
   <Box display={"flex"} justifyContent='space-between'>
  <Button isDisabled={!status} bgColor={status ? "#61876e " :"#a4a480"}><Link to={`/edit/${id}`} style={{textDecoration:"none"}}>Book An Appointment</Link></Button> 
  <Button color='#61876e'>Call</Button>
  </Box>
  </Box> 
  </Box>
    </div>
  )
}