const Register = () => {
  return (
    <>
      <div className='classes here'>
        <h1>Register</h1>
        <form>
          <fieldset>
            <legend>Personal Details</legend>
            <label for="fname">First Name:</label>
            <input type="text" id="fname" name="first_name" required>
            <br>
            <label for="lname">Last Name:</label>
            <input type="text" id="lname" name="last_name">
            <br>
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required>
          </fieldset>
          <fieldset>
            <legend>Account Details</legend>
            <label for="username">Create a username:</label>
            <input type="text" id="username" name="username" required>
            <br>
            <label for="password1">Create a password:</label>
            <input type="password" id="password1" name="password1" required>
            <br>
            <label for="password2">Confirm your password:</label>
            <input type="password" id="password2" name="password2" required>
          </fieldset>
          <fieldset>
            <legend>Your Location</legend>
            <label for="timezone">Your time zone:</label>
            <select id="timezone" name="timezone" required>
              <option></option>
            </select>
            <br>
            <label for="country">Your country of residence:</label>
            <select id="country" name="country" required>
              <option></option>
            </select>
            <br>
            <label for="city">Your city of residence:</label>
            <input list="city_list" id="city" name="city" type="text">
              <datalist id="city_list">
                <option value=""></option>
                <option value=""></option>
              </datalist>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Register;
