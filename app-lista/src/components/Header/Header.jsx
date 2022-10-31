import React from "react";
import "./Header.css";
import { useTheme } from "../../context/themeContext";

export function Header() {
  const [theme, setTheme] = useTheme("dark");
  let themeId = document.getElementById("theme-id");
  if (!document.getElementById("theme-id")) {
    themeId = document.createElement("style");
    themeId.setAttribute("id", "theme-id");
    themeId.appendChild(
      document.createTextNode(
        `:root{
            --color-border: hsl(235deg 16% 29%);
            --color-disable:hsl(234deg 12% 48%);
            --color-task: hsl(234, 39%, 85%);
            --base-background: hsl(235, 24%, 19%);
            --background-color-dark: hsl(235, 21%, 11%);
            --background-image: url(../assets/imgs/bg-desktop-dark.jpg);
        }`
      )
    );
    document.head.appendChild(themeId);
  }

  function defineDark() {
    setTheme("dark");
    themeId.removeChild(themeId.firstChild);
    themeId.appendChild(
      document.createTextNode(
        `:root{
        --color-border: hsl(235deg 16% 29%);
        --color-disable:hsl(234deg 12% 48%);
        --color-task: hsl(234, 39%, 85%);
        --base-background: hsl(235, 24%, 19%);
        --background-color-dark: hsl(235, 21%, 11%);
        --background-image: url(assets/imgs/bg-desktop-dark.jpg);
    }`
      )
    );
  }
  function defineLight() {
    setTheme("light");
    themeId.removeChild(themeId.firstChild);
    themeId.appendChild(
      document.createTextNode(
        `:root{
        --color-border: hsl(233, 11%, 84%);
        --color-disable:hsl(236, 9%, 61%);
        --color-task: hsl(235, 19%, 35%);
        --base-background: hsl(0deg 0% 100%);
        --background-color-dark: hsl(0deg 0% 98%);
        --background-image: url(assets/imgs/bg-desktop-light.jpg);
    }`
      )
    );
  }
  // if(theme === 'dark'){
  //     return themeId.setAttribute('href', 'styles/dark.css')
  // }
  // if(theme === 'light'){
  //     return themeId.setAttribute('href', 'styles/light.css')
  // }
  return (
    <div className="header-container">
      <span className="header-todo">TODO</span>
      {theme === "light" ? (
        <button className="dark" onClick={defineDark} />
      ) : (
        <button className="light" onClick={defineLight} />
      )}
    </div>
  );
}
