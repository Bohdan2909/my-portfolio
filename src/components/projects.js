import React, { Component } from 'react'
import { Button, Card, CardActions, CardMenu, CardText, CardTitle, Cell, Grid, IconButton, Tab, Tabs } from 'react-mdl'

class Projects extends Component {
   constructor(props) {
      super(props);
      this.state = { activeTab: 0 };
   }
   toggleCategories() {
      if (this.state.activeTab === 0) {
         return (
            <div className='projects-grid'> 
               {/* Project #1 */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto', textAlign:'center' }}>
               <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>
                  React Project #1
              </CardTitle>
               <CardText>
                  Lorem ipsum
              </CardText>
               <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
               </CardActions>
               <CardMenu style={{ color: '#fff' }}>
                  <IconButton name='share' />
               </CardMenu>
            </Card>
             {/* Project #2 */}
             <Card shadow={5} style={{ minWidth: '450', margin: 'auto', textAlign:'center' }}>
               <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>
                  React Project #2
              </CardTitle>
               <CardText>
                  Lorem ipsum
              </CardText>
               <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
               </CardActions>
               <CardMenu style={{ color: '#fff' }}>
                  <IconButton name='share' />
               </CardMenu>
            </Card>
             {/* Project #3 */}
             <Card shadow={5} style={{ minWidth: '450', margin: 'auto', textAlign:'center' }}>
               <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover' }}>
                  React Project #3
              </CardTitle>
               <CardText>
                  Lorem ipsum
              </CardText>
               <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
               </CardActions>
               <CardMenu style={{ color: '#fff' }}>
                  <IconButton name='share' />
               </CardMenu>
            </Card>
            </div>
         )
      } else if (this.state.activeTab === 1) {
         return (
            <div>
               <h1>This is Redux</h1>
            </div>
         )
      } else if (this.state.activeTab === 2) {
         return (
            <div>
               <h1>This is Javascript</h1>
            </div>
         )
      } else if (this.state.activeTab === 3) {
         return (
            <div>
               <h1>This is Typescript</h1>
            </div>
         )
      }
   }


   render() {
      return (
         <div className='category-tabs'>
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
               <Tab>React</Tab>
               <Tab>Redux</Tab>
               <Tab>Javascript</Tab>
               <Tab>Typescript</Tab>

            </Tabs>
            <section >
               <Grid >
                  <Cell col={12} >
                  <div className='content' > {this.toggleCategories()}</div>
                  </Cell>
               </Grid>

            </section>

         </div>
      )
   }
}

export default Projects;
