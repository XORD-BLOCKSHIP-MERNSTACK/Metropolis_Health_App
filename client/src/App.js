import './App.css';
import DoctorList from './components/list/DoctorList';

// Context
import ContextProvider from './context/Context';

// Components
import Navigation from './routes/Navigation';

const App = () => {
  return (
    <ContextProvider>
      <DoctorList />
      {/* <Navigation /> */}
    </ContextProvider>
  );
};

export default App;
