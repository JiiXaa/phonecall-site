import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <div className='classes here'>
        {/* <img src={img} alt='page not found' /> */}
        <h3>Oops! Page not found</h3>
        <p>The page you are looking for does not exist.</p>
        <Link to='/'>Home</Link>
      </div>
    </>
  );
};

export default Error;
