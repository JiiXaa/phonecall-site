const Register = () => {
  return (
    <>
      <div className='classes here'>
        <h1>Register</h1>
        <form>
          <fieldset>
            <legend>Personal Details</legend>
            <label for="fname">First Name:</label>
            <input type="text" id="fname" name="first_name" required/>
            <label for="lname">Last Name:</label>
            <input type="text" id="lname" name="last_name"/>
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required/>
          </fieldset>
          <fieldset>
            <legend>Account Details</legend>
            <label for="username">Create a username:</label>
            <input type="text" id="username" name="username" required/>
            <label for="password1">Create a password:</label>
            <input type="password" id="password1" name="password1" required/>
            <label for="password2">Confirm your password:</label>
            <input type="password" id="password2" name="password2" required/>
          </fieldset>
          <fieldset>
            <legend>Your Location</legend>
            <label for="time_zone">Your time zone:</label>

            <label for="country">Your country of residence:</label>

            <label for="city">Your city of residence:</label>
            <input type="text" id="city" name="city"/>
          </fieldset>
          <button type="submit"></button>
        </form>
      </div>
    </>
  );
};

export default Register;
