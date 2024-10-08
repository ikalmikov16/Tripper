import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css';
import AuthContext from '../context/AuthContext';

const Login = () => {
	let {user, loginUser} = useContext(AuthContext)
	let navigate = useNavigate();

	useEffect(() => {
		if (user) {
			navigate('/');
		}
	}, [user, navigate]);

  return (
		<div id="login-container">
			<Form id="login-form" onSubmit={loginUser}>
				<h1>Login</h1>
				
				<Form.Group className="mb-3" >
					<Form.Label>Username</Form.Label>
					<Form.Control 
						type="text" 
						name="username"
						placeholder="Enter username" 
						required
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control 
						type="password" 
						name="password"
						placeholder="Enter password"
						required 
					/>
				</Form.Group>

				<Button variant="danger" type="submit"> Login </Button>
				<br/><br/>
				<a href='/signup'>Don't have an account? Sign up here!</a>
			</Form>
		</div>
  );
}

export default Login;