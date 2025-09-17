import { memo } from "react";
import "./index.css";
import mail from "../../assets/mail-line (1).png";
import address from "../../assets/map-pin-line.png";
import phone from "../../assets/phone-line (1).png";
import insta from "../../assets/instagram-line (1).png"
import face from "../../assets/facebook-box-fill.png"
import twitter from "../../assets/twitter-x-line.png"
import linkedin from "../../assets/linkedin-box-fill (1).png"

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-top"></div>
              <div class="footer-card">
          <div>
            <h2>Want to be an organizer in our events?</h2>
            <p>
              Share your creative ideas, help shape unique gatherings, and
              become part of the team that makes every moment special.
            </p>
          </div>
          <div className="footer-card-button">
            <button>Join us</button>
          </div>
        </div>

      <section class="footer-container">


        <footer class="site-footer">
          <div className="footer-left">
            <h2>CoffeePLUS</h2>
            <p>
              <span>
                <img src={mail} />
                Email:
              </span>{" "}
              coffeeplus@gmail.com
            </p>
            <p>
              <span>
                <img src={address} />
                Address:
              </span>{" "}
              Sydney NSW, Australia
            </p>
            <p>
              <span>
                <img src={phone} />
                Phone:
              </span>{" "}
              +61 444 555 666
            </p>
            <div className="footer-logos">
              <img src={insta} alt="instagram icon" />
              <img src={face} alt="facebook icon" />
              <img src={twitter} alt="twitter icon" />
              <img src={linkedin} alt="linkedin icon" />
            </div>
          </div>
          <div className="footer-middle">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className="footer-right">
            <p>Stay up to day with CoffeePLUS</p>
            <input placeholder="Enter your email address" />
          </div>
          {/* <p>© 2025 - Todos os direitos reservados</p> */}
        </footer>
      </section>
    </div>
  );
};

export default memo(Footer);
