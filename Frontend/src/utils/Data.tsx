import imageOne from "../assets/image-three.jpeg";
import imageTwo from "../assets/image-two.jpeg";
import imageThree from "../assets/image-one.jpeg";

type HeroImage = {
  id: number;
  name: string;
  link: string;
};

export const homeHeroImage: HeroImage[] = [
  {
    id: 1,
    name: "The Hotel Maurya",
    link: imageTwo,
  },
  {
    id: 2,
    name: "Infinity Pool",
    link: imageOne,
  },

  {
    id: 3,
    name: "Mission Bay Resort",
    link: imageThree,
  },
];
