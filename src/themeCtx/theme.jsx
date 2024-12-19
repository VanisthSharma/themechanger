import css from "./theme.module.css";
import Inp from "./themeinput";
import { useContext } from "react";
import ThemeContext from "../store/themeContext";

export default function Theme() {
  let color = useContext(ThemeContext);
  let newC = color.crTheme;
  let changOpt = color.changeOpt;

  return (
    <div
      className={css.div}
      style={{
        backgroundColor: newC,
      }}
    >
      <h1
        style={{
          color: changOpt.includes(newC.toLowerCase()) ? "black" : "white",
        }}
      >
        Enter Color and Press Enter to see Magic
      </h1>
      <Inp />
    </div>
  );
}
