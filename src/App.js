import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.12345678
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const App = () => {
  return (
    <div className="App">
      <Header />
      <Technologgies />
    </div>
  );
}
const Technologgies = () => {
  return (<div>
    123456789
  </div>);
}
const Header = () => {
  return (
    <div>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </div>
  );
}
export default App;
