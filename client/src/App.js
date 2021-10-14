import './App.css';
import TreatmentCard from './components/card/TreatmentCard';
import DoctorList from './components/list/DoctorList';
import TreatmentList from './components/list/TreatmentList';

// Context
import ContextProvider from './context/Context';

// Components
import Navigation from './routes/Navigation';

const App = () => {
  return (
    <ContextProvider>
      <Navigation />
    </ContextProvider>
  );
};

export default App;
