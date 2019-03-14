import ContactMe from "../components/ContactMe";
import MyTalks from "../components/MyTalks";
import PersonalBlogs from "../components/PersonalBlogs";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Mycv from "../components/Mycv";

export default {
  profile: {
    name: "Rahul Rana",
    designation: "Frontend Engineer",
    philosophy: "Just love problem solvings"
  },
  menu: [
    {
      label: "PORTFOLIO",
      route: "/portfolio",
      component: Portfolio
    },
    {
      label: "SKILLS & OFFER",
      route: "/skills",
      component: Skills
    },
    {
      label: "MY TALKS",
      route: "/my-talks",
      component: MyTalks
    },
    {
      label: "PERSONAL BLOGS",
      route: "/blog",
      component: PersonalBlogs
    },
    {
      label: "MY CV",
      route: "/cv",
      component: Mycv
    },
    {
      label: "CONTACT ME",
      route: "/contact-me",
      component: ContactMe
    }
  ]
};
