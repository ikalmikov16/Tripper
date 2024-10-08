import React, { useState, useEffect } from 'react';
import useAxios from '../utils/useAxios';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../styles/trip.css'
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const TripList = () => {
  const [trips, setTrips] = useState([]);

  let api = useAxios();
	let navigate = new useNavigate();
  let {user} = useContext(AuthContext);

	useEffect(() => {
		if (!user) {
			navigate('/login');
		}
    else {
      getTrips();
    }
	}, [user, navigate]);

  // setit([
  //   ...it,
  //   [{a:1},{a:1},{a:1}]
  // ]);
  // console.log(it);

  // let it = [{
  //       "id": 2,
  //       "events": [
  //           {
  //               "id": 2,
  //               "title": "Trip to Newee York",
  //               "place": "NYC",
  //               "date": "2024-04-01",
  //               "start_time": "11:00:00",
  //               "end_time": "12:00:00",
  //               "itinerary": 2
  //           },
  //           {
  //               "id": 3,
  //               "title": "NYC",
  //               "place": "NYC",
  //               "date": "2024-04-01",
  //               "start_time": "11:00:00",
  //               "end_time": "12:00:00",
  //               "itinerary": 2
  //           }
  //       ],
  //       "title": "Tript to NYC",
  //       "location": "NYC",
  //       "start_date": "2024-01-01",
  //       "end_date": "2024-01-05",
  //       "created": "2024-04-15T05:56:02.683322Z",
  //       "user": 1
  //   },
  //   {
  //       "id": 3,
  //       "events": [],
  //       "title": "NYC",
  //       "location": "NYC",
  //       "start_date": "2024-01-01",
  //       "end_date": "2024-01-05",
  //       "created": "2024-04-16T16:25:34.353168Z",
  //       "user": 1
  //   },
  //   {
  //       "id": 4,
  //       "events": [],
  //       "title": "NYC",
  //       "location": "NYC",
  //       "start_date": "2024-01-01",
  //       "end_date": "2024-01-05",
  //       "created": "2024-04-16T17:36:45.067363Z",
  //       "user": 1
  //   }
  // ];
  // console.log(it);

  async function getTrips(){
		let response = await api.get('api/trips/');
    console.log(response.data);

    if(response.status == 200){
      setTrips(response.data);
    }
	}

	function handleCreate(){
		return navigate('/trips/new');
	}

  return (
    <div id="trip-wrapper">
			<div id="trip-list-container">
				<h1>My Trips</h1>

				{trips.map(trip => (
					<div id="trip-list-item"
						key={trip.id}
						onClick={() => navigate(`/trips/${trip.id}`)}
					>
						<h2>{trip.title}</h2>
						<p>
							{trip.location} <br/>
							{trip.start_date} - {trip.end_date}
						</p>
					</div>
				))}

				<Button variant="danger" type="submit" onClick={handleCreate}> 
					Create a New Trip 
				</Button>
			</div>
    </div>
  );
}

export default TripList;