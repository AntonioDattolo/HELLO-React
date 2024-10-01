
// importando così le immagini in fase di deploy non vengono perse 
// import componentsImg from './assets/components.png';
// import { useState } from 'react';
// importare componente wrapper per eliminare div nel return dell'APP
import { Fragment } from 'react';
//********************* */

//components
import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function MainGoal() {
  return (
    <section>
      <h2>
        Il mio obbiettivo principale è imparare REACT!!!
      </h2>
    </section>
  )
}


function App() {
  
  return (
    <Fragment>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
        
        <MainGoal />

        <CoreConcepts/>

        <Examples/>
        
      </main>
    </Fragment>
  );
}

export default App;
