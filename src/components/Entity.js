import React, { useState } from 'react'
import {Button, Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap'

export default function Entity({ entity }) {
  const [showInfo, setShowInfo] = useState(false)

  const handleShowInfo = (e) => {
    setShowInfo(true);
  };

  const toggle = () => setShowInfo(!showInfo);

  return (
    <>
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card">
          
          <div className="card-body text-capitalize">
            <img src={entity.image} alt="entity" className="img-card-top" />
            <h6>{entity.title}</h6>
            <h6 className="text-warning">
              {entity.subtitle}
            </h6>
          </div>
          <div className="card-footer">
            <button type="button" style={{ margin: `13px` }} onClick={handleShowInfo} className="btn btn-primary text-center">Details</button>

            <Modal isOpen={showInfo} toggle={toggle}>
                <ModalHeader toggle={toggle}>{entity.title}</ModalHeader>
                <ModalBody>
                <img className="img-modal" src={entity.image} alt=""/>
                <div>{entity.description}</div>
                </ModalBody>
                <ModalFooter>
                <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
    </>
  )
}
