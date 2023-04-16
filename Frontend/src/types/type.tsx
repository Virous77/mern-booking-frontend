export type HotelType = {
  _id: string;
  name: string;
  address: string;
  city: string;
  desc: string;
  cheapestPrice: number;
  featured: boolean;
  photos: [string];
  rating: number;
  title: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  rooms: string[];
  distance: string;
};

export type QueryDataType = {
  search?: string;
  startDate?: string;
  endDate?: string;
  key?: string;
};

export type peopleDataType = {
  adult: number;
  children: number;
  room: number;
};

export type GlobalContextType = {
  queryData: QueryDataType | undefined;
  setQueryData: React.Dispatch<React.SetStateAction<QueryDataType | undefined>>;
  showCalander: boolean;
  setShowCalander: React.Dispatch<React.SetStateAction<boolean>>;
  handleSearch: () => void;
  handleDates: (item: any) => void;
  dates: any;
  fetch: boolean;
  setFetch: React.Dispatch<React.SetStateAction<boolean>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  price: {
    maxPrice: string;
    minPrice: string;
  };
  setPrice: React.Dispatch<
    React.SetStateAction<{
      maxPrice: string;
      minPrice: string;
    }>
  >;
  peopleData: peopleDataType;
  setPeopleData: React.Dispatch<React.SetStateAction<peopleDataType>>;
  booking: boolean;
  setBooking: React.Dispatch<React.SetStateAction<boolean>>;
};

export type UserProperty = {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  userName: string;
  email: string;
};

export type RoomBookType = {
  number: number;
  unavailableDates: string[];
  _id: string;
};

export type RoomType = {
  _id: string;
  title: string;
  desc: string;
  price: number;
  maxPeople: number;
  roomNumbers: RoomBookType[];
  createdAt: string;
  updatedAt: string;
};
