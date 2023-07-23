/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aastha Saraf",
  title: "Hi all, I'm Aastha",
  subTitle: emoji(
    "I am a forward-thinking professional driven by innovation and fascinated by the realms of Augmented Reality (AR), Virtual Reality (VR), gaming, and cutting-edge technologies. With expertise in Full Stack and Backend development, I strive to create immersive experiences and push the boundaries of digital realms."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1EWvP3_Sg7fpNoHJmXsMYrfMSKvLvkmbj/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/asaraf1995",
  linkedin: "https://www.linkedin.com/in/aasthasaraf/",
  gmail: "aasthasaraf1995@gmail.com",
  facebook: "https://www.facebook.com/aastha.saraf.77",
  youtube: "https://www.facebook.com/aastha.saraf.77",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Passionate about building large-scale customer-centric applications"
    ),
    emoji("⚡ Passionate about AR/VR and Gaming")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "vr",
      fontAwesomeClassname: "fas fa-vr-cardboard"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Illinois at Chicago",
      logo: require("./assets/images/uicLogo.png"),
      subHeader: "Master of Science in Computer Science"
    }
  ]
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Full-Stack",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "AR/VR", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Amazon",
      companylogo: require("./assets/images/amazonMusic.png"),
      date: "Dec 2021 – Present",
      desc: "Working as a Full Stack Engineer on the Growth and Experimentation team",
      descBullets: [
        "Implemented experiments and data models to increase customer engagement by 5% using Java, Kotlin, and Android’s UI Toolkit",
"Engineered innovative features that boosted customer acquisition by 4% using Java and JavaScript",
"Automated the testing process and reduced the number of bugs by 20% by implementing a CI pipeline"
      ]
    },
    {
      role: "Software Engineer",
      company: "Audible",
      companylogo: require("./assets/images/audibleLogo.png"),
      date: "June 2021 – Dec 2021",
      desc: "Worked as a Full Stack Engineer on Customer Checkout Experience team",
      descBullets: [
        "Engineered a new Java, JSP cancel flow for mobile and web users, reducing customer service load by 2x",
"Enhanced the checkout experience to reduce cart abandonment and boost customer loyalty, increased repeat purchases by 2%",
"Reduced ticket count by 50% by implementing feature gating to prevent implementation leakage"
      ]
    },
    {
      role: "Research Assistant",
      company: "UIC EVL",
      companylogo: require("./assets/images/evlLogo.png"),
      date: "Jan 2020 – May 2021",
      desc: "Worked as a VR researcher and developer on a project that promoted locomotive recovery for post-stroke patients",
      descBullets: [
        "Assisting Gait Therapists to promote Locomotor Recovery for patients post-stroke by simulating a Virtual Reality environment on a treadmill",
"Using Unity to develop a virtual environment of Chicago Riverwalk with auto-generated obstacles of various difficulty levels",
"Creating an application using Node.js backend and React JS frontend to facilitate control over the virtual environment setup"
      ]
    },
    {
      role: "Software Engineer 2",
      company: "Amdocs",
      companylogo: require("./assets/images/amdocs.png"),
      date: "June 2018 – June 2019",
      desc: "Worked as a Full Stack Engineer on Product Marketing/Maintenance teams",
      descBullets: [
        "Developed a code library that converts design wireframes into website elements using HTML, and JavaScript speeding the conversion rate by 2x",
"Enhanced the scalability of front-end elements by optimizing them for loading speed and performance resulting in 35x decrease in loading speed",
"Reduced manual testing efforts by 75% by developing and deploying a REST API automation framework using Java’s Rest-Assured and TestNG"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  projects: [
    {
      image: require("./assets/images/canYouEscape.png"),
      projectName: "Can You Escape?",
      projectDesc: "An incrementally challenging multilevel immersive VR escape room game",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sites.google.com/view/cs-428-can-you-escape/home?authuser=0"
        },
        {
          name: "View Demo",
          url: "https://youtu.be/p3DAODt4o98",
          skills: "Unity 3D, C#, VRTK, Sketchup, Blender"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/vrLogo.png"),
      projectName: "Don't Judge A Book By It's Cover",
      projectDesc: "An immersive AR application for ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://marcobeccarini.wixsite.com/mysite"
        },
        {
          name: "View Demo",
          url: "https://www.youtube.com/watch?v=oikfJ9sJdn0",
          skills: "Unity 3D, C#, Vuforia, Sketchup, Blender"
        }
      ]
    },
    {
      image: require("./assets/images/gunshotProjectLogo.png"),
      projectName: "Gunshot Visualization in North America",
      projectDesc: "An interactive AR application for book summary",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://asaraf4.people.uic.edu/US_choropleth.html",
          skills: "d3, AJAX, jQuery"
        }
      ]
    },
    {
      image: require("./assets/images/covidProjectLogo.png"),
      projectName: "COVID 19 and it's affects on North America",
      projectDesc: "An interactive AR application for book summary",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sachinmb27.github.io/",
          skills: "C3, d3, AJAX, jQuery, MongoDB"
        },
       
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Hackathons and Conferences"),
  achievementsCards: [
    {
      title: "Facebook Hackathon 2019",
      subtitle:
        "Designed an Instagram filter game like floppy bird",
      image: require("./assets/images/facebookHackathon.png"),
      imageAlt: "Facebook Logo",
      footerLink: [
        {
          name: "Project Demo",
          url: "https://devpost.com/software/can-you-hop-zr8y7d"
        }
      ]
    },
    {
      title: "Grace Hopper Conference 2020 - 2023",
      subtitle:
        "Earned scholarships for GHC for consecutive 3 years through Georgia Tech, Audible and Amazon. Got selected as a GHC reviewer for the year 2023",
      image: require("./assets/images/GHCLogo.png"),
      imageAlt: "GHC Logo",
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss an opportunity or just want to say hi? My Inbox is open for all.",
  number: "+1 773-766-2666",
  email_address: "aasthasaraf1995@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
