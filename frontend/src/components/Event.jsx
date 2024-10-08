import React from 'react'
import '../styles/event.css';

const Event = ({ event }) => {

  // async function updateEvent(){
	// 	const response = await api.put(`api/events/${id}`);
	// 	if (response.status == 200){
	// 		setItinerary(response.data);
	// 	}
	// }
	// async function deleteEvent(){
	// 	const response = await api.delete(`api/events/${id}`);
	// 	if (response.status == 204){
	// 			return navigate('/trips/');
	// 	}
	// }

  return (
    <div key={event.id} id='event'>
			<div id='event-header'>
				<h3>{event.title}</h3>
				{event.date}
			</div>
			<div id='event-header'>
				<h5>{event.place}</h5>
				{event.start_time} - {event.end_time}
			</div>
    </div>
  );
}

export default Event;