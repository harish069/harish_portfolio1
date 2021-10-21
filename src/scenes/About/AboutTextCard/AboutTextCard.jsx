import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}> Harish </span>
        from <span className={s.purple}> Kurnool, AndhraPradesh.</span>
        <br />
        Skilled MERN Stack and WEB Developer.
        <br /> Bachelor in Computer Science from
        <br />
        G.Pulla Reddy Engineering College, Kurnool.
        <br />
        Email: Harish.1994.19@gmail.com
        <br />
        Contact: 9440188889
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>

      <p
        style={{
          color: 'rgb(155 126 172)',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        {/* "Strive to build things that make a difference!"{' '} */}
      </p>
    </div>
  );
};

export default AboutTextCard;
