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
// const modal = (
//     <Modal basic size='small' onClick={ closeModal }>
//       <Header icon='archive' content='Archive Old Messages' />
//       <Modal.Content onClick={ e => e.stopPropagation() }>
//         <p>
//           Your inbox is getting full, would you like us to enable automatic
//           archiving of old messages?
//           {displayInfo()}
//         </p>
//       </Modal.Content>
//       <Modal.Actions>
//         <Button basic color='red' inverted onClick={ closeModal }>
//           <Icon name='remove' /> No
//         </Button>
//         <Button color='green' inverted>
//           <Icon name='checkmark' /> Yes
//         </Button>
//       </Modal.Actions>
//     </Modal>
//   )





    return ( props.displayModal ? modal : null);
}

export default MyModal;
