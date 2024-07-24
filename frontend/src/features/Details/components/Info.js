import './Info.sass';
import logo from '../../../assets/logo.png';

function Info() {
  return (
    <div className="info">
      <div className="top">
        <div className="logo">
          <img src={logo} alt="Picture" />
        </div>
        <div className="text">
          Welcome to
          {' '}
          Connectr!
          <br />
          <br />
          Connectr
          {' '}
          is a messaging app that enables real-time messaging, audio and video calls,
          groups and conferencing.
        </div>
      </div>
      <div className="text">
        Copyright &copy;
        {' '}
        mengstab.dev
        <br />
        v1.0
      </div>
    </div>
  );
}

export default Info;
