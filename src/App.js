
import './App.css';
import Main from './Main/main';
import {BrowserRouter} from 'react-router-dom'
import Footer from './components/footer';
import Middle from './components/middle';
import NavBar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Main />
      </div>
      </BrowserRouter>
  );
}

export default App;
