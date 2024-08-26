import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <div>
      <Row>
        <Col lg={2}>
          <img width={50} alt='' src='https://i1.sndcdn.com/artworks-000189080723-ez2uad-t500x500.jpg'/>
        </Col>

        <Col lg={10}>
          <div>
            {item.name}
          </div>

          <div>
            {item.phoneNumber}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ContactItem
