import './App.css';
import MastHeader from './components/headers/MastHeader';
import PropertiesForm from './components/form/PropertiesForm';
import LocationsGrid from './components/content/LocationsGrid';

function App() {
  return (
    
    <div>
        <MastHeader />
        <PropertiesForm />
        <LocationsGrid />
    </div>
  );
}

export default App;
