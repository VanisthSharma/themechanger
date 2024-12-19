import { useContext } from "react";
import ThemeContext from "../store/themeContext";
export default function Inp() {
  let refVal = useContext(ThemeContext);
  let func = refVal.ChangeTheme;
  return (
    <input
      type="text"
      maxLength={20}
      onKeyDown={(e) => {
        e.key === "Enter" && func(e);
      }}
      placeholder="Enter color"
    />
  );
}
