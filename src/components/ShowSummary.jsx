import React, { useEffect, useState } from 'react'
import "./showSummary.scss"
import { Link } from 'react-router-dom';

const ShowSummary = () => {

    const [details, setDetails] = useState({});
  const [name, setName] = useState("");

  useEffect(() => {
    const showId = window.location.pathname.split("/")[2];
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then((response) => response.json())
      .then((data) => setDetails(data));
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("userDetails", JSON.stringify({ name }));
    alert("Form submitted successfully!");
  };

  return (
    
    <div className='showDetails'>
      <Link className='home' to={"/"}>Home</Link>
      <div className="cart">
      <h2>{details.name}</h2>
      <p><h4>Summary :</h4> {details.summary}</p>
      <form onSubmit={handleSubmit}>

        <h2>Book a Movie Ticket</h2>
        <label>
          Movie Name:
          <input type="text" value={details.name} onChange={handleNameChange} />
        </label>
        <label>
          Your Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <button className='btn'>Book a Ticket</button>
      </form>
      </div>
      
    </div>
  )
}

export default ShowSummary
