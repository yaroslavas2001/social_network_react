import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import BaseLayout from './layouts/base-layout';
const App = (props) => {
  return (
    <BrowserRouter>
      <BaseLayout state={props.state} />
    </BrowserRouter>
  );
}
export default App;
