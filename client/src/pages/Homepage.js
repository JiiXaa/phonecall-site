
import homepage_image from './main-homepage-image.jpg';

const Homepage = () => {
  return (
    <>
      <div className='classes here'>
        <h1>Forge new friendships this festive season!</h1>
        <h2>Sign Up. Connect. Chat.</h2>
        <button>Sign Up</button>
        <button>Log In</button>
        <img src={homepage_image} alt="three people sitting in front of a christmas tree and smiling"/>
      </div>
    </>
  );
};

export default Homepage;
