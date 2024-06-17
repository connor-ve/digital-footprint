import IconWrapper from './IconWrapper'; 

const Header = () => {

  return (
    <>
      <div>
        <div className="head-text">
          <div id="title">
            <h1>Connor</h1>
            <h1>Van Etten</h1>
          </div>
          <div>
            I am a professional Software Engineer specializing in Desktop applications, along with indie game development and freelance web full stack development.
          </div>
        </div>
        <div className="link-icons">
          <IconWrapper
            href="mailto:vanettencr@gmail.com?subject=Lets Build Some Together&body=Share your crazy software idea with me!" 
            iconClass="fa-regular fa-paper-plane"
          />
          <IconWrapper
            href="https://codepen.io/connor-ve"
            iconClass="fa-brands fa-codepen"
          />
          <IconWrapper
            href="https://github.com/connor-ve"
            iconClass="fa-brands fa-square-github"
          />
          <IconWrapper
            href="https://dev.to/connor-ve"
            iconClass="fa-brands fa-dev"
          />
          <IconWrapper
            href="https://www.linkedin.com/in/crvanetten/"
            iconClass="fa-brands fa-linkedin"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
