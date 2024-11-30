import Calendar from "@/components/shared/Calendar";

const Appointment = () => {
  return (
    <div className="flex flex-1">
      <div className="home-container ">
        <div className="flex flex-col gap-2">
          <h2 className="h3-bold md:h2-bold text-left w-full px-5">
            Appointment
          </h2>

          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
