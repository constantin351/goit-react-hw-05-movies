import { Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import css from './BackLink.module.css';

export const BackLink = ({ to, children }) => {
  return (
    <Link to={to} className={css.backlink}>
      <BsFillArrowLeftCircleFill size="20" />
      {children}
    </Link>
  );
};
