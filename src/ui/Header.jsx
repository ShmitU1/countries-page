import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { toggleMode } from "../lib/features/toggleMode";
import { motion } from "framer-motion";

export function Header() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.toggleMode.mode);

  useEffect(() => {
    const rootElement = document.getElementById("root").classList;
    const className =
      mode === "dark_mode" ? "root_dark_mode" : "root_light_mode";

    rootElement.add(className);

    return () => {
      rootElement.remove(className);
    };
  }, [mode]);

  return (
    <header className={`header_container max-width-1440 ${mode}`}>
      <div className="header_container__left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Where in the world?
        </motion.h1>
      </div>
      <div className="header_container__right">
        <motion.span
          onClick={() => dispatch(toggleMode("light_mode"))}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FontAwesomeIcon className="moon_icon" icon={faMoon} />
          {mode === "light_mode" ? "Dark Mode" : "Light Mode"}
        </motion.span>
      </div>
    </header>
  );
}
