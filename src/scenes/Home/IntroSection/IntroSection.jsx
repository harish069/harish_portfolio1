import s from './IntroSection.module.scss';
import harish1 from '../../../assets/harish0585.jpg';
import { AiFillGithub } from 'react-icons/ai';
import {
  // FaFacebookSquare,
  FaLinkedinIn,
  // FaTelegramPlane,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
              {/* I fell in love with programming and I have at least
              learnt something, I think… 🤷‍♂️ */}
              Observant and detail-oriented aspiring full-stack developer with a specialization in MERN stack.
            </p>

            <p>
              {/* My field of Interest's are building new */}
              Innovative optimizedsolution seeker. Excited to be in the deployment phase of mynew career as a web developer.
              <i>
                {/* <b className={s.purple}>
                  {' '}
                  Web Technologies and Products
                </b> */}
              </i>
            </p>

            <p>
              A passionate Full Stack Software Developer 🚀 <br />I
              have an experience of building{' '}
              <i>
                <b className={s.purple}>Web</b>
              </i>{' '}
              applications with
              <br />
              <i>
                <b className={s.purple}>
                  JavaScript, Reactjs, Nodejs, Redux
                </b>
              </i>{' '}
              and some other cool libraries
            </p>
          </div>
        </div>

        {/* <Tilt trackOnWindow={true}> */}
          <LazyLoadImage alt="avatar" effect="blur" src={harish1} />
        {/* </Tilt> */}
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/harish069"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <AiFillGithub />
            </a>
          </li>
          {/* <li className={s.socialLink}>
            <a
              href="https://www.facebook.com/Snaychuk"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaFacebookSquare />
            </a>
          </li> */}
          {/* <li className={s.socialLink}> 
            <a
              href="https://t.me/snaichuk_v"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaTelegramPlane />
            </a>
          </li> */}
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/harish-andela-660446216/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
