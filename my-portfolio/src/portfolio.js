//I Would Highly Recommend You To Customize The Theme According To Your Taste.
export const globalStyles = {
  "--grad": "linear-gradient(315deg,#48a9fe,#00cdac)", // Use gradients only
  // "--grad": "linear-gradient(315deg, #48a9fe 0%, #734ae8 74%)", // Use gradients only
  // "--grad": "linear-gradient(315deg, #06bcfb 0%, #4884ee 74%)",
  "--txtcolor": "#272341",
  "--p_color": "#00cdac",
  "--s_color": "#fff",
};

// Navigation Bar Name
export const navbar_name = "<HemantAhire>";

// Main Page
export const main = {
  name: "Hemant Ahire",
  doamin: "A MERN Stack Web Developer",
  resume:
    "https://drive.google.com/file/d/1Lep1gZAw0keEwgS7YZtbD7bjOWG4Kw8-/view?usp=sharing",
};

// AboutMe
export const aboutme = {
  imgLink: "https://avatars.githubusercontent.com/u/97877643?v=4",
  p1: "Hey, My name is Hemant Ahire. I have completed my Bachelor of Engineering from NDMVP's College of Engineering, Nashik(M.H.).",
  p2: " Currently, I have expertise in C, C++, HTML, CSS, Bootstrap, JavaScript, React, Express, and MongoDB. I also have knowledge of SQL and Bit Manipulation. I would love to be a part of an innovative organization and use my programming skills to help bring creativity and innovation to the organization.",
  p3: " Apart from programming, I enjoy playing sports ⚽, reading books 📚, photography 📸, listening to music 🎵 and riding 🏍️.",
};

// experinece

export const experinece = {
  logo: "https://media.licdn.com/dms/image/C4E0BAQHRY_0FM84rSA/company-logo_200_200/0/1597656325290?e=1698278400&v=beta&t=WB-rEhp1hPO1Q8iQQc8PWK9h5CUvspKFMJnln8e8nM0",
  role: "Associate Software Engineer",
  time:"September 2022 - July 2023",
 p1: "Developed REST-APIs for server",
 p2:"Refactored SQL queries for API",
 p3:"Solved issues found during testing the application",
 p4:"Resolved Bugs and Wrote reusable code.",
 p5:"Developed multiple changes as per client expectations.",
 p6:"Coordination with the team to resolve various client side issues",
 p7:"Built the logic for a different API, Conversion rates",
 p8:"Hands on Experience Node JS, SQL, PostgreSQL , DBeaver, AWS, Postman",
 p9:"Worked on angular to develope pages",
 p10:"Implemented functionality like Filter, Search , Pagination"


};



// Skills
export const whatido = {
  title: "Full Stack Development",

  details: [
    "Building responsive website using HTML,CSS,JS,React",
    "Creating backend application in Node, ExpressJS",
    "Building Simple RESTful CRUD APIs",
    "Knowledge of MongoDB Database",
    "Knowledge of various UI libraries",
  ],
  logos: [
    {
      name: "HTML5",
      iconifyClassName: "vscode-icons:file-type-html", // PS : Use iconify class name
      id: "1",
    },
    {
      name: "CSS",
      iconifyClassName: "vscode-icons:file-type-css",
      id: "2",
    },
    {
      name: "JavaScript",
      iconifyClassName: "logos:javascript",
      id: "3",
    },
    {
      name: "ReactJS",
      iconifyClassName: "vscode-icons:file-type-reactjs",
      id: "4",
    },
    {
      name: "Redux",
      iconifyClassName: "logos:redux",
      id: "5",
    },
    {
      name: "NodeJS",
      iconifyClassName: "logos:nodejs",
      id: "6",
    },
    {
      name: "ExpressJS",
      iconifyClassName: "logos:express",
      id: "7",
    },
    {
      name: "MongoDB",
      iconifyClassName: "logos:mongodb",
      id: "8",
    },
    {
      name: "Postman",
      iconifyClassName: "logos:postman-icon",
      id: "9",
    },
    {
      name: "npm",
      iconifyClassName: "logos:npm-icon",
      id: "10",
    },
    {
      name: "GIT",
      iconifyClassName: "logos:git",
      id: "11",
    },
    {
      name: "Bootstrap",
      iconifyClassName: "logos:bootstrap",
      id: "12",
    },
    {
      name: "Material-UI",
      iconifyClassName: "logos:material-ui",
      id: "13",
    },
    {
      name: "MySQL",
      iconifyClassName: "logos:mysql",
      id: "14",
    },
    {
      name: "Netlify",
      iconifyClassName: "vscode-icons:file-type-netlify",
      id: "15",
    },
    {
      name: "Vercel",
      iconifyClassName: "logos:vercel-icon",
      id: "16",
    },
  ],
};

