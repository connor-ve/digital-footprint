/* eslint-disable react/prop-types */
import IconWrapper from './IconWrapper'; // Import the IconWrapper component


const IconList = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div className="list-item" key={index}>
          <div className="list-icon">
            <IconWrapper 
              href={item.href} 
              iconClass={item.iconClass}
              disableLink={(item.href == "")?true:false}
            />
          </div>
          <div className="list-desc">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconList;
