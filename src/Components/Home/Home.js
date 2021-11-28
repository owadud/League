import React, { useEffect, useState } from 'react';
import League from '../League/League';
import Header from '../Header/Header';

const Home = () => {

    const [leagues,setLeagues] =useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=England')
        .then(response => response.json())
        .then(data => setLeagues(data.countrys))
    },[])

    return (
        <div>
            <Header>
                <h2 className="text-light display-4 text-center fw-bold pt-5">League Liga</h2>
            </Header>
        <div className="team-container container mt-5">
            <div className="row justify-content-center align-items-center g-1">
            {
                leagues.map(le =><League le={le}></League>)
            }
            </div>
           
        </div>
        </div>
    );
};

export default Home;