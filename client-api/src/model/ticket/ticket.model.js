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

export { insertTicket };
