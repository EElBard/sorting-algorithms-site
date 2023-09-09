import './App.scss';
import Home from './Home';
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout';
import './App.scss';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
