import React, { createContext } from 'react';

type IContextType = {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
};

const IContextState = {
  user: null,
  setUser: () => {}
};

export const UserContext = createContext<IContextType>(IContextState);

export default UserContext;
