import './App.css';
import ViewAll from './components/ViewAll';
import { Routes, Route, Link } from 'react-router-dom';
import AddForm from './components/AddForm';
import UpdateForm from './components/UpdateForm';
import ViewOne from './components/ViewOne';

function App() {
  return (
    <div className="App">
      <h1><Link to={"/"}>Home</Link> | <Link to={"/add"}>Add Product</Link></h1>
      <Routes>
        <Route path="/" element={<ViewAll/>} />
        <Route path="/add" element={<AddForm/>} />
        <Route path="/update/:_id" element={<UpdateForm/>} />
        <Route path="/product/:_id" element={<ViewOne/>} />
      </Routes>
    </div>
  );
}

export default App;
