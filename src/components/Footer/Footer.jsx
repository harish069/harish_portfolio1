import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h3>Designed and Developed by Harish</h3>
        </div>

        <div className={s.copyright}>
          {/* <h3>Copyright © {year} SV.dev</h3> */}
           <h3>Copyright © {year} Harish </h3>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                // href="https://github.com/vsnaichuk"
                  href="https://github.com/harish069"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            {/* <li>
              <a
                href="https://www.facebook.com/Snaychuk"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare />
              </a>
            </li> */}
            {/* <li>
              <a
                href="https://t.me/snaichuk_v"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegramPlane />
              </a>
            </li> */}
            <li>
              <a
                //href="https://www.linkedin.com/in/volodymyr-snaichuk-74a389124/"
                 href="https://www.linkedin.com/in/harish-andela-660446216?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bo1vyFYlZRrGCzySpr3JUrw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
