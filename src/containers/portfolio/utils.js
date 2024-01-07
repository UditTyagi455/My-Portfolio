import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/project-image.avif";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import ImageSix from "../../images/code-image.avif";

export const portfolioData = [
  {
    sectionId: 2,
    projectName: "IMWOW APP",
    projectLink: "https://play.google.com/store/apps/details?id=com.imwow&hl=en_IN&gl=US&pli=1", //project link here based on you choice
    image: ImageOne,
  },
  {
    sectionId: 2,
    projectName: "VTS360CAPTURE APP",
    projectLink: "https://apps.apple.com/in/app/vts-360capture/id6446904529", //project link here based on you choice
    image: ImageTwo,
  },
  {
    sectionId: 2,
    projectName: "VO APP",
    projectLink: "https://apps.apple.com/us/app/vo-app/id1587589362 ", //project link here based on you choice
    image: ImageThree,
  },
  {
    sectionId: 2,
    projectName: "Sokonis APP",
    projectLink: "https://play.google.com/store/apps/details?id=com.sokonis&hl=en_US", //project link here based on you choice
    image: ImageFour,
  },
  {
    sectionId: 3,
    projectName: "Pointprecise",
    projectLink: "https://www.point-precise.com/", //project link here based on you choice
    image: ImageFive,
  },
  {
    sectionId: 3,
    projectName: "Scanmaze",
    projectLink: "https://www.scanamaze.com/", //project link here based on you choice
    image: ImageSix,
  }
];

export const filterOptions = [
  {
    label: "All",
    id: 1,
  },
  {
    label: "React Native",
    id: 2,
  },
  {
    label: "React Js",
    id: 3,
  },
];
