import twitterIcon from "../../assets/Negative2.png";
import instagramIcon from "../../assets/Negative.png";
import linkedinIcon from "../../assets/Negative1.png";

export const contactIntro = {
  eyebrow: "Contact Us",
  title: "Have a Question ? Let's Get in Touch with us",
  description: "Fill up the Form and our team will get back to within 24 hrs",
};

export const contactFormFields = [
  {
    name: "name",
    label: "Name",
    placeholder: "Paresh Srichandan",
    type: "text",
  },
  {
    name: "email",
    label: "E-mail",
    placeholder: "Paresh@pixeto.com",
    type: "email",
  },
  {
    name: "subject",
    label: "Subject",
    placeholder: "For web design work Enquire",
    type: "text",
  },
];

export const contactMessage = {
  label: "Message",
  placeholder: "Type your Message",
};

export const contactCard = {
  location: {
    title: "Location",
    lines: ["DLF Cybercity, Bhubaneswar,", "India, 652050"],
  },
  workingHours: {
    title: "Working Hour",
    lines: ["Monday To Friday", "9:00 AM to 8:00 PM"],
    note: "Our Support Team is available 24Hrs",
  },
  contact: {
    title: "Contact Us",
    phone: "020 7993 2905",
    email: "Hello@ether.com",
  },
};

export const contactSocialIcons = [
  { key: "twitter", src: twitterIcon, alt: "Twitter", href: "#" },
  { key: "instagram", src: instagramIcon, alt: "Instagram", href: "#" },
  { key: "linkedin", src: linkedinIcon, alt: "LinkedIn", href: "#" },
];

export const contactMap = {
  title: "DLF Cybercity, Bhubaneswar, India",
  embedUrl:
    "https://www.google.com/maps?q=DLF%20Cybercity%2C%20Bhubaneswar%2C%20India&z=14&output=embed",
};
