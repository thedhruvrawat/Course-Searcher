import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import './Modal.css'

const MyModal = props => {
  

function displayInfo () {
    return (
        <div>
            <div>{props.coursename}</div>
            <div>{props.courseic}</div>
            <div>{props.courseunit}</div>
            <div>{props.coursedep}</div>
            <div>{props.coursecode}</div>
        </div>
        
    );
  }

  function closeModal (e) {
    e.stopPropagation()
    props.closeModal()
  }

  let modal = (
      
      <div 
      className="modal"
      onClick={ closeModal }>

        <div className="modal-content"
          onClick={ e => e.stopPropagation() }>
          
          <span 
            className="close"
            onClick={ closeModal }>&times;
          </span>

          <div className="modal-flex">
            {displayInfo()}
          </div>

        </div>

      </div>
    )




    return ( props.displayModal ? modal : null);
}

export default MyModal;
