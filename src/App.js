import logo from './logo.svg';
import './App.css';
import Geolocation from "./Geolocation";

const App = () => {
 
const location = Geolocation()
console.log(location)
  return (
    <>
  <div className="Location">
    latitude:{location.coordinates.lat}
    longitude:{location.coordinates.lng}
  </div>
  </>
  )
}

export default App;
