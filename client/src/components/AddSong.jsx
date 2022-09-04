import React, { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AddSong = () => {
  const [song, setSong] = useState("");
  const [rDate, setRdate] = useState("");
  const [artwork, setArtwork] = useState("");
  const [artist, setArtist] = useState("");
  const [artistName, setArtistName] = useState("")
  const [dob, setDob] = useState("")
  const [bio, setBio] = useState("")
  const [artistData, setArtistData] = useState([])

  const saveHandler = (e) => {
    e.preventDefault();
    //console.log(song,rDate,artist,artwork)
    const formData = new FormData();

    formData.append("song", song);
    formData.append("DateOfRelease", rDate);
    formData.append("artist", artist);
    formData.append("artwork", artwork);

    axios
      .post("http://localhost:5000/add", formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

   
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const artistHandleSubmit =(e)=>{
    e.preventDefault()


    const artistData = {
      Artist:artistName,
      Dob:dob,
      Bio:bio
    }
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'JWT fefege...'
    }

    
    axios
      .post("http://localhost:5000/addartist", artistData,
      {
        headers: headers
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


      setArtistName('')
      setDob('')
      setBio('')


  }

  useEffect(
    ()=>{
      axios.get("http://localhost:5000/artist")
      .then((res)=>{setArtistData(res.data)})
      .catch((err)=>{console.log(err)})
    },
    
  )
  return (
    <div style={{ marginLeft: "170px" }}>
      <div style={{ marginTop: "20px", marginBottom: "40px" }}>
        <h3>Adding new song</h3>
      </div>
      <form onSubmit={saveHandler} encType="multipart/form-data">
        <div>
          <table>
            <tr>
              <td>
                <label style={{ marginBottom: "20px" }}>Song Name</label>
              </td>
              <td>
                <input
                  type={"text"}
                  style={{ marginBottom: "20px", marginLeft: "40px" }}
                  value={song}
                  onChange={(e) => {
                    setSong(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label style={{ marginBottom: "20px" }}>Date of Released</label>
              </td>
              <td>
                <input
                  type={"date"}
                  style={{ marginBottom: "20px", marginLeft: "40px" }}
                  value={rDate}
                  onChange={(e) => {
                    setRdate(e.target.value);
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="file" style={{ marginBottom: "20px" }}>
                  Artwork
                </label>
              </td>
              <td>
                <input
                  type="file"
                  accept="image/*"
                  style={{ marginBottom: "20px", marginLeft: "40px" }}
                  filename="artwork"
                  onChange={(e) => {
                    setArtwork(e.target.files[0]);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label style={{ marginBottom: "20px" }}>Artist</label>
              </td>
              <td>
                <select
                  style={{ marginBottom: "20px", marginLeft: "40px" }}
                  value={artist}
                  onChange={(e) => {
                    setArtist(e.target.value);
                  }}
                >
                  <option></option>
                  <option>Arijit Singh</option>
                  <option>Selena Gomez</option>
                  {artistData.map((i)=>{
                    return(
                      <option>{i.Artist}</option>
                    )
                  })}
                </select>
              </td>
              <td>
               
                  <Button
                    variant="primary"
                    size="sm"
                    style={{ marginBottom: "20px", float: "left" }}
                    onClick={handleShow}
                  >
                    + Add Artist
                  </Button>
                
              </td>
            </tr>
          </table>
        </div>
        <div style={{ marginTop: "80px", marginLeft: "160px" }}>
          <Link to="/">
            <Button
              variant="secondary"
              size="sm"
              style={{ marginRight: "20px" }}
            >
              Cancel
            </Button>
          </Link>

          <Button variant="primary" size="sm" onClick={saveHandler}>
            Save
          </Button>
        </div>
      </form>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Artist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={artistHandleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Artist Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Artist Name"
                  autoFocus
                  value={artistName}
                  onChange={(e)=>{setArtistName(e.target.value)}}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Artist Name"
                  autoFocus
                  value={dob}
                  onChange={(e)=>{setDob(e.target.value)}}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Bio</Form.Label>
                <Form.Control as="textarea" rows={3} 
                value={bio}
                onChange={(e)=>{setBio(e.target.value)}}/>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={artistHandleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default AddSong;
