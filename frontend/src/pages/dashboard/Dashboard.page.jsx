import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { TicketTable } from '../../components/ticket-table/TicketTable.comp.jsx'
import tickets from '../../assets/data/dummy-tickets.json'

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button variant="info" style={{'fontSize':'2rem', 'padding': '10px 30px'}} className='text-light'>Add New Ticket</Button>
        </Col>
      </Row>
      <Row>
        <Col className='text-center mt-2 mb-3 fs-4'>
          <div>Total Tickets: 50</div>
          <div>Pending Tickets: 10</div>
        </Col>
      </Row>
      <Row>
        <Col className='mt-2 w-100'>
          Recently Added Tickets
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <div className='recent-ticket'>
            <TicketTable tickets={tickets}/>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
