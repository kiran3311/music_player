import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import './Home.css'
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import axios from "axios" ;



const Home = () => {
  const[songData, setSongData] = useState([])
  const [artistData, setArtistData] = useState([])

  useEffect(
    ()=>{
      axios.get("http://localhost:5000")
      .then((res)=>{setSongData(res.data)})
      .catch((err)=>{console.log(err)})
    },
    
  )

  useEffect(
    ()=>{
      axios.get("http://localhost:5000/artist")
      .then((res)=>{setArtistData(res.data)})
      .catch((err)=>{console.log(err)})
    },
    
  )
  
  return (
    <div>
      <div className='title'>
        <h3 className='title-contain' id='title-text'>Top 10 Songs</h3>
        <Link to="/addsong">
        <Button variant="secondary" size="sm" className='title-contain' id='add-btn' >
          + Add Song
        </Button>
        </Link>
       
      </div>
      <div>
      <Table  bordered >
      
      <thead style={{backgroundColor:'gray', color:'white', height:'10px'}}>
        <tr >
          <th style={{width:'200px'}}>Artwork</th>
          <th>Song</th>
          <th>Date of Release</th>
          <th>Artist</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody>
       
        {songData.map((songDetails, key)=>{
          
          return(
          <>
          <tr key={key}>
          <td><img src={`/uploads/${songDetails.artwork}`}></img></td>
          <td>{songDetails.song} </td>
          <td>{songDetails.DateOfRelease}</td>
          <td>{songDetails.artist}</td>
          <td><Rating/></td>
        </tr>
          </>)
        })}
       
      </tbody>
    </Table>
      </div>

      <div style={{marginTop:'100px'}}>
        <div>
          <h3>Top 10 Artist</h3>
        </div>
      <Table  bordered >
      
      <thead style={{backgroundColor:'gray', color:'white', height:'10px'}}>
        <tr >
          <th >Artist</th>
          <th>Date of Birth</th>
          <th>Song</th>
          
        </tr>

        
      </thead>
      <tbody>
        <tr>
          
          <td>Pink Venom</td>
          <td> August 19, 2022</td>
          <td>BLACKPINK</td>
          
        </tr>
        {artistData.map((artistDetails)=>{
          return(
            <tr>
               <td>{artistDetails.Artist}</td>
          <td> {artistDetails.Dob}</td>
          <td>{artistDetails.Bio}</td>
            </tr>
          )
        })}
       
       
      </tbody>
    </Table>
      </div>
    </div>
  )
}

export default Home
