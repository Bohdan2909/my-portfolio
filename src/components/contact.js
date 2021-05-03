import React from 'react'
import { Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl'
import avatar from '../assets/img/avatar.bohdan.jpg'


const Contact = () => {
   return (
      <div className='contact-body'>
         <Grid className='contact-grid'>
            <Cell col={6}>
               <h2>Bohdan Atamaniuk</h2>
               <img
               src={avatar} 
               alt='avatar'
               style={{height:'250px'}}
               />
               <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
               </p>
            </Cell>
            <Cell col={6}>
               <h2>Contact Me</h2>
               <hr/>
               <div className='contact-list'>
               <List>
               <ListItem>
                  <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                     <i className='fa fa-phone-square' aria-hidden='true'/>
                     (+420) 776-290-438
                  </ListItemContent>
               </ListItem>

               <ListItem>
                  <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                     <i className='fa fa-envelope' aria-hidden='true'/>
                     0997393654b@gmail.com
                  </ListItemContent>
               </ListItem>

               <ListItem>
                  <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
                     <i className='fa fa-skype' aria-hidden='true'/>
                     SkypeId: Bohdan Atamaniuk
                  </ListItemContent>
               </ListItem>

               </List>
               </div>

            </Cell>
         </Grid>
      </div>
   )
}

export default Contact;
