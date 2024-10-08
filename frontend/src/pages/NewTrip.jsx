import React, { useState, useEffect, useContext }from 'react';
import { useNavigate } from 'react-router-dom';
import { DateRangePicker} from 'rsuite';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/trip.css';
import useAxios from '../utils/useAxios'
import AuthContext from '../context/AuthContext';

const NewTrip = () => {
	const [trip, setTrip] = useState({
		title : '',
		location : '',
		start_date : '',
		end_date : ''
	});
	let dates = [];
	
	let api = useAxios();
	let {user} = useContext(AuthContext);
	let navigate = useNavigate();

	
	useEffect(() => {
		if (!user) {
			navigate('/login');
		}
	}, [user, navigate]);


	function handleDateChange(e){
		dates = e;
		console.log(e);
		setTrip({
			...trip,
			start_date : dates[0].toLocaleDateString('en-CA'),
			end_date : dates[1].toLocaleDateString('en-CA')
		});
	}

	function handleTitleChange(e){
		setTrip({
			...trip,
			title : e.target.value
		});
	}

	function handleLocationChange(e){
		setTrip({
			...trip,
			location : e.target.value
		});
	}

	async function createTrip(e){
		e.preventDefault();

		const response = await api.post('api/itineraries/', trip);
		if (response.status === 201){
			let id = response.data['id'];
			return navigate(`/trips/${id}`);
		}
	}

  return (
    <div id='trip-wrapper'>
			<div>
				<h1>Create a New Trip</h1>
				<Form id="login-form" onSubmit={createTrip}>
				
					<Form.Group className="mb-3">
						<Form.Label>Title</Form.Label>
						<Form.Control type="text" 
							placeholder="Enter title" 
							value={trip.title}
							onChange={handleTitleChange}
							required
						/>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Location</Form.Label>
						<Form.Control type="text" 
							placeholder="City, Country"
							value={trip.location}
							onChange={handleLocationChange}
							required 
						/>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Choose Dates</Form.Label><br/>
						<DateRangePicker size="lg" 
							placeholder="Start Date - End Date" 
							character=" – " 
							showHeader={false} 
							onChange={handleDateChange}
							required
						/>
					</Form.Group>

					<Button variant="danger" type="submit"> 
						Submit
					</Button>
				</Form>
			</div>
    </div>
  )
};

export default NewTrip;