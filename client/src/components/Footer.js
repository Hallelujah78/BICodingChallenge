import styled from "styled-components";
import wave from "../assets/images/wave1.svg";
import logo from "../assets/images/CI.svg";
import { FaInstagram, FaYoutube, FaTwitter, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-container">
        <div>
          <h5>Company</h5>
          <ul>
            <li>
              <button>About Us</button>
            </li>
            <li>
              <button>Contact Us</button>
            </li>
            <li>
              <button>Careers</button>
            </li>
            <li>
              <button>Publications</button>
            </li>
            <li>
              <button>Consultatons</button>
            </li>
            <li>
              <button>Register</button>
            </li>
            <li>
              <button>Pilot Projects</button>
            </li>
          </ul>
        </div>
        <div>
          <h5>Communications</h5>
          <ul>
            <li>
              <button>News & Media</button>
            </li>
            <li>
              <button>Podcast</button>
            </li>
            <li>
              <button>Case Studies</button>
            </li>
            <li>
              <button>Blog</button>
            </li>
            <li>
              <button>Insight Hub</button>
            </li>
            <li>
              <button>Tools</button>
            </li>
            <li>
              <button>Events</button>
            </li>
          </ul>
        </div>
        <div>
          <h5>Governance</h5>
          <ul>
            <li>
              <button>Code of Governance Framework</button>
            </li>
            <li>
              <button>Legal & Privacy</button>
            </li>
            <li>
              <button>Cookie Management</button>
            </li>
            <li>
              <button>Disclosures Policy</button>
            </li>
            <li>
              <button>Customer Charter</button>
            </li>
            <li>
              <button>Sustainability & Development Report</button>
            </li>
          </ul>
        </div>
        <div className="social-logo">
          <img src={logo} alt="" />
          <div className="social-icons">
            <ul className="social-list">
              <li className="social-icon">
                <FaInstagram />
              </li>
              <li className="social-icon">
                <FaYoutube />
              </li>
              <li className="social-icon">
                <FaTwitter />
              </li>
              <li className="social-icon">
                <FaTiktok />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Footer;

const Wrapper = styled.footer`
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-size: cover;
  height: 50rem;
  padding-top: 25rem;
  width: 100%;
  .footer-container {
    color: white;
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1.5fr) 3fr;
    button {
      margin: 0.75rem 0 0.75rem 0;
      color: white;
      border: none;
      background: transparent;
      text-align: left;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  .social-logo {
    img {
      margin: auto;
      width: 100%;
      text-align: right;
    }
  }
  .social-icons {
    height: 50%;
    .social-list {
      height: 100%;
      display: flex;
      justify-content: space-around;
      .social-icon {
        margin: auto 0 auto 0;
        font-size: 2.5rem;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;
