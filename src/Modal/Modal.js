import React from 'react';
import './Modal.css'
import clsx from  'clsx';

const MyModal = props => {

  var dept = props.coursedep+'new';
  

function displayInfo () {
    return (
        <div className='content-matter'>
            <div className="coursename">{props.coursename}</div>
            <div className="coursecode">Course Code: {props.coursecode}</div>
            
            <div className="courseic">{props.courseic}</div>
            <div className="courseunits">{props.courseunit}</div>
            
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
        <div className="modal-background">
        <span 
            className="close"
            onClick={ closeModal }>&times;
          </span>

        <div className={ clsx("modal-content", dept)}
          onClick={ e => e.stopPropagation() }>
          
         
          <div className="modal-flex">
            {displayInfo()}
          </div>

        </div>
        </div>

      </div>
    )




    return ( props.displayModal ? modal : null);
}

export default MyModal;
