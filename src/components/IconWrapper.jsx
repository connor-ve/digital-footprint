import PropTypes from 'prop-types'; // Import PropTypes for prop validation

const IconWrapper = ({ href, iconClass, disableLink }) => {
  return (
    <div className="icon-wrapper">
      {disableLink ? (
        <i className={iconClass}></i>
      ) : (
        <a href={href}>
          <i className={iconClass}></i>
        </a>
      )}
      <div className="circle-backdrop"></div>
    </div>
  );
};

IconWrapper.propTypes = {
  href: PropTypes.string,
  iconClass: PropTypes.string.isRequired,
  disableLink: PropTypes.bool,
};

IconWrapper.defaultProps = {
  disableLink: false,
};

export default IconWrapper;
