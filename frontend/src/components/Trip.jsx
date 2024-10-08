import React from 'react'
import '../styles/trip.css';
import Button from 'react-bootstrap/Button';

const Trip = ({ trip, setTrip, updateTrip }) => {

  return (
		<div>
			<input 
				type="text"
				id="trip-title"
				value={trip.title}
				onChange={(e) => setTrip({ ...trip, title : e.target.value})}
			/>
			<br/>
			<Button variant='danger' size='sm' onClick={updateTrip}> Save Title</Button>
			<br/>
			<p id='trip-details'>
				{trip.location} <br/>
				{trip.start_date} - {trip.end_date}
			</p>
		</div>
  );
}

export default Trip;