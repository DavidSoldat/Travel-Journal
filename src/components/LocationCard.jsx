import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
const LocationCard = (props) => {
  console.log(props);
  return (
    <div className='flex flex-col items-center md:border-b-2 md:py-7 md:border-[#F5F5F5]   md:flex-row md:gap-5'>
      <img
        src={props.imageUrl}
        alt='image'
        className='object-cover w-80% h-[213px]  max-w-xs rounded-lg'
      />
      <div className='py-5 md:py-0'>
        <span>
          <FontAwesomeIcon icon={faLocationDot} className='text-main-red' />
          <span className='m-2 font-display tracking-widest font-thin text-main-gray'>
            {props.location.toUpperCase()}
          </span>
        </span>
        <a
          href={props.googleMapsUrl}
          className='text-main-light-gray underline'
          target='_blank'
        >
          View on Google Maps
        </a>
        <h1 className='font-extrabold text-main-gray text-3xl py-2'>
          {props.title}
        </h1>
        <p className='text-main-gray font-bold pb-2'>
          {props.startDate} - {props.endDate}
        </p>
        <p className='text-main-gray font-normal md:max-w-xl max-w-sm'>{props.description}</p>
      </div>
      <hr className='h-px bg-[#F5F5F5] w-full md:w-0 mb-7' />
    </div>
  );
};

export default LocationCard;
