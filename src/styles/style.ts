import { DefaultTheme } from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme{
        primaryColor: string;
        secondaryColor: string;
        primaryFontColor: string,
        secondaryFontColor: string,
        btnDefaultColor: string,
        inputBorderColor: string,
        fontFamily: string
    }
}

export const darkTheme: DefaultTheme = {
    primaryColor: "#555555",
    secondaryColor: "#bdc3c7",
    primaryFontColor: "#ffffff",
    secondaryFontColor: "#6a737d",
    btnDefaultColor: "ffffff",
    inputBorderColor: "ffffff",
    fontFamily: "Roboto"
};


export const lightTheme: DefaultTheme = {
    primaryColor: "#ffffff",
    secondaryColor: "#ecf0f1",
    primaryFontColor: "#353535",
    secondaryFontColor: "#aaaaab",
    btnDefaultColor: "#000000",
    inputBorderColor: "#d6d5d5",
    fontFamily: "Roboto"
};