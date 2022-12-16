const Register = () => {
  return (
    <>
      <div className='classes here'>
        <h1>Sign Up</h1>
        <h2>Create a free account with your email.</h2>
        <form>
          <input type="text" id="full_name" name="full_name" placeholder="Full Name" required/>
          <input type="email" id="email" name="email" placeholder="Email" required/>
          <input type="password" id="password" name="password" placeholder="Password" required/>
          <button type="submit">Create your free account</button>
        </form>
        <p>By continuing, you agree to our Terms of Service.<br/>Read our Privacy Policy.</p>
        <hr/>
        <h3>Already have an account? Sign in</h3>
      </div>
    </>
  );
};

export default Register;
