import React, { useContext } from "react";
//context api and usecontext hooks are totallly different . usecontext is used to overcome the consumer code inside the context api
const AppContext = React.createContext();

//the children is actually the app provider
const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value="Sumit Kumar Patel">
      {children}
    </AppContext.Provider>
  );
};

//global custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
