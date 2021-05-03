import React from 'react'
import { Cell, Grid } from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'

const Resume = () => {
   return (
      <div>
         <Grid>
            <Cell className='resume-left' col={4}>
               <div style={{textAlign:'center'}}>
                  <img
                  src='https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'
                  alt='avatar'
                  style={{height:'200px', borderRadius:'100px'}}
                  />
               </div>
               <h2 style={{paddingTop:'2em'}}>Bohdan Atamaniuk</h2>
               <h4 style={{color:'grey'}}>Web Developer</h4>
               <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                   when an unknown printer took a galley of type and scrambled it to make a type specimen book
               </p>
               <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
               <h5>Adress</h5>
               <p>Czech Republic, Plzen</p>
               <h5>Phone</h5>
               <p>(+420)776-290-438</p>
               <h5>Email</h5>
               <p>0997393654b@gmail.com</p>
               <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
            </Cell>
            <Cell className='resume-right' col={8}>
               <h2>Education</h2>
               <Education startYear={2007}
                          endYear={2013}  
                          schoolName='Technical University Oil and Gas'
                          schoolDescription='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'            
               />
               <hr style={{borderTop:'3px solid #e22947'}}/>
               <h2>Experience</h2>
               <Experience startYear={2017}
                          endYear={2019}  
                          jobName='Web Developer'
                          jobDescription='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'            
               />
                <Experience startYear={2019}
                          endYear={2025}  
                          jobName='React Developer'
                          jobDescription='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'            
               />
               <hr style={{borderTop:'3px solid #e22947'}}/>
               <h2>Skills</h2>
               <Skills 
               skills='Javascript'
               progress={67}
               />
               <Skills 
               skills='React'
               progress={88}
               />
               <Skills 
               skills='Redux'
               progress={88}
               />
               <Skills 
               skills='SCSS/CSS/HTML'
               progress={55}
               />
            </Cell>
         </Grid>
      </div>
   )
}

export default Resume;
