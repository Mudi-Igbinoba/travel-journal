import Header from './components/Header';
import Destination from './components/Destination';
import data from './data.js';
import './App.css';

function App() {
    return (
        <>
            <Header />
            <main>
                {data.map((place) => (
                    <Destination
                        title={place.title}
                        location={place.location}
                        googleMapsUrl={place.googleMapsUrl}
                        startDate={place.startDate}
                        endDate={place.endDate}
                        description={place.description}
                        imageUrl={place.imageUrl}
                    />
                ))}
            </main>
        </>
    );
}

export default App;
