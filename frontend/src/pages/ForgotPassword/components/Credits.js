function Credits() {
  return (
    <span>
      {' '}
      -
      <a
        data-uk-tooltip="Special thanks and open source resources in use"
        data-uk-toggle="target: .toggle-credits ;animation: uk-animation-fade"
      >
        Credits
      </a>
    </span>
  );
}

function Copyright() {
  return (
    <div id="copyright" className="uk-position-bottom-center uk-position-small uk-visible@m uk-position-z-index">
      <span className="uk-text-small uk-text-muted">
        © 2024 mengstab.dev
        <Credits />
        {' '}
        - v1.0
      </span>
    </div>
  );
}

export default Copyright;
