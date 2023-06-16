import React, { createContext, useReducer } from "react";
import type { ReactNode } from "react";

type bird = {
  COMMON_NAME?: string;
  SCIENTIFIC_NAME?: string;
  DESCRIPTION?: string;
  IMAGE_URL?: string;
};

type initialStateType = {
  isLoading: boolean;
  birds: Array<bird>;
}

const initialState = {
  isLoading: false,
  birds: [],
  dispatch: () => {},
};

// set the defaults
export const RandomBirdContext = createContext<initialStateType>(initialState);

interface RandomBirdContentProviderProps {
  children: ReactNode;
}

type ACTIONTYPE =
  | { type: "update"; payload: bird }
  | { type: "toggleIsLoading"; isLoading: boolean };

function birdReducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "toggleIsLoading":
      return { ...state, isLoading: action.isLoading };
    case "update":
      return { ...state, birds: action.payload };
    default:
      throw new Error();
  }
}

export const RandomBirdContextProvider = ({
  children,
}: RandomBirdContentProviderProps) => {
  // @ts-expect-error
  const [randomBirdValue, dispatch] = useReducer(birdReducer, initialState);

  return (
    <RandomBirdContext.Provider value={{ ...randomBirdValue, dispatch }}>
      {children}
    </RandomBirdContext.Provider>
  );
};
