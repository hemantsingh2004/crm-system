import ticketModel from "./ticket.schema.js";

const insertTicket = async (ticketObj) => {
  return new Promise((resolve, reject) => {
    try {
      ticketModel(ticketObj)
        .save()
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    } catch (error) {
      reject(error);
    }
  });
};

const getTickets = async (clientId) => {
  return new Promise((resolve, reject) => {
    try {
      ticketModel
        .find({ clientId })
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    } catch (error) {
      reject(error);
    }
  });
};

const getTicketById = async (ticketId, clientId) => {
  return new Promise((resolve, reject) => {
    try {
      ticketModel
        .findOne({ _id: ticketId, clientId })
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    } catch (error) {
      reject(error);
    }
  });
};

export { insertTicket, getTickets, getTicketById };
