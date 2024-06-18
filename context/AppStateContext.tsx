'use client';
import React, { createContext, useContext, useReducer, useMemo } from "react";
import { WithId } from "mongodb";
import type { InferGetServerSidePropsType } from "next";
import { ThemeProvider } from "next-themes";
import { AppState, AppStateContextProps } from "@/app/Interfaces/InterfaceKPIs";
import { Action } from "@/app/Interfaces/TypesActions";
import { getServerSideProps } from "../pages/index";

export const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

const appStateReducer: React.Reducer<AppState | any, Action> = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case "ADD_KPIS":
            return {
                ...state
            };
        case "ADD_METRIC":
            return {
                ...state
            };
        case "ADD_QUESTION":
            return {
                ...state
            };    
        default:
            return state;
    }
};

export function useAppState() {
    const context = useContext<AppStateContextProps>(AppStateContext);
    if (!context || typeof context === "undefined") {
        console.error(`useAppState must be used within AppStateProvider`);
        throw new Error(`useAppState must be used within AppStateProvider`);
    }
    console.log("CONTEXT DATA!...", context.state);
    return context;
};

export const ThemeClient = ({ children }: React.PropsWithChildren<{}>) => {
	return (
		<ThemeProvider attribute="class" defaultTheme="system">
			{children}
		</ThemeProvider>
	);
};

export const AppStateProvider = ({ children, appData }: React.PropsWithChildren<{}> &  InferGetServerSidePropsType<typeof getServerSideProps>) => {
    // state: {appData: []}
    const allData: WithId<Document>[] | undefined = appData;
    const [state, dispatch] = useReducer(appStateReducer, allData!);

    const contextValue = useMemo(() => {
        return { state, dispatch };
    }, [state, dispatch]);

    return (
        <ThemeClient>
            <AppStateContext.Provider value={contextValue}>
                {children}
            </AppStateContext.Provider>
        </ThemeClient>
    );
};
