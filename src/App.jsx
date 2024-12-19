import { useReducer } from "react";
import Theme from "./themeCtx/theme";
import ThemeContext from "./store/themeContext";

function ThemeReducer(state, action) {
  let newString = state;
  if (action.type === "CHANGE_VALUE") {
    newString = action.payload.New;
  }
  return newString;
}

function App() {
  const [crTheme, dispatchTheme] = useReducer(ThemeReducer, "");

  const ChangeTheme = (e) => {
    dispatchTheme({
      type: "CHANGE_VALUE",
      payload: {
        New: e.target.value,
      },
    });
  };
  const changeOpt = [
    "pink",
    "rgb(255,192,203)",
    "#ffc0cb",
    "",
    "lightblue",
    "skyblue",
    "#33FFF7",
    "rgb(51, 255, 247)",
    "aqua",
    "white",
    "#fff",
    "whitesmoke",
    "wheat",
    "#5F9EA0",
    "rgb(95, 158, 160)",
    "#20B2AA",
    "rgb(32, 178, 170)",
    "#90EE90",
    "rgb(144, 238, 144)",
    "rgb(152, 251, 152)",
    "#98FB98",
    "#00FF7F",
    "rgb(0, 255, 127)",
    "rgb(0, 255, 255)",
    "#00FFFF",
    "#7FFFD4",
    "rgb(127, 255, 212)",
    "#66CDAA",
    "rgb(102, 205, 170)",
    "#48D1CC",
    "#40E0D0",
    "rgb(72, 209, 204)",
    "rgb(32, 178, 170)",
    "#20B2AA",
    "rgb(95, 158, 160)",
    "lightgreen",
    "palegreen",
    "springgreen",
    "aquamarine",
    "mediumaquamarine",
    "turquoise",
    "mediumaquamarine",
    "lightseagreen",
    "cadetblue",
    "yellow",
    "rgb(255,255)",
    "#ffff00",
  ];

  return (
    <ThemeContext.Provider
      value={{
        changeOpt: changeOpt,
        ChangeTheme: ChangeTheme,
        crTheme: crTheme,
      }}
    >
      <Theme />
    </ThemeContext.Provider>
  );
}

export default App;
