import { Fragment } from 'react';
import reactLogo from './assets/react.svg'
import {Header,Home, Skill, Footer, Proyects,Contact} from './components';

function App() {

  return(

  <Header>
    <Home />
    <Skill />
    <Proyects />
    <Contact />
    <Footer />   
  </Header>

  );
}

export default App;
