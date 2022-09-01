import { Fragment } from 'react';
import {Header,Home, Skill, Footer, Proyects,Contact} from './components';
import { ModalProvider } from './context/useModal';

function App() {

  return(

  <Header>
    <ModalProvider>
    <Home />
    <Skill />
    <Proyects />
    <Contact />
    </ModalProvider>
    <Footer />   
  </Header>

  );
}

export default App;
