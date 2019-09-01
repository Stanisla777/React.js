import React from 'react';
import './App.css';



import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';
import {BrowserRouter} from "react-router-dom";
import state, {addPost} from "./redux/state";

const App = (props) =>
{
  return(
      <BrowserRouter>
          <div className="wrapper">
              <Header/>
              {/*<MainContainer massive_users={props.appState.massages.massive_users}  massive_massage={props.appState.massages.massive_massage}/>*/}
              <MainContainer addPost={props.addPost} appState={props.appState}/>
              <Footer/>
          </div>
      </BrowserRouter>

  )
};


function fun(obj) {
    return obj +4
}
fun(8);




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

