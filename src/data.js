import handWithPhone from "./assets/icons/hand-with-phone.svg";
import scooter from "./assets/icons/scooter.svg";
import rider from "./assets/icons/rider.svg";

import homeStockPhoto1 from "./assets/home/home-stock-photo-1.png";
import homeStockPhoto2 from "./assets/home/home-stock-photo-2.png";
import homeStockPhoto3 from "./assets/home/home-stock-photo-3.png";

import smProductMerit1 from "./assets/about/sm-product-merit-1.png";
import smProductMerit2 from "./assets/about/sm-product-merit-2.png";
import lgProductMerit1 from "./assets/about/lg-product-merit-1.png";
import lgProductMerit2 from "./assets/about/lg-product-merit-2.png";

import value1 from "./assets/general/value-1.png";
import value2 from "./assets/general/value-2.png";
import value3 from "./assets/general/value-3.png";

const navLinks = ["about", "careers", "locations"];

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

const productMerits = [
  {
    image: {
      sm: smProductMerit1,
      lg: lgProductMerit1,
    },
    title: "Mobility for the digital era",
    text: "Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.",
  },
  {
    image: {
      sm: smProductMerit2,
      lg: lgProductMerit2,
    },
    title: "Better urban living",
    text: "We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.",
  },
];

const values = [
  {
    id: 1,
    image: value1,
    title: "Our tech",
    text: "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
  },
  {
    id: 2,
    image: value2,
    title: "Our integrity",
    text: "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
  },
  {
    id: 3,
    image: value3,
    title: "Our community",
    text: "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
  },
];

const accordionData = [
  {
    title: "How it works",
    data: [
      {
        question: "How do I download the app?",
        answer:
          "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
      },
      {
        question: "Can I find a nearby Scoots?",
        answer:
          "Yes, you can easily find nearby Scoots through our app. Simply open the app and use the location services to discover available Scoots near you.",
      },
      {
        question: "Do I need a license to ride?",
        answer:
          "Yes, in most cities, you'll need a valid driver's license to ride a Scoot. Please check your local regulations for specific requirements.",
      },
    ],
  },
  {
    title: "Safe driving",
    data: [
      {
        question: "Should I wear a helmet?",
        answer:
          "Yes, please do! All cities have different laws. But we strongly recommend always wearing a helmet regardless of the local laws. We prioritize your safety while Scooting.",
      },
      {
        question: "How about the rules & regulations?",
        answer:
          "It's important to familiarize yourself with the rules and regulations of the road in your area before riding a Scoot. This includes following traffic signals, respecting pedestrian right-of-way, and obeying speed limits.",
      },
      {
        question: "What if I damage my Scoot?",
        answer:
          "If you damage your Scoot, please report it immediately through our app. Depending on the extent of the damage, you may be subject to repair fees. Safety is our priority, so please ensure your Scoot is in good condition before each ride.",
      },
    ],
  },
];

const jobListings = [
  {
    position: "General Manager",
    country: "Indonesia",
    region: "Jakarta",
  },
  {
    position: "UI/UX Designer",
    country: "Japan",
    region: "Yokohama",
  },
  {
    position: "Blog Content Copywriter",
    country: "United States",
    region: "New York",
  },
  {
    position: "Graphic Designer",
    country: "United States",
    region: "New York",
  },
  {
    position: "Fleet Supervisor",
    country: "Indonesia",
    region: "Jakarta",
  },
  {
    position: "UX Analyst",
    country: "United Kingdom",
    region: "London",
  },
];

const locations = ["New York", "London", "Jakarta", "Yokohama"];

export {
  navLinks,
  userGuide,
  productInfo,
  productMerits,
  values,
  accordionData,
  jobListings,
  locations,
};
