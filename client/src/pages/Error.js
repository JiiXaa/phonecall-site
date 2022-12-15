import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <div className='classes here'>
        {/* <img src={img} alt='page not found' /> */}
        <h3>Ups! page not found</h3>
        <p>Page you are looking for does not exist.</p>
        <Link to='/'>Home</Link>
      </div>
    </>
  );
};

export default Error;
