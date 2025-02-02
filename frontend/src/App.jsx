import { Routes, Route, Navigate } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages/dashboard/Dashboard.page";
import { Entry } from "./pages/entry/Entry.page";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { TicketLists } from "./pages/ticket-listing/TicketLists.page";
import { Ticket } from "./pages/ticket/Ticket.page";
import "./App.css";
function App() {
  const isAuth = true;
  return (
    <div className="App">
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route
            path="/dashboard"
            element={isAuth ? <Dashboard /> : <Navigate to="/" />}
          />
          <Route
            path="/add-ticket"
            element={isAuth ? <AddTicket /> : <Navigate to="/" />}
          />
          <Route
            path="/tickets"
            element={isAuth ? <TicketLists /> : <Navigate to="/" />}
          />
          <Route
            path="/ticket/:tId"
            element={isAuth ? <Ticket /> : <Navigate to="/" />}
          />
        </Route>
        <Route path="/" element={<Entry />} />
      </Routes>
    </div>
  );
}

export default App;
