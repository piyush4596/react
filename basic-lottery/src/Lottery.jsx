import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n = 3, winningSum = 15 }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = sum(ticket) === winningSum;
  let buyTicket = () => {
    setTicket(genTicket(n));
  };
  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} />
      <button onClick={buyTicket}>Buy new ticket</button>
      <h3>{isWinning && "Congratulation, you won!"}</h3>
    </div>
  );
}
