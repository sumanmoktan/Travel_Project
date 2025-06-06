import { Link } from 'react-scroll'

const ScrollLinks = ({ to, name, className, children, extraProps = {} }) => {
  return (
    <Link to={to} smooth={true} duration={500} {...extraProps} className={className}>
      {name}
      {children}
    </Link>
  );
};

export default ScrollLinks;
