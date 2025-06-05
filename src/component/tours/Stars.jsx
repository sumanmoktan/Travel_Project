import {
  MdOutlineStarBorder,
  MdOutlineStarHalf,
  MdOutlineStarPurple500,
} from "react-icons/md";

const Stars = ({ stars }) => {
  const getStarIcon = (stars, index) => {
    const number = index + 0.5;
    if (stars >= index + 1) return <MdOutlineStarPurple500 />;
    if (stars >= number) return <MdOutlineStarHalf />;
    return <MdOutlineStarBorder />;
  };
  const ratingStar = Array.from({ length: 5 }, (_, index) => (
    <li className="star" key={index}>
      {getStarIcon(stars, index)}
    </li>
  ));
  return <ul className="star-wrapper">{ratingStar}</ul>;
};

export default Stars;
