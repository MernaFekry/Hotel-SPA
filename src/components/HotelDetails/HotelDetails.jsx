import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';

export default function HotelDetails() {
    const [objDetails, setobjDetails] = useState(null);

    let { id } = useParams()

    async function getMovieDetails() {
        let {data} = await axios.get(`/hotels.json`);
        console.log(data[id]);
        setobjDetails(data[id-1]);
    }

    useEffect(() => {
        getMovieDetails();
    }, []);

  return <div>
    {objDetails ? <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="movieDetails">
                    {/* <img className="project_img" src={require(${objDetails.imageUrl})} alt=""/> */}
                        {/* <img src={objDetails.imageUrl} alt={objDetails.name} /> */}
                        <h4>{objDetails.name}</h4>
                        <p>{objDetails.location}</p>
                        <p>{objDetails.rating}</p>
                    </div>
                </div>
            </div>
        </div>: <div className='vh-100 d-flex justify-content-center align-items-center'>
       <i className="fa-solid fa-spinner fa-spin fa-7x text-white"></i>
     </div>}

  </div>
}
