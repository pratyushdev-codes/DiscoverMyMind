
import './App.css';

import Header from './Components/Header';
import Intro from './Components/Intro';
import SecondaryHeader from './Components/SecondaryHeader';
import Why from './Components/Why';
import Objective from './Components/Objective';
import Invest from './Components/Invest';
import Books from './Components/Books';


function App() {
  return (
    <div className="App">
    <SecondaryHeader/>
      {/* <Header/> */}
      <Intro/>
      <Why/>
      <Objective/>
      <Books/>
      <Invest/>
    

      
      
      
 
    </div>
  );
}

export default App;
