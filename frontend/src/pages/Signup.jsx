import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css';
import AuthContext from '../context/AuthContext';
import useAxios from '../utils/useAxios';

const Signup = () => {
	let api = useAxios();
  let navigate = useNavigate();
  let {user, loginUser} = useContext(AuthContext);

	useEffect(() => {
		if (user) {
			navigate('/');
		}
	}, [user, navigate]);


  // async function handleSignup(e){
	// 	e.preventDefault();

	// 	// Signup Request
	// 	const response = await api.post('api/signup/', user);

	// 	if(response.status == 201){
	// 		// If Signup succesful, login
	// 		loginUser(e);
	// 	}
  // }

	// function handleFirstNameChange(e){
	// 	setUser({
	// 		...user,
	// 		first_name : e.target.value
	// 	});
	// }

	// function handleLastNameChange(e){
	// 	setUser({
	// 		...user,
	// 		last_name : e.target.value
	// 	});
	// }

	// function handleUsernameChange(e){
	// 	setUser({
	// 		...user,
	// 		username: e.target.value.trim()
	// 	});
	// }

	// function handlePasswordChange(e){
	// 	setUser({
	// 		...user,
	// 		password: e.target.value.trim()
	// 	});
	// }


  return (
		<div id="login-container">
			<Form id="login-form">  {/*onSubmit={}>*/}
				<h1>Sign Up</h1>

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
				<a href='/signup'>Already have an account? Login here!</a>
			</Form>
		</div>
  );
}

export default Signup;