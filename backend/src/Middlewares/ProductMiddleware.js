const validateName = (req, res, next) => {
  const { body } = req;

  if (body.name === undefined) {
    return res.status(400).json({ message: 'The field name are required' });
  }

  if (body.name === '') {
    return res.status(400).json({ message: 'Name cannot be empty' });
  }

  next();
};

const validateDescription = (req, res, next) => {
  const { body } = req;

  if (body.description === undefined) {
    return res
      .status(400)
      .json({ message: 'The field description are required' });
  }

  if (body.description === '') {
    return res.status(400).json({ message: 'Description cannot be empty' });
  }

  next();
};

const validatePrice = (req, res, next) => {
  const { body } = req;

  if (body.price === undefined) {
    return res.status(400).json({ message: 'The field price are required' });
  }

  next();
};

module.exports = {
  validateName,
  validateDescription,
  validatePrice,
};