// Project Details
export const details = [
  {
    id: 1,
    title: "Health-Kart-Clone",
    desc: `HealthKart.com is India’s largest online health & fitness store for men and women. Shop online from the latest collections of health, fitness and similar products featuring the best brands.`,
    feature: `Sign-in/Sign-up,
    Landing Page ,
    Menu Section,
    Product Page,
    Cart Section,
    Payment Page,
    Order or Past-Purchase Section `,
    tech: `Tech Stack: EJS | CSS | JavaScript | nodeJS | express | MongoDB`,
    img: "https://miro.medium.com/max/700/0*ow1GkoN1xBNZsZ_y.png",
    github: "https://github.com/hemantfw13/Health-Kart-Clone",
    link: "https://healthkart-clone-project-only-front-end.netlify.app/",
  },
  {
    id: 2,
    title: "Max-Fashion-Clone",
    desc: `Max-Fashion is a web application to buy products online Such as clothes, footwear, and accessories for the entire family - women, men, and children.
    `,
    feature: `Sign-in/Sign-up with OTP verification,
    eProduct Preview Page,
    Add to Basket and checkout pages,
    Customization options,
    Admin Page,
    Payment gateway integration,
  Subscription page.`,
    tech: `Tech Stack: HTML | CSS | JavaScript`,
    img: "https://cdn-images-1.medium.com/max/800/1*SglnAWra6JJKKixTuZQnoA.png",
    link: "https://hemant-max-fashion-clone.netlify.app/",
    github: "https://github.com/hemantfw13/Max-Fashion-Clone",
  },

  {
    id: 3,
    title: "FAG-BAG Clone",
    desc: `FAG-BAG is a web application to buy products online Such as beauty products from across the world`,
    feature: `Features:
    Sign-in/Sign-up with OTP verification,
    eProduct Preview Page,
    Add to Basket and checkout pages,
    Customization options,
    Admin Page,`,
    tech: `Tech Stack: HTML | CSS | JavaScript | NodeJS `,
    img: "https://miro.medium.com/max/1400/1*TCrHSpurQKPGNE2HN6YRXA.png",
    github: "https://github.com/hemantfw13/FAB-BAG-Project",
    link: "https://hemant-fabbag-clone.netlify.app/",
  },
  // {
  //   id: 4,
  //   title: "MakeMYHome",
  //   desc: `A small React app to keep the details of the flats and their residents in a society.`,
  //   feature: `User authentication using MongoDB,
  //     Private Routing,
  //     Filter and sorting.`,
  //   tech: `Tech Stack: React | CSS | NodeJS | Exprees | MongoDB .`,
  //   img: "https://github.com/Shivam2101s/images/blob/main/makeMyHouse1.jpg?raw=true",
  //   github: "https://github.com/Shivam2101s/Apartment-Flat-Manager",
  //   link: "https://apartment-flats-manager-shivam2101s.vercel.app",
  // },
  // {
  //   id: 5,
  //   title: "Eva Translate",
  //   desc: `Eva Translate is a translating tool, users can translate text from one language to another and also hear its correct pronunciation.`,
  //   feature: `Language translation,
  //     Speech-to-text.`,
  //   tech: `Tech Stack: HTML | CSS | JavaScript .`,
  //   img: "https://github.com/Shivam2101s/images/blob/main/eva%20translate.jpg?raw=true",
  //   link: "https://evatranslate.netlify.app/",
  //   github: "https://github.com/Shivam2101s/Eva-Translate",
  // },
  // {
  //   id: 6,
  //   title: "My Recipe App",
  //   desc: `It's a food recipe app, users can search recipes of various dishes and also see the latest recipes as well as the recipe of the day.`,
  //   feature: `Search recipe,
  // Recipe of the day.`,
  //   tech: `Tech Stack: HTML | CSS | JavaScript`,
  //   img: "https://github.com/Shivam2101s/images/blob/main/food%20app.jpg?raw=true",
  //   link: "https://myfoodapp21.netlify.app/",
  //   github: "https://github.com/Shivam2101s/Food-app",
  // },
];

// Social Media Links
export const links = [
  "https://www.instagram.com/hemantnavnathahire/",
  "https://www.linkedin.com/in/hemant-ahire-71b33b19a/",
  "https://api.whatsapp.com/send/?phone=918308229465&text&app_absent=0",
  "mailto:Hemantahire002@gmail.com",
  "https://medium.com/@hemantahire002",
  "https://github.com/hemantfw13",
];
