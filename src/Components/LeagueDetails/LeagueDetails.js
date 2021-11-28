import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import './LeagueDetails.css'
import Header from '../Header/Header'

const LeagueDetails = () => {
    const { leagueID } = useParams();


    const [seasons, setSeason] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/2/eventsround.php?id=${leagueID}&r=38&s=2014-2015`;
        fetch(url)
        .then(response => response.json())
        .then(data => setSeason(data.events))
        
    }, [leagueID])


    console.log(seasons);
    return (
        <div>

            <Header

            >
            </Header>
            <p id="error-message" className='text-danger'></p>

            <div className='row justify-content-between d-flex w-100'>
           
                {   
                    seasons.map(season =>
                        <div className="intro col-3  rounded mt-5 p-4 align-items-center">
                            <p>Match: <span className="text-success ">{season.strEvent}</span></p>
                            {/* <p>Country:{league.strCountry}</p>
                   <p>Sports Type:{league.strSport}</p>
                   <p>Gender:{league.strGender}</p> */}
                   
                   
                        </div>)
                    

                }
                
            </div>
            

            <div className="social-media container mt-5 mb-5 d-flex justify-content-center align-items-center">
                <a href="https://www.facebook.com/akash655" rel="noreferrer" target="_blank" ><FontAwesomeIcon className="me-2 text-primary fs-1 mx-5" icon={faFacebook} /></a>
                <a href="https://www.youtube.com/c/AkashCraftVideo/videos" rel="noreferrer" target="_blank" ><FontAwesomeIcon className="me-2 text-danger fs-1 mx-5" icon={faYoutube} /></a>
                <a href='https://www.linkedin.com/in/a-owadud-bhuiyan-695631122/' target="_blank" rel="noreferrer"><FontAwesomeIcon className="me-2 fs-1 mx-5" icon={faLinkedin} style={{ color: "#1DA1F2" }} /></a>
            </div>
        </div>
    );
};



export default LeagueDetails;