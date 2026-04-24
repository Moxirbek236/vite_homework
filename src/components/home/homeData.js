import serviceIcon6 from "../../assets/Icon Div (6).png";
import serviceIcon7 from "../../assets/Icon Div (7).png";
import featureIcon1 from "../../assets/Group 1749.png";
import featureIcon2 from "../../assets/Group 1755.png";
import featureIcon3 from "../../assets/Group 1855.png";

import avatar1 from "../../assets/Image3 (1).png";
import avatar2 from "../../assets/Image3 (2).png";
import avatar3 from "../../assets/Image3 (3).png";

import image1 from "../../assets/Image.png";
import image2 from "../../assets/Image (1).png";

const imageBase = "/images/home";

export const homeServices = [
  {
    key: "support",
    title: "Technical support",
    icon: serviceIcon6,
    alt: "Support",
    featured: true,
  },
  {
    key: "testing",
    title: "Testing Management",
    icon: featureIcon2,
    alt: "Testing",
    featured: false,
  },
  {
    key: "development",
    title: "Development",
    icon: serviceIcon7,
    alt: "Development",
    featured: false,
  },
];

export const expertiseItems = [
  {
    key: "delivery",
    title: "On Time Delivery",
    icon: featureIcon1,
    alt: "Delivery",
    description:
      "Through True Rich Attended does no end it his mother since real had half every him.",
  },
  {
    key: "quality",
    title: "Best Quality",
    icon: featureIcon2,
    alt: "Quality",
    description:
      "Through True Rich Attended does no end it his mother since real had half every him.",
  },
  {
    key: "support",
    title: "Support Assist",
    icon: featureIcon3,
    alt: "Support",
    description:
      "Through True Rich Attended does no end it his mother since real had half every him.",
  },
];

export const testimonials = [
  {
    quote:
      "Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!",
    name: "Johnny Andro",
    role: "Director, Company",
    avatar: avatar1,
    logo: `${imageBase}/logo-dark-4.svg`,
  },
  {
    quote:
      "Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!",
    name: "Freddy Busby",
    role: "Founder, Company",
    avatar: avatar2,
    logo: `${imageBase}/logo-dark-4.svg`,
  },
  {
    quote:
      "Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!",
    name: "Dave Wilkins",
    role: "CEO, Company",
    avatar: avatar3,
    logo: `${imageBase}/logo-dark-3.svg`,
  },
];

export const blogPosts = [
  {
    title: "Today's best design trends for digital products",
    date: "July 19, 2021",
    href: "#",
    image: image1,
    alt: "Coworkers interacting",
  },
  {
    title: "A practical guide to building a brand strategy",
    date: "July 19, 2021",
    href: "#",
    image: image2,
    alt: "Coworkers interacting",
  }
];
