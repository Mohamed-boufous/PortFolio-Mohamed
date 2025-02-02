import datacamp from "./assets/datacamp.png";
import Data365 from "./assets/Data365.jpg"; 
import sololearn from "./assets/sololearn.png"; 

// Importer correctement l'image

const certificates = [
    {
      id: 1,
      title: "React - The Complete Guide",
      platform: "Udemy",
      imageUrl: datacamp, // Correction : enlever {}
      link: "https://www.udemy.com/certificate/UC-123456/",
    },
    {
      id: 2,
      title: "Machine Learning",
      platform: "Coursera",
      imageUrl: Data365 , 
      link: "https://www.coursera.org/account/accomplishments/verify/ABCDEFG",
    },
    {
      id: 3,
      title: "Data Science with Python",
      platform: "DataCamp",
      imageUrl:sololearn,
      link: "https://www.datacamp.com/statement-of-accomplishment/course/1234567890",
    },
    {
      id: 4,
      title: "Advanced React",
      platform: "Udemy",
      imageUrl:  Data365 , 
      link: "https://www.udemy.com/certificate/UC-987654/",
    },
    {
      id: 5,
      title: "Deep Learning Specialization",
      platform: "Coursera",
      imageUrl:  datacamp,
      link: "https://www.coursera.org/account/accomplishments/specialization/XYZ123",
    },
  ];

export default certificates;
