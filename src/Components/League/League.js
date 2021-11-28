import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const League = (props) => {
    const {strLeague,strGender,strCountry,strBadge,idLeague}=props.le;
    // const leagueStyles ={
    //     display: 'flex',
    //     textAlign: 'center',
    //     flexDirection: 'column',
    //     border: '1px solid black',
    //     width:'20%',
    //     margin: '5px'
        
    // }

    return (
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
            <div className="bg-light d-flex flex-column justify-content-center align-items-center py-3 w-100 rounded lead">
                <img className="w-50" src={strBadge} alt="" />
            <h1 className="fs-4 fw-bold">{strLeague}</h1>
            <p className="fs-5 lh-1">{strGender}</p>
            <p className="fs-5 lh-1">{strCountry}</p>
           
            <Link to={`/leagueDetails/${idLeague}`}> <button className="btn btn-primary fs-5" > <span className='me-3'>Explore</span> <FontAwesomeIcon icon={faArrowRight} /></button></Link>
            </div>
           
            
            
        </div>
    );
};

export default League;