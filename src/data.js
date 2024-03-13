import handWithPhone from "./assets/icons/hand-with-phone.svg";
import scooter from "./assets/icons/scooter.svg";
import rider from "./assets/icons/rider.svg";

import homeStockPhoto1 from "./assets/home/home-stock-photo-1.png";
import homeStockPhoto2 from "./assets/home/home-stock-photo-2.png";
import homeStockPhoto3 from "./assets/home/home-stock-photo-3.png";

const navLinks = ["about", "location", "careers"];

const userGuide = [
  {
    icon: handWithPhone,
    title: "Locate with app",
    text: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. ",
  },
  {
    icon: scooter,
    title: "Pick your scooter",
    text: "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.",
  },
  {
    icon: rider,
    title: "Enjoy the ride",
    text: "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.",
  },
];

const productInfo = [
  {
    image: homeStockPhoto1,
    title: "Easy to use riding telemetry",
    text: "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
  },
  {
    image: homeStockPhoto2,
    title: "Coming to a city near you",
    text: "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.",
  },
  {
    image: homeStockPhoto3,
    title: "Zero hassle payments",
    text: "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.",
  },
];
export { navLinks, userGuide, productInfo };
