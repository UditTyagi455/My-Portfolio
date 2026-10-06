import ImageOne from "../../images/imwow.avif";
import ImageTwo from "../../images/image2.png";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.webp";
import ImageFive from "../../images/pointerprecise.avif";
import ImageSix from "../../images/scanmaze.avif";
import ImageTycho from "../../images/tycho.png";
import ImageDigitalSeller from "../../images/digital-seller.avif";
import Recone3d from "../../images/Recone-3d.avif";
import Utours from "../../images/utours.avif";

export const filterOptions = [
  {
    label: "All Projects",
    id: 1,
  },
  {
    label: "Next.js",
    id: 4,
  },
  {
    label: "React Native",
    id: 2,
  },
  {
    label: "React JS",
    id: 3,
  },
  {
    label: "Node JS",
    id: 5,
  }
];

export const portfolioData = [
  {
    sectionId: 2,
    category: "React Native",
    projectName: "IMWOW App",
    tagline: "Fitness & Wellness Mobile Application",
    description: "Top-rated fitness mobile application featuring personalized workout programs, diet planning, and real-time community engagement.",
    projectLink: "https://play.google.com/store/apps/details?id=com.imwow&hl=en_IN&gl=US&pli=1",
    techStack: ["React Native", "Redux", "REST APIs", "Android / iOS"],
    image: ImageOne,
  },
  {
    sectionId: 4,
    category: "Next.js",
    projectName: "Tycho Technologies",
    tagline: "Current Company • Enterprise AI & Tech Solutions",
    description: "Official modern company website showcasing next-gen AI systems, cloud-native architecture, and digital transformation services.",
    projectLink: "https://tychotechnologies.com/",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: ImageTycho,
    featured: true,
  },
  {
    sectionId: 4,
    category: "Next.js",
    projectName: "Digital Seller",
    tagline: "E-Commerce Suite • Analytics & Seller Automation",
    description: "Full-featured digital seller and e-commerce marketing platform with sales analytics, product management, and campaign automation.",
    projectLink: "https://digitalseller.in/",
    techStack: ["Next.js", "React", "Node.js", "REST APIs"],
    image: ImageDigitalSeller,
    featured: true,
  },
  {
    sectionId: 5,
    category: "Node JS",
    projectName: "Recon-3D",
    tagline: "Accurate 3D Data For Forensics",
    description: "High-precision mobile capture utility tailored for 360-degree spatial scanning, media management, and enterprise asset inspection.",
    projectLink: "https://apps.apple.com/us/app/recon-3d/id1594797748",
    techStack: ["Node js", "Express js", "Aws S3", "Ejs"],
    image: Recone3d,
  },
  {
    sectionId: 3,
    category: "React JS",
    projectName: "Utours",
    tagline: "Tour and Travelling",
    description: "A travel agency offering outbound and inbound tour packages, holiday deals (such as trips to Qatar, Tbilisi, and the Maldives), and flight coordination",
    projectLink: "https://visitor-test.etulintu.com/",
    techStack: ["Next.js", "React", "Node.js", "REST APIs"],
    image: Utours,
    featured: true,
  },
  {
    sectionId: 3,
    category: "React JS",
    projectName: "Pointprecise",
    tagline: "3D Photogrammetry & Geospatial Web App",
    description: "Advanced web application for 3D measurement, cloud point rendering, and industrial spatial modeling.",
    projectLink: "",
    techStack: ["React JS", "TypeScript", "SCSS", "WebGL"],
    image: ImageFive,
  },
  {
    sectionId: 3,
    category: "React JS",
    projectName: "ScanAmaze",
    tagline: "Automated 3D Model Generation Platform",
    description: "Interactive web solution that transforms photographic sequences into photorealistic 3D digital assets and meshes.",
    projectLink: "",
    techStack: ["React JS", "Cloud Processing", "3D Rendering"],
    image: ImageSix,
  },
  {
    sectionId: 2,
    category: "React Native",
    projectName: "VTS 360Capture App",
    tagline: "Virtual Reality & 360° Industrial Capture",
    description: "High-precision mobile capture utility tailored for 360-degree spatial scanning, media management, and enterprise asset inspection.",
    projectLink: "",
    techStack: ["React Native", "iOS SDK", "MobX", "Camera APIs"],
    image: ImageTwo,
  },
  {
    sectionId: 2,
    category: "React Native",
    projectName: "VO App",
    tagline: "Communication & On-Demand Utility",
    description: "Dynamic mobile utility designed for on-demand booking, instant communication, and seamless user interaction workflows.",
    projectLink: "",
    techStack: ["React Native", "Firebase", "Realtime Sync"],
    image: ImageThree,
  },
  {
    sectionId: 2,
    category: "React Native",
    projectName: "Sokonis App",
    tagline: "Hyperlocal E-Commerce Marketplace",
    description: "Feature-rich cross-platform mobile shopping application with live location-based product delivery and instant checkout.",
    projectLink: "",
    techStack: ["React Native", "Redux", "Stripe / Payments"],
    image: ImageFour,
  }
];
