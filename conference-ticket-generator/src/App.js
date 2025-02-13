import React, { useState } from "react";
import TicketForm from "./TicketForm";
import Ticket from "./Ticket";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";


const App = () => {
  const [ticketData, setTicketData] = useState(null);

  return (
    <div className="app">
      <h1>Conference Ticket Generator</h1>
      <TicketForm onSubmit={setTicketData} />
      {ticketData && <Ticket {...ticketData} />}
      <ToastContainer />
    </div>
  );
};

export default App;
