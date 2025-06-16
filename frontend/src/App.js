import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import RegistroForm from './components/RegistroForm';
import ListaUsuarios from './components/ListaUsuarios';

function App() {
  return (

    <div className="App">
      <h1>App de Registro</h1>

      <nav>
        <Link to="/">Registro</Link> | <Link to="/lista">Ver Lista</Link>
      </nav>
      <Routes>
        <Route path="/" element={<RegistroForm />} />
        <Route path="/lista" element={<ListaUsuarios />} />
      </Routes>
    </div>

  );
}

export default App;