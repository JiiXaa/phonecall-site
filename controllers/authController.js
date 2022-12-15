const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    console.log(name, email, password);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

export { registerUser };
