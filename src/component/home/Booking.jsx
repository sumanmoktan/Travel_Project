import { RiTreasureMapFill, RiCalendarCheckLine } from "react-icons/ri";
import './home.css'

const Booking = ({icon}) => {
  return (
    <div className="booking container">
      <form action="" className="booking-form grid">
        <div className="booking-item">
          <input
            type="text"
            placeholder="Destination"
            className="booking-input"
          />
          <RiTreasureMapFill className="booking-icon" />
        </div>
        <div className="booking-item">
          <input
            type="text"
            placeholder="Start Date"
            className="booking-input"
          />
          <RiCalendarCheckLine className="booking-icon" />
        </div>
        <span className="booking-to">To</span>
        <div className="booking-item">
          <input type="text" placeholder="End Date" className="booking-input" />
          <RiCalendarCheckLine className="booking-icon" />
        </div>
        <button className="button booking-button">Book Now{icon}</button>
      </form>
    </div>
  );
};

export default Booking;
