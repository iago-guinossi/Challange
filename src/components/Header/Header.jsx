import React from "react";
import "./Header.css";
import { useTheme } from "../../context/themeContext";
import { useIsMobile } from "../../hooks/useIsMobile";

export function Header() {
  const isMobile = useIsMobile();
  const [theme, setTheme] = useTheme();

  const prepareTheme = () => {
    let themeEl = document.getElementById("theme-id");

    if (!themeEl) {
      themeEl = document.createElement("style");
      themeEl.setAttribute("id", "theme-id");
      document.head.appendChild(themeEl);
    }

    themeEl.innerHTML = "";

    return themeEl;
  };

  React.useEffect(() => {
    if(isMobile){
      if(theme === 'dark'){
        defineDarkMobile()
      } else{
        defineLightMobile()
      }
    } else {
      if(theme === 'dark'){
        defineDark()
      } else{
        defineLight()
      }
    }

    // eslint-disable-next-line
  }, [isMobile]);

  React.useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  function defineDark() {
    const themeEl = prepareTheme();
    setTheme("dark");
    themeEl.innerHTML = `
      :root{
        --color-border: hsl(235deg 16% 29%);
        --color-disable:hsl(234deg 12% 48%);
        --color-task: hsl(234, 39%, 85%);
        --base-background: hsl(235, 24%, 19%);
        --background-color-dark: hsl(235, 21%, 11%);
        --background-image: url(bg-desktop-dark.jpg);
      }
    `;
  }
  function defineDarkMobile() {
    setTheme("dark");
    const themeEl = prepareTheme();
    themeEl.innerHTML = `:root{
        --color-border: hsl(235deg 16% 29%);
        --color-disable:hsl(234deg 12% 48%);
        --color-task: hsl(234, 39%, 85%);
        --base-background: hsl(235, 24%, 19%);
        --background-color-dark: hsl(235, 21%, 11%);
        --background-image: url(bg-mobile-dark.jpg);
    }`;
  }
  function defineLight() {
    setTheme("light");
    const themeEl = prepareTheme();
    themeEl.innerHTML = `:root{
        --color-border: hsl(233, 11%, 84%);
        --color-disable:hsl(236, 9%, 61%);
        --color-task: hsl(235, 19%, 35%);
        --base-background: hsl(0deg 0% 100%);
        --background-color-dark: hsl(0deg 0% 98%);
        --background-image: url(bg-desktop-light.jpg);
    }`;
  }
  function defineLightMobile() {
    setTheme("light");
    const themeEl = prepareTheme();
    themeEl.innerHTML = `:root{
        --color-border: hsl(233, 11%, 84%);
        --color-disable:hsl(236, 9%, 61%);
        --color-task: hsl(235, 19%, 35%);
        --base-background: hsl(0deg 0% 100%);
        --background-color-dark: hsl(0deg 0% 98%);
        --background-image: url(bg-mobile-light.jpg);
    }`;
  }

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
