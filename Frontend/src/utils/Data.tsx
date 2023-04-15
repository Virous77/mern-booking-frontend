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

export const month = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDate = (id: Date | undefined) => {
  const currentMonth = id?.getMonth();
  const currentDat = id?.getDate();

  const date =
    month[Number(currentMonth)] + " " + currentDat + ", " + id?.getFullYear();

  return date;
};

export const tomorrowTimestamp = new Date().getTime() + 24 * 60 * 60 * 1000;

export const getLocalData = (name: string) => {
  const data = localStorage.getItem(name);

  return data ? JSON.parse(data) : "";
};

const MilliSecondsPerDay = 1000 * 60 * 60 * 24;
export const bookingCounts = (date1: Date, date2: Date) => {
  const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
  return Math.ceil(timeDiff / MilliSecondsPerDay);
};
