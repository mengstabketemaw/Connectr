import './BottomBar.sass';

function BottomBar() {
  return (
    <div className="bottom-bar uk-flex uk-flex-between uk-flex-middle">
      <div className="profile" />
      <div className="nav">
        <div className="button">
          Connectr
          {' '}
          v1.0
          {' '}
          -
          <a href="https://www.mengstab.dev" target="_blank" rel="noreferrer">
            mengstab.dev
          </a>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
