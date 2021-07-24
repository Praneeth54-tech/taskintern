import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [modal, setModal] = useState(false);
  const [timer, setTimer] = useState("");
  const [time, setTime] = useState(600);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(
        `https://api.instantwebtools.net/v1/passenger?page=${pagination}&size=10`
      );
      const body = await res.json();
      setData([...data, ...body.data]);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }, [pagination]);

  useEffect(() => {
    fetchData();
  }, [pagination]);
  //loading next data
  const fetchNext = () => {
    setPagination(pagination + 1);
  };

  //timer
  const startTimer = () => {
    let m = Math.floor(time / 60);
    let sec = time % 60;
    sec = sec < 10 ? "0" + sec : sec;
    m = m < 10 ? "0" + m : m;
    setTimer(`${m}:${sec}`);
    setTime(time - 1);
  };
  let t;
  useEffect(() => {
    t = time > 0 && setInterval(() => startTimer(), 1000);
    return () => clearInterval(t);
  }, [time]);

  //endClass handler
  const endClassHandler = () => {
    setModal(false);
    clearInterval(t);
  };

  //buttonClick
  const handleClick = () => {
    setModal(true);
  };

  return (
    <AppContext.Provider
      value={{
        data,
        modal,
        timer,
        setModal,
        fetchNext,
        handleClick,
        endClassHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
