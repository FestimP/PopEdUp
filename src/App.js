import Appes from './components/SignInOut';
import './App.css';
import Nav from './components/nav/nav';
import Contact from "./components/contact/contact";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
function App() {

  return (
	<Router>
           <div className="App">
		   <ul className='cop'>
  <li><a class="active" href="/">Home</a></li>
  <li><a href="/components/about/SignInOut">News</a></li>
  <li><a href="/Contact">Contact</a></li>
  <li><a href="/components/about/SignInOut">Sign In/Sign up</a></li>
</ul>
           <Routes>
                 <Route exact path='/' element={<Nav />}></Route>
                 <Route exact path='/components/about/SignInOut' element={<Appes />}></Route>
                 <Route exact path='/Contact' element={< Contact />}></Route>
          </Routes>
          </div>
       </Router>
	
  );
}


export default App;
