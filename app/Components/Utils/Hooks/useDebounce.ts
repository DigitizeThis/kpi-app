import { useEffect } from "react";
import { useTimeout } from "./useTimeout";

export const useDebounce = (callback: Function, delay: number, deps: Array<unknown>) => {
    const { reset, clear } = useTimeout(callback, delay);

    useEffect(reset, [...deps, reset]);
    useEffect(clear, []);
}