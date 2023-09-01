import { createContext } from "react";
import { ContextTypeApp } from "../@types/@types.stepsForm";
export const ContextApp = createContext<ContextTypeApp | null>(null);
