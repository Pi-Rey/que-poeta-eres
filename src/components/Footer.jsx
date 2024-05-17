import "../styles/Footer.scss";
import Button1 from "./Button1";

function Footer() {
  return (
    <footer className="footer">
      <Button1 classScss="footer__link about" link="about.html" text="about" />
      <Button1
        classScss="footer__link arroba"
        link="zozobra.html"
        text="@zozobra"
      />
    </footer>
  );
}

export default Footer;
