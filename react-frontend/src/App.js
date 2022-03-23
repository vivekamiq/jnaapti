import logo from './logo.svg';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
//import Menu from './Menu';
//import Footer from './Footer';
import ListBookComponent from './ListBookComponent';
import AddBookComponent from './AddBookComponent';


function App() {
  return (
    <div className="App">
      <Router>
     
        <div className= "container">
          
              <Route exact path = "/" component = {ListBookComponent}></Route>
              <Route path = "/books" component = {ListBookComponent}></Route>
             <Route path = "/add-book" component = {AddBookComponent} ></Route>
             <Route path = "/edit-book/:id" component = {AddBookComponent}></Route> 
            
        </div> 
   
      </Router>
    </div>
  );
}

export default App;
