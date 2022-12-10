/*import React, { createContext, useState, useContext } from 'react';

const themeStyles = {
  dark: {
    background: '#282c34',
    textColor: 'white'
  },
  light: {
    background: 'white',
    textColor: '#282c34'
  }
}

const ThemeContext = createContext();

function ContextGlobal(props) {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => theme === 'dark' ? setTheme('light') : setTheme('dark');
  const value = { theme: themeStyles[theme], toggleTheme, themeName: theme };
  return <ThemeContext.Provider value={value} {...props} />;
}

const useTheme = () => useContext(ThemeContext);

export { ContextGlobal as default, useTheme }; */


import { useReducer,useMemo,useContext,createContext } from "react";
	

	export const reducer = (state,action) =>{
	  switch(action.type){
	    case 'dark':
	      return {...state,theme:"dark"}
	    case 'light':
	      return {...state,theme:""}
	    default:
	      return state
	  }
	}
	

	export const initialState = {theme: "", data: []}
	

	export const ContextGlobal = createContext();
	

	export const ContextProvider = ({ children }) => {
	  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
	

	const [state,dispatch] = useReducer(reducer,initialState);

	

  const providerValue = useMemo(()=>({state,dispatch}),[state,dispatch]);
	

	return (
	<ContextGlobal.Provider value={providerValue}>
	{children}
	</ContextGlobal.Provider>
  );
	}
	

	export const useContextGlobal = () => {
	  return useContext(ContextGlobal);
	  
	}
