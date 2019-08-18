import React from 'react';
import logo from './logo.svg';
import './App.css';



import Footer from './components/Footer/Footer';
import MyPosts from './components/Body/MyPosts/MyPosts';
import Header from './components/Header/Header'

const App = () =>
{
  return(
      <div className="wrapper">
          <div className="container">
              <Header/>
              <MyPosts/>
              <Footer/>
          </div>
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

