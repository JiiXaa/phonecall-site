const Register = () => {
  return (
    <>
      <div className='classes here'>
        <h1>Register</h1>
        <form>
          <fieldset>
            <legend>Personal details</legend>
            <label for="fname">First Name:</label>
            <input type="text" id="fname" name="first_name">
            <br>
            <label for="lname">Last Name:</label>
            <input type="text" id="lname" name="last_name">
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Register;
