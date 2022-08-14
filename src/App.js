import Appes from './components/SignInOut';
import './App.css';
import Nav from './components/nav/nav';
import Contact from "./components/contact/contact";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
function App() {

  return (
	<Router>
           <div className="App">
		   <ul>
  <li><a class="active" href="/">Home</a></li>
  <li><a href="/about">News</a></li>
  <li><a href="/Contact">Contact</a></li>
  <li><a href="/about">Sign In/Sign up</a></li>
</ul>
           <Routes>
                 <Route exact path='/' element={<Nav />}></Route>
                 <Route exact path='/about' element={<Appes />}></Route>
                 <Route exact path='/Contact' element={< Contact />}></Route>
          </Routes>
          </div>
       </Router>
	
  );
}


export default App;
