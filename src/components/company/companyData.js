import Image1 from "../../assets/Image 1.png";
import Image2 from "../../assets/Image 2.png";
import Image3 from "../../assets/Image 3.png";
import VisionImage from "../../assets/team/Image (6).png";
import Logo1 from "../../assets/Logo.png";
import Logo2 from "../../assets/Logo (1).png";
import Logo3 from "../../assets/Logo (2).png";
import Logo4 from "../../assets/Logo (3).png";
import Logo5 from "../../assets/Logo (4).png";
import ExpertiseIcon1 from "../../assets/Icon Div (4).png";
import ExpertiseIcon2 from "../../assets/Icon Div (5).png";
import ExpertiseIcon3 from "../../assets/Icon Div (6).png";
import twitterIcon from "../../assets/Negative2.png";
import instagramIcon from "../../assets/Negative.png";
import linkedinIcon from "../../assets/Negative1.png";
import { teamMembers } from "../team/teamData";

export const companyHero = {
  eyebrow: "Company",
  title: "Award-winning Company seen and used by millions around the world.",
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized.",
  images: [
    { src: Image1, alt: "Team collaboration" },
    { src: Image2, alt: "Workspace discussion" },
    { src: Image3, alt: "Office meeting" },
  ],
};

export const companyStory = {
  eyebrow: "Our Story",
  title: "From Startups to Titans of Industry",
  description:
    "Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense of gay produce excited perceived do an a china mean its so ye when in explained Hearts am next over match mr partiality not shoud latter thus as out no passed forming middleton exercise up.",
};

export const companyStoryStats = [
  { value: "1560+", label: "Project Delivered" },
  { value: "100+", label: "Professional" },
  { value: "950+", label: "Happy Client" },
  { value: "10 yrs", label: "Experience" },
];

export const companyLogos = [
  { src: Logo1, alt: "Partner logo 1" },
  { src: Logo2, alt: "Partner logo 2" },
  { src: Logo3, alt: "Partner logo 3" },
  { src: Logo4, alt: "Partner logo 4" },
  { src: Logo5, alt: "Partner logo 5" },
];

export const companyExpertiseIntro = {
  eyebrow: "Our expertise",
  title:
    "We want to get local identification in every corner of the world in this era of global citizenship",
  description:
    "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.",
};

export const companyExpertiseItems = [
  {
    title: "On Time Delivery",
    description:
      "Through True Rich Attended does no end it his mother since real had half every him.",
    icon: ExpertiseIcon1,
    alt: "Delivery icon",
  },
  {
    title: "Best Quality",
    description:
      "Through True Rich Attended does no end it his mother since real had half every him.",
    icon: ExpertiseIcon2,
    alt: "Quality icon",
  },
  {
    title: "Support Assist",
    description:
      "Through True Rich Attended does no end it his mother since real had half every him.",
    icon: ExpertiseIcon3,
    alt: "Support icon",
  },
];

export const companyVision = {
  eyebrow: "Our vision",
  title:
    "We want to get local identification in every corner of the world in this era of global citizenship.",
  description:
    "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.",
  image: VisionImage,
  imageAlt: "Vision section",
};

export const companyTeamIntro = {
  eyebrow: "Meet our team",
  title: "Teamwork is the only way we work",
  description:
    "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.",
};

export const companyTeamMembers = teamMembers.map((member, index) => ({
  slug: member.slug,
  name: member.name,
  role: member.cardRole ?? member.role,
  image: member.image,
  featured: index === 0,
}));

export const companySocialIcons = [
  { src: twitterIcon, alt: "Twitter" },
  { src: instagramIcon, alt: "Instagram" },
  { src: linkedinIcon, alt: "LinkedIn" },
];
