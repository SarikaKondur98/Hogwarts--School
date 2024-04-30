import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { WizardContext } from './context/Medium';
import './App.css';
import { Red } from './components/Houses/Gryffindor/Gryffindor';
import { Home } from './components/Houses/SortingCermony';
import { GreatHall } from './components/GreatHall/GreatHall';

function App() {
  const wizardState = useContext(WizardContext)

  return (
    <>
    <div className='App'>
    <GreatHall/>
    <Routes>
      <Route path='/home' element={<Home sendWizards={wizardState.wizards}/>}/>
      <Route path='/gryffindor' element={<Red/>}/>
    </Routes>
    </div>
    </>
  );
}

export default App;
