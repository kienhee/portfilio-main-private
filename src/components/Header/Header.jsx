/** @format */

import styles from "./header.module.scss";
const Header = () => {
  let socials = [
    { id: 1, name: "github", link: "https://github.com/kienhee" },
    { id: 2, name: "linkedin", link: "https://www.linkedin.com/in/kien-hee/" },
    { id: 3, name: "twitter", link: "https://twitter.com/Kienhee_dev" },
    { id: 4, name: "github", link: "https://www.facebook.com/kien.itt/" },
  ];
  return (
    <header className={`${styles["bg-header"]} mb-5`}>
      <nav className={`${styles["nav"]} wrap-app d-flex justify-content-between align-items-center `}>
        <h1 className="fw-bolder fs-4 text-uppercase">
          <a href="/" className={`${styles["logo"]} `}>KienHee</a>
        </h1>
        <ul className={`d-flex gap-4 align-items-center`}>
          {socials?.map((social) => (
            <li key={social.id} className={styles["header__link"]}>
              <a href={social.link} target="_blank" rel="noreferrer">
                <i className={`bi bi-${social.name}`}></i>
              </a>
            </li>
          ))}

          <li className={`${styles["menu"]} btn  btn-outline-light rounded-pill`}>
            <a href="#">Download CV</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
