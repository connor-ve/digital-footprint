// eslint-disable-next-line react/prop-types
const IconWrapper = ({ href, iconClass }) => {
  return (
    <div className="icon-wrapper">
      <a href={href}>
        <i className={iconClass}></i>
      </a>
      <div className="circle-backdrop"></div>
    </div>
  );
};

export default IconWrapper;
