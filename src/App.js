import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { useStore } from 'react-redux';
import store from './redux/store';
import ComponentA from './Components/ComponentA';

function App() {
  return (
    <Provider store={store}>
    <ComponentA />
  </Provider>
   
  );
}

export default App;
