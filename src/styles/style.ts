import { DefaultTheme } from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme{
        primaryColor: string;
        secondaryColor: string;
        primaryFontColor: string,
        secondaryFOntColor: string,
        fontFamily: string
    }
}

export const darkTheme: DefaultTheme = {
    primaryColor: "#555555",
    secondaryColor: "#bdc3c7",
    primaryFontColor: "#ffffff",
    secondaryFOntColor: "#6a737d",
    fontFamily: "Roboto"
};


export const lightTheme: DefaultTheme = {
    primaryColor: "#ffffff",
    secondaryColor: "#ecf0f1",
    primaryFontColor: "#353535",
    secondaryFOntColor: "#aaaaab",
    fontFamily: "Roboto"
};