
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Aastha Saraf",
  title: "How you doin? I'm Aastha",
  subTitle: emoji("A creative AR/VR and ML researcher having an experience of building appealing Web applications with JavaScript, Reactjs and some other frameworks."),
  resumeLink: "https://drive.google.com/file/d/1nvmfMhuSbkr0BKXDhIydtHEw9liNH02u/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/asaraf1995",
  linkedin: "https://www.linkedin.com/in/aasthasaraf/",
  gmail: "aasthasaraf13@gmail.com",
  facebook: "https://www.facebook.com/aastha.saraf.77"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I want to do?",
  subTitle: "To explore different domains of Computer Science",
  skills: [
    emoji("📌 Solve a real-life problem using Computer Science to improve society"),
    emoji("📌 Combine Arts and Music with Deep Learning"),
    emoji("📌 Become an inspiration for young girls to pursue Computer Science")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "unity",
      fontAwesomeClassname: "fab fa-unity"
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
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
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
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Engineer",  
      company: "BSNL",
      companylogo: require("./assets/images/BSNL.png"),
      date: "Aug 2016 – Oct 2016",
      desc: "",
      descBullets: [
        "Engineered an algorithm that adaptively recommends next subscription plan by analyzing customers history of data usage",
"Modeled and programmed a nonlinear regression model using R language and PostgreSQL database",
"Learned about digital switching systems, digital transmission systems, telecommunication support infrastructure, and optical-fiber communication"
      ]
    },
    {
      role: "Software Engineer",  
      company: "Amdocs",
      companylogo: require("./assets/images/amdocs.jpeg"),
      date: "June 2017 – Dec 2018",
      desc: "",
      descBullets: [
        "Implemented code for converting design wireframes into website elements by using React, jQuery,HTML and JavaScript.",
        
        "Enhanced the scalability of front-end elements by optimizing them for loading speed and performance resulting in a 35x decrease in loading speed.",
        
        "Reduced manual testing efforts by developing REST API Automation Framework using Java’s Rest-Assured combined with TestNG",
        
        "Supervised junior developers in creating responsive modules using advanced CSS and JavaScript"
      ]
    },
    {
      role: "Software Engineer 2",   
      company: "Amdocs",
      companylogo: require("./assets/images/amdocs.jpeg"),
      date: "Dec 2018 – Jul 2019",
      desc: "",
      descBullets: [
        "Developed Back-end Web Services using AJAX, JSON and Java Spring for MySQL to make asynchronous calls to the project server to fetch data",

"Automated functional testing modules using Selenium and Web Drivers that reduced testing efforts by 20x",

"Mentored interns on projects spanning across automation framework, analyzing user data and generating statistical reports",

"Developed Shell scripts to automate simple tasks for Linux environments involved in testing database applications in Oracle and SQL"

      ]
    },
    {
      role: "Graduate Research Assistant",  
      company: "Electronic Visualization lab",
      companylogo: require("./assets/images/UIC.png"),
      date: "Dec 2019 – Aug 2020",
      desc: "",
      descBullets:[
        "Assisting Gait Therapists to promote Locomotor Recovery for patients post-stroke by simulating a Virtual Reality environment on a treadmill.",
"Using Unity to develop a virtual environment of Chicago Riverwalk with auto-generated obstacles of various difficulty levels.",
"Creating an application using Node.js backend and React JS frontend to facilitate control over the virtual environment setup."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "asaraf4", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "The projects I'm really proud of",
  projects: [
    {
  
      image: require("./assets/images/Can you Escape.png"),
      link: "https://sites.google.com/view/cs-428-can-you-escape/home?authuser=0",
      
    },
   
    
    {

      image: require("./assets/images/Dont judge.png"),
      link: "https://marcobeccarini.wixsite.com/mysite"
 
    },
    
    {
      image: require("./assets/images/Dream cubicle.png"),
      link: "https://sites.google.com/view/cptasz2cs428/projects/project-2?authuser=0"
    },
    {
      image: require("./assets/images/Traffic Sign.png"),
      link: "https://docs.google.com/document/d/110JaIa7-nnGNwynmfcOocH7NB7k-Db24CaxTL81xBIU/edit#heading=h.rv6hsfad8zu2"
    },
    {
  
      image: require("./assets/images/gun shot.png"),
      link: "https://sites.google.com/view/cs-428-can-you-escape/home?authuser=0",
      
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements 🥇"),
  subtitle: "Achievements, Conferences and some Hackathons that I have attended !",

  achivementsCards: [
    {
      title: "Facebook Hackathon 2019",
      subtitle: "Developed a game that could be played with just head movements",
      image: require("./assets/images/Facebook.png"),
      footerLink: [
        { name: "Link to the project", url: "https://devpost.com/software/can-you-hop-zr8y7d" },
        
      ]
    },
    {
      title: "Grace Hopper Conference 2020",
      subtitle: "Attended as a Scholar from UIC",
      image: require("./assets/images/GHC2020.png"),
      footerLink: []
    },

  
  ]
};

// Blogs Section

const blogSection = {

  title: "Extracurriculars",
  subtitle: "Apart from my love for Computer Science, I love to sing and sketch",

  blogs: [
    {
      url: "https://sites.google.com/view/aasthasaraf/gallery",
      title: "Have a look at my Art Gallery",
      description: "Art enables us to find ourselves and lose ourselves at the same time (Thomos Merton)"
    },
    {
      url: "https://www.youtube.com/channel/UCDatR0bVd6zl9vKCLW9cakQ?view_as=subscriber",
      title: "Some of my singing performances ",
      description: "A song can be more than words and music ... when sung with soul a song carries you to another world, to a place where no matter how much pain you feel, you are never alone 🧘🏻‍♀"
    },
    {
      url: "https://www.instagram.com/gtcurries/?hl=en",
      title: "Need cooking tips anyone?",
      description: "You ain't a foodie if hastag # doesn't look like a waffle to you? 😋"
    }
    
  ]
};

// Talks Sections

// const talkSection = {
//   title: "",
//   subtitle: emoji(""),

//   talks: [
//     {
//       title: "",
//       subtitle: "",
//       slides_url: "",
//       event_url: ""
//     }
//   ]
// };

// Podcast Section

// const podcastSection = {
//   title: emoji(""),
//   subtitle: "",

//   // Please Provide with Your Podcast embeded Link
// podcast: [""]
// };

const contactInfo = {
  title: emoji("Contact Me 📞"),
  subtitle: "Feel free to get in touch 😄",
  number: "+1-7737662666",
  email_address: "aasthasaraf13@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : ""//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, contactInfo,twitterDetails  };
