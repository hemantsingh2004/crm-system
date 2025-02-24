import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTickets } from "../../features/ticket/ticketActions.js";
import { Link } from "react-router-dom";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp.jsx";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { tickets, isLoading, error } = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(fetchAllTickets());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            as={Link}
            to="/add-ticket"
            variant="info"
            style={{ fontSize: "2rem", padding: "10px 30px" }}
            className="text-light"
          >
            Add New Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-2 mb-3 fs-4">
          <div>Total Tickets: 50</div>
          <div>Pending Tickets: 10</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2 w-100">Recently Added Tickets</Col>
      </Row>
      <hr />
      <Row className="mt-1 mb-3">
        <Col>
          <div className="recent-ticket">
            {isLoading ? (
              <h3>Loading ...</h3>
            ) : error ? (
              <h3>Error occurred: {error}</h3>
            ) : (
              <TicketTable tickets={tickets.slice(0, 10)} />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
