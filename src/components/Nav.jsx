import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <nav className='h-24 flex gap-2 text-2xl font-bold text-white justify-center items-center font-display bg-main-red'>
      <FontAwesomeIcon icon={faGlobeAmericas} /> <p className='font-display'>my travel journal.</p>
    </nav>
  );
};

export default Nav;
