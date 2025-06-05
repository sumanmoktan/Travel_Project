import SectionTitle from "../title/SectionTitle";
import { destinations } from "../../Data";
import ScrollLink from "../links/ScrollLinks";
import { RiTelegram2Fill } from "react-icons/ri";
import "./destionations.css";

const Destinations = () => {
  return (
    <section className="destinations section container">
      <SectionTitle
        subtitle="Top Destinations"
        title="Legendary Places"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <div className="destinations-container">
        {destinations.map((des, id) => {
          return (
            <div className="destination-item" key={id}>
              <img src={des.img} alt="" className="destination-img" />
              <div className="destination-details">
                <div className="destination-top">
                  <span className="destionation-price">{des.price}</span>
                  <span className="destionation-rating">{des.rating}</span>
                </div>
                <h3 className="destination-title">{des.title}</h3>
                <ScrollLink to="/" name="Details" className="button">
                  <RiTelegram2Fill className="button-icon" />
                </ScrollLink>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Destinations;
