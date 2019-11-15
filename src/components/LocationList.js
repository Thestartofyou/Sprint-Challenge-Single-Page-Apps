import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationList() {
    const [locations, setLocations ] = useState([]);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/`)
            .then(res => {
                console.log('yup', res.data.results);
                setLocations(res.data.results)
            })
            .catch(error => {
                console.error(' NOpe', error)
            })
    },[]);

    return(
        <section className='location-list grid-view'>
            {locations.map(location => (
              <LocationCard 
              name={location.name}
              type={location.type}
              dimension={location.dimension}
              residents={location.residents}/>
            ))}
        </section>
    );
}