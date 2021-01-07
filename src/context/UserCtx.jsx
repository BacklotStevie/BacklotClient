import { createContext, useState, useEffect } from "react";
export const userContext = createContext({
  user: null,
  setUser: () => {},
});

export default function ({ children }) {
  const [user, setUser] = useState();
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}