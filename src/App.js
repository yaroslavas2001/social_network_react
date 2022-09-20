import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import BaseLayout from './layouts/base-layout';
const App = () => {
  return (
    <BrowserRouter>
      <BaseLayout />
    </BrowserRouter>

  );
}
export default App;
