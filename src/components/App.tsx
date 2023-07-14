import './App.css';
import floatingTaylor from "../assets/images/floating-taylor.png";

function App() {
  return (
    <div className="main">
     <div className='days-until'>378</div>
     <div className='the-eras-tour-title'>THE ERAS TOUR</div>
     <div className='taylor-swift-caption'>Taylor Swift</div>
     <img className='floating-tay' src={floatingTaylor}/>
    </div>
  );
}

export default App;
