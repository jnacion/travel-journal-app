import './App.css';
import TravelLocation from './components/TravelLocation';

function App() {
  return (
    <div className="App">
      <header>
        <img src="/images/globe-icon.svg" alt=""></img>my travel journal
      </header>
      <TravelLocation
        imgSource="https://source.unsplash.com/WLxQvbMyfas"
        country="Japan"
        locationLink="#"
        title="Mount Fuji"
        dates="12 Jan, 2021 - 24 Jan, 2021"
        text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      />
    </div>
  );
}

export default App;
