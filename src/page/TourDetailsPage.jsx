import ScrollLinks from "../component/links/ScrollLinks";
import { RiTelegram2Fill } from "react-icons/ri";

import { Link, useParams } from "react-router-dom";
import { tours } from "../Data"; // ✅ Import tour data
import "./TourDetails.css";

const TourDetailsPage = () => {
  const { id } = useParams(); // get tour id from route
  const tour = tours.find((item) => item.id.toString() === id); // find tour by id

  if (!tour) return <h2>Tour not found</h2>;

  return (
    <>
      <header
        className="hero"
        style={{
          backgroundImage: `url(${tour.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>{tour.title}</h1>
          <p>{tour.description}</p>
        </div>
      </header>

      <section className="details">
        <div className="container">
          <h2>Tour Overview</h2>
          <p>{tour.overview}</p>
          <ul className="info-list">
            <li>
              <strong>Location:</strong> {tour.location}
            </li>
            <li>
              <strong>Duration:</strong> {tour.days}
            </li>
            <li>
              <strong>Price:</strong> {tour.price}
            </li>
          </ul>
        </div>
      </section>

      <section className="tourdetail-gallery">
        <div className="container">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            {tour.images?.map((img, idx) => (
              <img src={img} key={idx} alt={`Tour ${idx}`} />
            ))}
          </div>
        </div>
      </section>
      <div
        className="book-now-container"
        style={{ textAlign: "center", margin: "2rem 0" }}
      >
        <ScrollLinks
          to="booking"
          name="Book Now"
          extraProps={{ offset: -150 }}
          className="button nav-link-button"
        >
          <RiTelegram2Fill className="button-icon" />
        </ScrollLinks>
        <div style={{ marginTop: "1rem" }}>
          <Link to="/" className="back-home-button">
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default TourDetailsPage;
