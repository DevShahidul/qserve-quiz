import React from "react";
import { ThemeProvider } from "styled-components";
import { theme as default_theme } from "./default_theme";

const Theme = ({ children }) => (
    <ThemeProvider theme={default_theme}>{children} </ThemeProvider>
);

export default Theme;