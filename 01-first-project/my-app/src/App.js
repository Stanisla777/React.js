import React from 'react';
import logo from './logo.svg';
import './App.css';


import Fun_header from './Header';
import Fun_footer from './Footer';
import Fun_Body from './body';

const App = () =>
{
  return(
      <div className="container App">
          <Fun_header/>
          <Fun_footer/>
          <Fun_Body/>
      </div>
  )
};






// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

export default App;

