
import './index.css';
import Navbar from './components/navigation/Navbar';
import MastHeader from './components/headers/MastHeader';
import PropertiesForm from './components/form/PropertiesForm';
import LocationsGrid from './components/content/LocationsGrid';

function App() {
  return (
    <div>
        <Navbar />
        <MastHeader bgImg={'https://images.unsplash.com/photo-1633230329829-a52df5940e69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3270&q=80'} />
       <div class="content-wrap px-10">
        <PropertiesForm />
        <LocationsGrid />
       </div>
        
    </div>
  );
}

export default App;
