import { GlobalStyle } from "./styles/globalStyles";
import Routes from "./routes";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import {
	blackTheme,
	redTheme,
	whiteTheme,
	blueTheme,
	orangeTheme,
} from "./styles/coloral";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const ThemeContext = React.createContext(null);

function App() {
	const [theme, setTheme] = useState("light");
	const themeStyle = theme === "light" ? lightTheme : darkTheme;
	const [coloral, setColoral] = useState("Black");
	// const themeStyle = theme === "dark" ? (coloral == "white" ? coloral="black")
	const colorStyle =
		coloral == "Red"
			? redTheme
			: coloral == "Blue"
			? blueTheme
			: coloral == "Orange"
			? orangeTheme
			: coloral == "Black"
			? theme === "light"
				? blackTheme
				: whiteTheme
			: whiteTheme;
	console.log(colorStyle);
	console.log(themeStyle);
	return (
		<ThemeContext.Provider value={{ setTheme, theme, setColoral, coloral }}>
			<ThemeProvider theme={themeStyle}>
				<ThemeProvider theme={colorStyle}>
					<GlobalStyle />
					<Routes></Routes>
					<ToastContainer></ToastContainer>
				</ThemeProvider>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
}
export default App;
