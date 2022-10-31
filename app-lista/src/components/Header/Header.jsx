import React from "react";
import "./Header.css";
import { useTheme } from "../../context/themeContext";
import { useIsMobile } from "../../hooks/useIsMobile";

export function Header() {
  const isMobile = useIsMobile();
  const [theme, setTheme] = useTheme("dark");
  let themeId = document.getElementById("theme-id");
  if (!document.getElementById("theme-id")) {
    themeId = document.createElement("style");
    themeId.setAttribute("id", "theme-id");
    if (isMobile) {
      themeId.appendChild(
        document.createTextNode(
          `:root{
          --color-border: hsl(235deg 16% 29%);
          --color-disable:hsl(234deg 12% 48%);
          --color-task: hsl(234, 39%, 85%);
          --base-background: hsl(235, 24%, 19%);
          --background-color-dark: hsl(235, 21%, 11%);
          --background-image: url(bg-mobile-dark.jpg);
      }`
        )
        )
        return document.head.appendChild(themeId);
    } else {
       themeId.appendChild(
        document.createTextNode(
          `:root{
                --color-border: hsl(235deg 16% 29%);
                --color-disable:hsl(234deg 12% 48%);
                --color-task: hsl(234, 39%, 85%);
                --base-background: hsl(235, 24%, 19%);
                --background-color-dark: hsl(235, 21%, 11%);
                --background-image: url(bg-desktop-dark.jpg);
            }`
        )
      );
      return document.head.appendChild(themeId);
    }
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
        --background-image: url(bg-desktop-dark.jpg);
    }`
      )
    );
  }
  function defineDarkMobile() {
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
        --background-image: url(bg-mobile-dark.jpg);
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
        --background-image: url(bg-desktop-light.jpg);
    }`
      )
    );
  }
  function defineLightMobile() {
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
        --background-image: url(bg-mobile-light.jpg);
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
        <button
          className="dark"
          onClick={isMobile ? defineDarkMobile : defineDark}
        />
      ) : (
        <button
          className="light"
          onClick={isMobile ? defineLightMobile : defineLight}
        />
      )}
    </div>
  );
}
