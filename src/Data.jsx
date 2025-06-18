import category1 from "./assets/category-1.png";
import category2 from "./assets/category-2.png";
import category3 from "./assets/category-3.png";
import category4 from "./assets/category-4.png";
import category5 from "./assets/category-5.png";
import category6 from "./assets/category-6.png";

import Dinesh from "./assets/Dipesh.jpg";

import destination1 from "./assets/destination-1.png";
import destination2 from "./assets/destination-2.png";
import destination3 from "./assets/destination-3.png";
import destination4 from "./assets/destination-4.png";
import destination5 from "./assets/destination-5.png";
import destination6 from "./assets/destination-6.png";

import tour1 from "./assets/tour-1.png";
import tour2 from "./assets/tour-2.png";
import tour3 from "./assets/tour-3.png";
import tour4 from "./assets/tour-4.png";
import tour5 from "./assets/tour-5.png";
import tour6 from "./assets/tour-6.png";

import gallery1 from "./assets/gallery-1.png";
import gallery2 from "./assets/gallery-2.png";
import gallery3 from "./assets/gallery-3.png";
import gallery4 from "./assets/gallery-4.png";
import gallery5 from "./assets/gallery-5.png";
import gallery6 from "./assets/gallery-6.png";

export const links = ["home", "about", "destinations", "tours"];

export const categories = [
  {
    img: category1,
    title: "Trekking and Mounteering",
  },

  {
    img: category2,
    title: "Cultural Heritage and Temples",
  },

  {
    img: category3,
    title: "Wildlife and Jungle Safaris",
  },

  {
    img: category4,
    title: "Adventure Sports",
  },

  {
    img: category5,
    title: "Lakes and Scenic Retreats",
  },

  {
    img: category6,
    title: "Rural and Community Tourism",
  },
];

export const destinations = [
  {
    id: 1,
    img: destination1,
    title: "Everest Base Camp",
    price: 349,
    rating: 3.5,
  },

  {
    id: 2,
    img: destination2,
    title: "Annapurna Base Camp",
    price: 249,
    rating: 3.5,
  },

  {
    id: 3,
    img: destination3,
    title: "Langtang Valley",
    price: 489,
    rating: 3.5,
  },

  {
    id: 4,
    img: destination4,
    title: "Manaslu Circuit",
    price: 389,
    rating: 3.5,
  },

  {
    id: 5,
    img: destination5,
    title: "Upper Mustang",
    price: 239,
    rating: 3.5,
  },

  {
    id: 6,
    img: destination6,
    title: "Poon Hill",
    price: 449,
    rating: 3.5,
  },
];

export const teamMembers = [
  {
    id: 1,
    img: Dinesh,
    name: "Dinesh singh Tamang",
    position: "Founder & Lead Guide",
    description:
      "Dinesh is a certified guide with over 5 years of experience in mountain adventures. His deep knowledge of Nepali trails andpassion for nature make every trip safe and memorable.",
  },
  {
    id: 2,
    img: Dinesh,
    name: "Dinesh singh Tamang",
    position: "Founder & Lead Guide",
    description:
      "Dinesh is a certified guide with over 5 years of experience in mountain adventures. His deep knowledge of Nepali trails andpassion for nature make every trip safe and memorable.",
  },
  {
    id: 3,
    img: Dinesh,
    name: "Dinesh singh Tamang",
    position: "Founder & Lead Guide",
    description:
      "Dinesh is a certified guide with over 5 years of experience in mountain adventures. His deep knowledge of Nepali trails andpassion for nature make every trip safe and memorable.",
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    title: "Everest Base Camp",
    location: "Paris, France",
    days: "5 Days",
    price: 268,
    stars: 5,
  },

  {
    id: 2,
    img: tour2,
    title: "Annapurna Base Camp",
    location: "Dubai, UAE",
    days: "6 Days",
    price: 367,
    stars: 4,
  },

  {
    id: 3,
    img: tour3,
    title: "Manaslu",
    location: "Arizona",
    days: "8 Days",
    price: 201,
    stars: 3,
  },

  {
    id: 4,
    img: tour4,
    title: "Langtang",
    location: "Nevada, US",
    days: "5 Days",
    price: 201,
    stars: 4,
  },

  {
    id: 5,
    img: tour5,
    title: "Mardi Himal",
    location: "Rajasthan, India",
    days: "6 Days",
    price: 367,
    stars: 4,
  },

  {
    id: 6,
    img: tour6,
    title: "Gokyo Lake",
    location: "Paris, France",
    days: "8 Days",
    price: 201,
    stars: 4,
  },
  {
    id: 7,
    title: "Sailung Hill Adventure",
    description: "Explore the hills and clouds.",
    overview: "Join us on a breathtaking ride to Sailung Hill...",
    location: "Sailung, Nepal",
    days: "2 Days / 1 Night",
    price: "$199",
    stars: 4,
    img: tour4,
    images: [tour1, tour2, tour3],
  },
];

export const footerGallery = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];
