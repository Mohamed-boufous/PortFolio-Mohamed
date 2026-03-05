import datacamp from "./assets/datacamp.png";
import Data365 from "./assets/Data365.jpg";
import sololearn from "./assets/sololearn.png";
import linkdin from "./assets/LinkdeIn.png";
import AppsClub from "./assets/AppsClub.jpg";
import Oracle from "./assets/Oracle-Logo.png";
import gea from "./assets/gea.png";
import nasa from "./assets/nasa.png";

const certificates = [
  {
    id: 1,
    title: "Introduction to Data and Data Science",
    title_fr: "Introduction aux données et à la science des données",
    platform: "365 Data Science",
    platform_fr: "365 Data Science",
    imageUrl: Data365,
    link: "https://learn.365datascience.com/certificates/CC-AB4AAF26E8/",
  },
  {
    id: 2,
    title: "Winning 1st APEX oracle Morocco R&D ",
      title_fr: "Gagnant de la 1ʳᵉ place APEX Oracle Maroc R&D ",
    platform: "Oracle",
      platform_fr: "Oracle",
    imageUrl: Oracle,
    link: "https://drive.google.com/file/d/1F1mPbLXHM4vE2PXY3-rTnUQzrqCo5EHT/view?usp=sharing",
  },
  {
    id: 3,
    title: "Introduction to Python",
      title_fr: "Introduction à Python",
    platform: "DataCamp",
      platform_fr: "DataCamp",
    imageUrl: datacamp,
    link:
      "https://www.datacamp.com/statement-of-accomplishment/course/115d76b17c58ae441202f14f3128b72a6844e071?raw=1",
  },
  {
    id: 4,
    title: "Introduction to R Programming",
    title_fr: "Introduction à la programmation R",
    platform: "365 Data Science",
      platform_fr: "365 Data Science",
    imageUrl: Data365,
    link: "https://learn.365datascience.com/certificates/CC-4CDA8E9970/",
  },
  {
    id: 5,
    title: "Big Data in the Age of AI",
      title_fr: "Le Big Data à l'ère de l'IA",
    platform: "LinkedIn Learning",
      platform_fr: "LinkedIn Learning",
    imageUrl: linkdin,
    link:
      "https://www.linkedin.com/learning/certificates/3b6c2460cdcfb60f2aef8543ab81c9688db55b5d1d52cbc19364d4a8cfde1b27?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B045tDx6%2BSRGg9dAfL%2FkK%2Fw%3D%3D",
  },
  {
    id: 6,
    title: "Git Essential Training",
      title_fr: "Formation Essentielle Git",
    platform: "LinkedIn Learning",
      platform_fr: "LinkedIn Learning",
    imageUrl: linkdin,
    link:
      "https://www.linkedin.com/learning/certificates/48933d77dafdb999665179606f9942d9e77284b3711f4ef279fa62334f7786e1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B045tDx6%2BSRGg9dAfL%2FkK%2Fw%3D%3D",
  },
  {
    id: 7,
    title: "SQL",
      title_fr: "SQL",
    platform: "365 Data Science",
      platform_fr: "365 Data Science",
    imageUrl: Data365,
    link: "https://learn.365datascience.com/certificates/CC-2659F38516/",
  },
  {
    id: 8,
    title: "Statistics",
      title_fr: "Statistiques",
    platform: "365 Data Science",
      platform_fr: "365 Data Science",
    imageUrl: Data365,
    link: "https://learn.365datascience.com/certificates/CC-45558F612B/",
  },
  {
    id: 9,
    title: "Data science Project",
      title_fr: "Data SIENCE",
    platform: "APPS CLUB",
      platform_fr: "APPS CLUB",
    imageUrl: AppsClub,
    link: "https://drive.google.com/file/d/1Zhj6BVSzavfyHkSriBPefySfyy8R0j6J/view?usp=sharing",
  },
  {
    id: 10,
    title: "South Coding Cup",
      title_fr: "South Coding Cup ",
    platform: "APPS CLUB",
      platform_fr: "APPS CLUB ",
    imageUrl: AppsClub,
    link: "https://drive.google.com/file/d/1cgn8OVHLFtle8BY1-dSjTJt4eHSvnQ6a/view?usp=sharing",
  },
  {
    id: 11,
    title: "Introduction to Data and Data Science",
    title_fr: "Introduction aux données et à la science des données",
    platform: "365 Data Science",
    platform_fr: "365 Data Science",
    imageUrl: Data365,
    link: "https://learn.365datascience.com/certificates/CC-AB4AAF26E8/",
  },
  {
    id: 12,
    title: "Youth4Climate",
    title_fr: "Youth4Climate",
    platform: "GEA",
    platform_fr: "GEA",
    imageUrl: gea,
    link: "https://drive.google.com/file/d/1Nn5SaHpEbQEpXBz1JDeiawo87CUzohYO/view?usp=sharing",
  },
  {
    id: 13,
    title: "Understanding Cloud Computing",
    title_fr: "Comprendre le Cloud Computing",
    platform: "DataCamp",
    platform_fr: "DataCamp",
    imageUrl: datacamp,
    link: "https://drive.google.com/file/d/1R7S5u1nivBQozJlB7h6ETy_Qn9ERWI7T/view?usp=sharing",
  },
  {
    id: 14,
    title: "Machine Learning in Python",
    title_fr: "Machine Learning en Python",
    platform: "365 Data Science",
    platform_fr: "365 Data Science",
    imageUrl: Data365,
    link: "https://drive.google.com/file/d/1yO1QJful4-QMMVhMupDXG6ylNuqc3OwI/view?usp=sharing",
  },
  {
    id: 15,
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    title_fr: "Associé Certifié en Fondations d'IA Oracle Cloud Infrastructure 2025",
    platform: "Oracle",
    platform_fr: "Oracle",
    imageUrl: Oracle,
    link: "https://drive.google.com/file/d/1R_4ZfXqKmXZbRpYVd4ifunmDmm0X_Bl-/view?usp=sharing",
  },
  {
    id: 16,
    title: "2025 NASA International Space Apps Challenge",
    title_fr: "NASA International Space Apps Challenge 2025",
    platform: "NASA",
    platform_fr: "NASA",
    imageUrl: nasa,
    link: "https://drive.google.com/file/d/1m8bzxQ9Y3ZgE4HlFo9Nq7A3lRgjBp5QE/view?usp=sharing",
  },
  {
    id: 17,
    title: "AWS Concepts",
    title_fr: "Concepts AWS",
    platform: "DataCamp",
    platform_fr: "DataCamp",
    imageUrl: datacamp,
    link: "https://drive.google.com/file/d/10_WHXZjZf1Wn04pYX81JG1Y6KAf8Ebn9/view?usp=sharing",
  },
];

export default certificates;