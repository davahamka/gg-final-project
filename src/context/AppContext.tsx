import React, { createContext, useState } from "react";

interface IAppContext {
  colorTop: string;
  setColorTop: React.Dispatch<React.SetStateAction<string>>;
}

interface IAppProvider {
  children: React.ReactNode;
}

const initialState = {
  colorTop: "canvas.index0",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setColorTop: () => {},
};

const AppContext = createContext<IAppContext>(initialState);

const AppProvider = ({ children }: IAppProvider) => {
  const [colorTop, setColorTop] = useState(initialState.colorTop);

  return (
    <AppContext.Provider value={{ colorTop, setColorTop }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
