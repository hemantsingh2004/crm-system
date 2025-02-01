import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SearchForm } from "../../components/search-form/SearchForm.comp";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import DummyTickets from "../../assets/data/dummy-tickets.json";

export const TicketLists = () => {
  const [str, setStr] = useState("");
  const [dispTickets, setDispTickets] = useState([DummyTickets]);

  const handleOnChange = (e) => setStr(e.target.value);

  const searchTicket = (str) => {
    const displayTickets = DummyTickets.filter((row) =>
      row.subject.toLowerCase().includes(str.toLowerCase())
    );
    setDispTickets(displayTickets);
  };

  useEffect(() => {
    searchTicket(str);
  }, [str]);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Button as={Link} to="/add-ticket" variant="info">
            Add New Ticket
          </Button>
        </Col>
        <Col className="text-end">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col>
          <TicketTable tickets={dispTickets} />
        </Col>
      </Row>
    </Container>
  );
};
