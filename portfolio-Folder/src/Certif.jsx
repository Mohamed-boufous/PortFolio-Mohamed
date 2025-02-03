import datacamp from "./assets/datacamp.png";
import Data365 from "./assets/Data365.jpg"; 
import sololearn from "./assets/sololearn.png"; 
import linkdin from "./assets/LinkdeIn.png"

const certificates = [
    {
      id: 1,
      title: "Introduction to Data and Data Science",
      platform: "365 Data Science",
      imageUrl: Data365, // Correction : enlever {}
      link: "https://learn.365datascience.com/certificates/CC-AB4AAF26E8/",
    },
    {
      id: 2,
      title: "Introduction to R Programming",
      platform: "365 Data Science",
      imageUrl: Data365 , 
      link: "https://learn.365datascience.com/certificates/CC-4CDA8E9970/",
    },
    {
      id: 3,
      title: "Introduction to Python",
      platform: "DataCamp",
      imageUrl:datacamp,
      link: "https://www.datacamp.com/statement-of-accomplishment/course/115d76b17c58ae441202f14f3128b72a6844e071?raw=1",
    },
    {
      id: 4,
      title: "PHP",
      platform: "sololearn",
      imageUrl:  sololearn , 
      link: "https://www.sololearn.com/en/certificates/CT-GIVTL5CI",
    },
    {
      id: 5,
      title: "Big Data in the Age of AI",
      platform: "LinkedIn Learning",
      imageUrl:  linkdin,
      link: "https://www.linkedin.com/learning/certificates/3b6c2460cdcfb60f2aef8543ab81c9688db55b5d1d52cbc19364d4a8cfde1b27?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B045tDx6%2BSRGg9dAfL%2FkK%2Fw%3D%3D",
    },
    {
      id: 6,
      title: "Git Essential Training",
      platform: "LinkedIn Learning",
      imageUrl:  linkdin,
      link: "https://www.linkedin.com/learning/certificates/48933d77dafdb999665179606f9942d9e77284b3711f4ef279fa62334f7786e1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B045tDx6%2BSRGg9dAfL%2FkK%2Fw%3D%3D",
    },
    {
      id: 7,
      title: "SQL",
      platform: "365 Data Science",
      imageUrl:  Data365,
      link: "https://learn.365datascience.com/certificates/CC-2659F38516/",

    },
    {
      id: 8,
      title: "Statistics",
      platform: "365 Data Science",
      imageUrl:  Data365,
      link: "https://learn.365datascience.com/certificates/CC-45558F612B/",
      
    },
  ];


export default certificates;
