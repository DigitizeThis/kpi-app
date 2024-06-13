import React, { createContext, useContext } from "react";
import type { InferGetServerSidePropsType } from "next";
import { ThemeProvider } from "next-themes";
import { AppStateContextProps } from "../app/Interfaces/InterfaceKPIs";
import { getServerSideProps } from "../pages/index";

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const useAppState = () => {
    return useContext(AppStateContext);
};

export const ThemeClient = ({ children }: React.PropsWithChildren<{}>) => {
	return (
		<ThemeProvider attribute="class" defaultTheme="system">
			{children}
		</ThemeProvider>
	);
};

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}> &  InferGetServerSidePropsType<typeof getServerSideProps>) => {
    // const [kpis, dispatch] = useReducer(appStateReducer, kpis);
    return (
        <ThemeClient>
            <AppStateContext.Provider value={{state: {kpis: []}}}>
                {children}
            </AppStateContext.Provider>
        </ThemeClient>        
    );
};
