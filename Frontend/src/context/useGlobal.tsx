import React, { createContext, useContext, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type QueryDataType = {
  search?: string;
  startDate?: string;
  endDate?: string;
  key?: string;
};

type GlobalContextType = {
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
};

const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [queryData, setQueryData] = useState<QueryDataType>();
  const [showCalander, setShowCalander] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [fetch, setFetch] = useState(false);
  const [search, setSearch] = useState("");

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef<HTMLInputElement>(null);

  const handleDates = (item: any) => {
    setDates([item.selection]);
  };

  const handleSearch = () => {
    const data = {
      startDate: dates[0].startDate.toISOString(),
      endDate: dates[0].endDate.toISOString(),
      key: dates[0].key,
      search: searchRef?.current?.value,
    };

    setQueryData(data);
    setFetch(true);
    navigate("/hotel");
  };

  const value: GlobalContextType = {
    queryData,
    setQueryData,
    showCalander,
    setShowCalander,
    handleSearch,
    handleDates,
    dates,
    fetch,
    search,
    setSearch,
    setFetch,
  };

  //Body
  if (showCalander && pathname === "/") {
    document.body?.classList.add("stop");
  } else {
    document.body?.classList.remove("stop");
  }

  return (
    <GlobalContext.Provider value={{ ...value }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContext;
