import React from "react";
import { Modal,show,Button} from 'react-bootstrap';
import { useState } from "react";


const API_IMG="https://image.tmdb.org/t/p/w500/";
const MBox = ({title, poster_path, vote_average,vote_count,release_date, overview}) => {

    const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    return (
        <div className="card text-center  mb-3" >
        <div className="card-body" >
            <p className="rating-tag">{vote_average}</p>
          <img className="card-img-top" src={API_IMG+poster_path} />
          <div className="card-body" >
          <button type="button" className="btn " onClick={handleShow} ><b className="title-btn">{title}</b></button>
              <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                    <p className="title">{title}</p>
                    
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <div className="Modal-image">
                  <img  style={{width:'10rem'}}src={API_IMG+poster_path} />
                  
                  <div className="Modal-text">
                  <p > <b className="bold">Release Date:</b> {release_date}</p>
                  <p>{overview}</p>
                  <p><b className="bold">{vote_average}</b>/10 ({vote_count} total votes)</p>
                  </div>
                  </div>
                  </Modal.Body>
                  
              </Modal>
          </div>
        </div>
    </div>
)
}
        
    
export default MBox;
//import SearchIcon from '@mui/icons-material/Search';