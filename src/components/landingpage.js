import React from 'react'
import { Cell, Grid } from 'react-mdl'
import avatar from '../assets/img/avatar.bohdan.jpg'

const Landing = () => {
   return (
      <div style={{width:"100%", margin:'auto'}}>
         <Grid className='landing-grid'>
            <Cell col={12}>
               <img src={avatar}
                alt='avatar'
                className='avatar-img'/>
                <div className="banner-text">
                   <h1>React Web Developer</h1>
                   <hr/>
                   <p>HTML | SCSS/CSS | React | Javascript | Redux</p>
                   <div className='social-links'>
                      {/*LonkedIn */}
                      <a href='http:google.com' rel='noopener noreferrer' target='_blank'>
                         <i className='fa fa-linkedin-square' aria-hidden='true'/>
                      </a>
                       {/*GitHub */}
                       <a href='http:google.com' rel='noopener noreferrer' target='_blank'>
                         <i className='fa fa-github-square' aria-hidden='true'/>
                      </a>
                       {/*Freecodecamp */}
                       <a href='http:google.com' rel='noopener noreferrer' target='_blank'>
                         <i className='fa fa-free-code-camp' aria-hidden='true'/>
                      </a>
                       {/*Youtube */}
                       <a href='http:google.com' rel='noopener noreferrer' target='_blank'>
                         <i className='fa fa-youtube-square' aria-hidden='true'/>
                      </a>

                   </div>
                </div>
            </Cell>
         </Grid>
      
      </div>
   )
}

export default Landing;
