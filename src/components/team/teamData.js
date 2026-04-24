import Team1 from "../../assets/team/Team 1.png";
import Team2 from "../../assets/team/Team 2.png";
import Team3 from "../../assets/team/Team 3.png";
import Team4 from "../../assets/team/Team 4.png";
import Team5 from "../../assets/team/Team 5.png";
import Team6 from "../../assets/team/Team 6.png";
import Team7 from "../../assets/team/Team 7.png";
import Team8 from "../../assets/team/Team 8.png";
import twitterIcon from "../../assets/Negative2.png";
import instagramIcon from "../../assets/Negative.png";
import linkedinIcon from "../../assets/Negative1.png";
import postImage1 from "../../assets/Image.png";
import postImage2 from "../../assets/Image (1).png";

export const teamSocialIcons = [
  { key: "twitter", src: twitterIcon, alt: "Twitter", href: "#" },
  { key: "instagram", src: instagramIcon, alt: "Instagram", href: "#" },
  { key: "linkedin", src: linkedinIcon, alt: "LinkedIn", href: "#" },
];

export const teamMembers = [
  {
    slug: "javena-melo",
    name: "Javena Melo",
    role: "CEO",
    cardRole: "Support Assist",
    image: Team1,
    featured: true,
    bio: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.",
    postsHeading: "Blog posts from Javena",
    posts: [
      {
        title: "Today's best design trends for digital products",
        date: "Jan 19, 2021",
        image: postImage1,
        href: "/blog/breaking-the-code",
      },
      {
        title: "A practical guide to building a brand strategy",
        date: "Jan 19, 2021",
        image: postImage2,
        href: "#",
      },
    ],
  },
  {
    slug: "ethan-cole",
    name: "Ethan Cole",
    role: "Project Lead",
    cardRole: "Project Lead",
    image: Team2,
    bio: "Ethan leads cross-functional teams, keeps delivery predictable, and helps clients align product decisions with business outcomes.",
    postsHeading: "Blog posts from Ethan",
    posts: [
      {
        title: "Design systems that move faster without breaking trust",
        date: "Jan 19, 2021",
        image: postImage2,
        href: "#",
      },
      {
        title: "How teams can ship faster while keeping design quality high",
        date: "Jan 19, 2021",
        image: postImage1,
        href: "#",
      },
    ],
  },
  {
    slug: "sophia-lane",
    name: "Sophia Lane",
    role: "UI Designer",
    cardRole: "UI Designer",
    image: Team3,
    bio: "Sophia turns complex product needs into clear interfaces and careful design systems that feel polished on every screen.",
    postsHeading: "Blog posts from Sophia",
    posts: [
      {
        title: "Creating stronger product stories through interface design",
        date: "Jan 19, 2021",
        image: postImage1,
        href: "#",
      },
      {
        title: "A practical guide to building a brand strategy",
        date: "Jan 19, 2021",
        image: postImage2,
        href: "#",
      },
    ],
  },
  {
    slug: "noah-smith",
    name: "Noah Smith",
    role: "Frontend Dev",
    cardRole: "Frontend Dev",
    image: Team4,
    bio: "Noah focuses on responsive UI implementation, performance, and building maintainable frontends from thoughtful design specs.",
    postsHeading: "Blog posts from Noah",
    posts: [
      {
        title: "Frontend patterns that keep teams moving confidently",
        date: "Jan 19, 2021",
        image: postImage2,
        href: "#",
      },
      {
        title: "Today's best design trends for digital products",
        date: "Jan 19, 2021",
        image: postImage1,
        href: "/blog/breaking-the-code",
      },
    ],
  },
  {
    slug: "olivia-ray",
    name: "Olivia Ray",
    role: "QA Engineer",
    cardRole: "QA Engineer",
    image: Team5,
    bio: "Olivia safeguards product quality with a practical eye for regressions, edge cases, and reliable release workflows.",
    postsHeading: "Blog posts from Olivia",
    posts: [
      {
        title: "Quality strategies for modern product teams",
        date: "Jan 19, 2021",
        image: postImage1,
        href: "#",
      },
      {
        title: "How teams can ship faster while keeping design quality high",
        date: "Jan 19, 2021",
        image: postImage2,
        href: "#",
      },
    ],
  },
  {
    slug: "liam-hall",
    name: "Liam Hall",
    role: "Product Owner",
    cardRole: "Product Owner",
    image: Team6,
    bio: "Liam connects product strategy to delivery priorities and helps teams stay focused on the work that moves users and revenue.",
    postsHeading: "Blog posts from Liam",
    posts: [
      {
        title: "How product teams make sharper roadmap decisions",
        date: "Jan 19, 2021",
        image: postImage2,
        href: "#",
      },
      {
        title: "A practical guide to building a brand strategy",
        date: "Jan 19, 2021",
        image: postImage1,
        href: "#",
      },
    ],
  },
  {
    slug: "mia-stone",
    name: "Mia Stone",
    role: "Backend Dev",
    cardRole: "Backend Dev",
    image: Team7,
    bio: "Mia designs dependable backend services and data flows that support fast product iteration without sacrificing stability.",
    postsHeading: "Blog posts from Mia",
    posts: [
      {
        title: "Backend decisions that help products scale calmly",
        date: "Jan 19, 2021",
        image: postImage1,
        href: "#",
      },
      {
        title: "Design systems that move faster without breaking trust",
        date: "Jan 19, 2021",
        image: postImage2,
        href: "#",
      },
    ],
  },
  {
    slug: "lucas-dean",
    name: "Lucas Dean",
    role: "Growth Strategist",
    cardRole: "Growth Strategist",
    image: Team8,
    bio: "Lucas helps teams understand user behavior, sharpen messaging, and turn product momentum into measurable growth.",
    postsHeading: "Blog posts from Lucas",
    posts: [
      {
        title: "How growth teams build better messaging loops",
        date: "Jan 19, 2021",
        image: postImage2,
        href: "#",
      },
      {
        title: "Today's best design trends for digital products",
        date: "Jan 19, 2021",
        image: postImage1,
        href: "/blog/breaking-the-code",
      },
    ],
  },
];

export function getTeamMemberBySlug(slug) {
  return teamMembers.find((member) => member.slug === slug) ?? teamMembers[0];
}
