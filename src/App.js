import { Layout, Header, Drawer,Navigation,Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import './App.css';
import Main from './components/main';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className='header-color' 
        title={<Link style={{textDecoration:'none',color:'black'}} to="/">
         Bohdan Atamaniuk React Developer          
        </Link>} scroll>
            <Navigation className='nav-menu'>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer  title={<Link style={{textDecoration:'none',color:'black'}} to="/">
         Bohdan Atamaniuk React Developer          
        </Link>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
