import React, { useState } from 'react';
import useAxios from '../utils/useAxios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/event.css';

const EventForm = ({ getTrip, tripId }) => {
	const [event, setEvent] = useState({
		title:'',
		place:'',
		date:'',
		start_time:'',
		end_time:'',
		trip : tripId
	});

	let api = useAxios();

	async function createEvent(e){
		e.preventDefault();

		const response = await api.post('/api/events/', event);
		if (response.status == 201){
			setEvent({
				...event,
				title:'',
				place:'',
				date:'',
				start_time:'',
				end_time:''
			});
			getTrip();
		}
	}

  return (
    <div>
			<h3>Add an Event</h3>
			<Form id="login-form" onSubmit={createEvent}>
				<div id='event-form'>
					<Form.Group className="mb-3" >
						<Form.Label>Title</Form.Label>
						<Form.Control type="text"
							size="sm" 
							placeholder="Enter title" 
							value={event.title}
							onChange={(e) => setEvent({...event, title : e.target.value})}
							required
						/>
					</Form.Group>

					<Form.Group className="mb-3" >
						<Form.Label>Place</Form.Label>
						<Form.Control type="text" 
							size="sm" 
							placeholder="Enter place" 
							value={event.place}
							onChange={(e) => setEvent({...event, place : e.target.value})}
							required
						/>
					</Form.Group>
				</div>
				<div id='event-form'>
					<Form.Group className="mb-3" >
						<Form.Label>Date</Form.Label>
						<Form.Control type="text" 
							size="sm" 
							placeholder="Enter date" 
							value={event.date}
							onChange={(e) => setEvent({...event, date : e.target.value})}
							required
						/>
					</Form.Group>

					<Form.Group className="mb-3" >
						<Form.Label>Start Time</Form.Label>
						<Form.Control type="text" 
							size="sm" 
							placeholder="Enter start time" 
							value={event.start_time}
							onChange={(e) => setEvent({...event, start_time : e.target.value})}
							required
						/>
					</Form.Group>
					
					<Form.Group className="mb-3" >
						<Form.Label>End Time</Form.Label>
						<Form.Control type="text" 
							size="sm" 
							placeholder="Enter end time" 
							value={event.end_time}
							onChange={(e) => setEvent({...event, end_time : e.target.value})}
							required
						/>
					</Form.Group>
				</div>

				<Button variant="danger" type="submit"> Submit </Button>
			</Form>
		</div>
  );
}

export default EventForm;