import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Trip from '../components/Trip';
import Event from '../components/Event';
import EventForm from '../components/EventForm';
import useAxios from '../utils/useAxios';
import '../styles/trip.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';


const TripPage = () => {
	const [trip, setTrip] = useState({});
	const [events, setEvents] = useState([]);
  const params = useParams();
  const id = params.id;
	
	let api = useAxios();
	let navigate = useNavigate();
	let {user} = useContext(AuthContext);

	useEffect(() => {
		if (!user) {
			navigate('/login');
		}
    else {
      getTrip();
    }
	}, [user, navigate]);

	async function getTrip(){
		const response = await api.get(`api/itineraries/${id}`);
		if (response.status == 200){
			setTrip(response.data);
			setEvents(response.data.events);
		}
	}
	async function updateTrip(){
		const response = await api.put(`api/itineraries/${id}`, {title: trip.title});
		if (response.status == 200){
			setTrip(response.data);
		}
	}
	async function deleteTrip(){
		const response = await api.delete(`api/itineraries/${id}`);
		if (response.status == 204){
				return navigate('/trips/');
		}
	}

  return (
    <div id="trip-wrapper">
			<div>
				<Trip 
					trip={trip}  
					setTrip={setTrip} 
					updateTrip={updateTrip}
				/>
			
				{/* <h2>Events</h2>
				<div id='event'>
					<div id='event-header'>
						<h3>To the Top!!</h3>
						2024-01-01
					</div>
					<div id='event-header'>
						<h5>Empire State</h5>
						11:00:00 - 11:00:00
					</div>
				</div>
				<div id='event'>
					<div id='event-header'>
						<h3>To the Top!!</h3>
						2024-01-01
					</div>
					<div id='event-header'>
						<h5>Empire State</h5>
						11:00:00 - 11:00:00
					</div>
				</div> */}
				{events.map(event => (
					<Event event={event} />
				))}

				<EventForm getTrip={getTrip} tripId={id} />
				<br/><br/>
				<Button variant='danger' onClick={deleteTrip}>Delete Trip</Button>
			</div>
    </div>
  );
}

export default TripPage;