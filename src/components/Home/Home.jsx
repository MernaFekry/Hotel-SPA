import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [allHotels, setAllHotels] = useState(null);

  useEffect(() => {
    getAllHotels();
  }, []);

  async function getAllHotels() {
    try {
      const response = await axios.get('/hotels.json');
      setAllHotels(response.data);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  }

  if (!allHotels) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container">
        <div className="row">

        {allHotels.map((hotel,index) => (
        <div key={index} className="col-md-2 my-2 mx-2">

          <Link to={ `/hotels/${hotel.id}`} >
            {/* <img src={hotel.imageUrl} alt={hotel.name} /> */}
            <h2>{hotel.name}</h2>
          </Link>

          <p>Location: {hotel.location}</p>
          <p>Rating: {hotel.rating}</p>
          


        </div>
        // <div key={index}>
        //   <h2>{hotel.name}</h2>
        //   <p>Location: {hotel.location}</p>
        //   <p>Rating: {hotel.rating}</p>
        //   <img src={hotel.imageUrl} alt={hotel.name} />
        // </div>
      ))}

        </div>
      </div>


      
    </div>
  );
};

export default Home;
