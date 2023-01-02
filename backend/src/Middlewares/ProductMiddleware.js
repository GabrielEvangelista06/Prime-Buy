const validateBody = (req, res, next) => {
  const { body } = req;

  if (
    body.name === undefined ||
    body.description === undefined ||
    body.price === undefined
  ) {
    return res.status(400).json({ message: 'The fields are required' });
  }

  if (body.name === '' || body.description === '' || body.price === '') {
    return res.status(400).json({ message: 'The fields cannot be empty' });
  }

  next();
};

module.exports = {
  validateBody,
};
