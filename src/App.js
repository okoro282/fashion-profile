import Content from './Components/Content';
import Image from './Components/Image'
import Header from './Components/Header'
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="Triumph">
      <div className="container">
      <div className="Toby">
      <Content/>
      </div>
        <div className="marve">
           <Image/>
         </div>
      </div>
      <Header/>
      </div>
      
    </div>
  );
}

export default App;
