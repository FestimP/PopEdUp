import { useState } from 'react';
import './App.css';
function App() {
  const [baseClass,activeClass] = useState(false);

  return (
<div className={`container ${baseClass ? "right-panel-active": null} id="container"`}>
	<div className="form-container sign-up-container">
		<form action="">
			<h1>Create Account</h1>
			<div className="social-container">
				
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button onClick={()=>  activeClass(true)}>Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<div className="social-container">
				
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<p>Forgot your password?</p>
			<button>Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal details</p>
				<button className="ghost" id="signIn"onClick={()=> activeClass(false)}>Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hi There!</h1>
				<p>Enter your personal details to open an account with us</p>
				<button className="ghost" id="signUp" onClick={()=> activeClass(true)}>Sign Up</button>
			</div>
		</div>
	</div>
</div>
    
  );
}


export default App;
