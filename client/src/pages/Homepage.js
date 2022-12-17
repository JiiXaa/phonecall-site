
import homepage_image from '../assets/images/main-homepage-image.jpg';

const Homepage = () => {
  return (
    <>
      <section id="title" className="colored-section">

        <div className='container-fluid'>

          <div className="row">

            <div className="col-lg-6 title-heading-box">
              <div>
                <h1 className="big-heading">Forge new friendships this festive season!</h1>
                <h2 className="sub-heading">Sign Up. Connect. Chat.</h2>
                <button type="button" className="btn btn-lg btn-dark signup-btn">Sign Up</button>
                <button type="button" className="btn btn-lg btn-outline-light signup-btn">Log In</button>
              </div>
            </div>

            <div className="col-lg-6 title-image-box">
              <img className="homepage-image" src={homepage_image} alt="three people sitting in front of a christmas tree and smiling"/>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
