import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/font.css";
import "../style/main.css";
import Loading from "../components/Loading";
import Calendar from "../components/Calendar";
import Stripe from "../components/Stripe";
import InfoToggle from "../components/InfoToggle";

const Appointment = () => {
  const [isLoading, setIsLoading] = useState(false);

  // No real effect with data. It's just a 2 second loading icon
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const calendar = (
    <>
      {isLoading ? <Loading /> : null}
      <Calendar />;
    </>
  );

  const description = (
    <p>
      Cost: $ 60/hour. <br />
      <br />
      The quantity refers to how long the appointment is (in hours). <br />
      For hours pre-purchased, we will maintain a record for your hours, and
      provide a detailed invoice.
    </p>
  );

  const payment = (
    <Stripe
      title="Appointment Payment"
      stripe="https://buy.stripe.com/6oEbIXeY04wp0c87st"
      description={description}
    />
  );

  return (
    <div className="container text-center">
      <h2 className="text-center">Appointment</h2>

      <p>Please select date and time from the menu below</p>
      <p>
        Appointments are only finalized and confirmed when payment is made in
        full. <br />
        See payment section at the bottom.
      </p>

      <InfoToggle section="Calendar" content={calendar} />
      {payment}
    </div>
  );
};

export default Appointment;
