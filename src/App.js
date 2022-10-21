import './App.css';
import TravelLocation from './components/TravelLocation';
import {default as Data} from './data';

const App = () => {
  return (
    <div className="App">
      <header>
        <img src="/images/globe-icon.svg" alt=""></img>my travel journal.
      </header>
      {Data.map((data,i)=>{
        return <TravelLocation
        imgSource={data.imageUrl}
        country={data.location}
        locationLink={data.googleMapsUrl}
        title={data.title}
        dates={data.startDate + " - " + data.endDate}
        text={data.description}
      />
      })}
      
    </div>
  );
}

export default App;
