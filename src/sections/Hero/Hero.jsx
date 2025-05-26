import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/assets/sam_black.png";
import sun from "../../assets/assets/sun.svg";
import moon from "../../assets/assets/moon.svg";
import facebookLight from "../../assets/assets/facebook--logo-light.png";
import facebookDark from "../../assets/assets/facebook_logo_dark.png";
import githubLight from "../../assets/assets/github-light.svg";
import githubDark from "../../assets/assets/github-dark.svg";
import linkedinLight from "../../assets/assets/linkedin-light.svg";
import linkedinDark from "../../assets/assets/linkedin-dark.svg";
import CV from "../../assets/assets/Sayem_tech CV.pdf";
import { useTheme } from "../../common/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? facebookLight : facebookDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="profile picture of Syed Sayem"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Syed Ekramul <br /> Khayer
          <br />
          Sayem
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://www.facebook.com/share/1XqZEF7EeA/" target="_blank">
            <img src={twitterIcon} alt="Facebook icon" />
          </a>
          <a href="https://github.com/Syed-Sayem" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a href="https://in.linkedin.com/in/syed-ekramul-khayer-sayem-54577a33b" target="_blank">
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          with a passion for developing modern React web apps for commercial
          businesses
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
