const validateName = (res, req, next) => {
  const { body } = req;

  if (body.name === undefined) {
    return res.status(400).json({ message: 'O campo nome é obrigatório' });
  }

  if (body.name === '') {
    return res.status(400).json({ message: 'O campo nome não pode ser vazio' });
  }

  next();
};

const validateUsername = (req, res, next) => {
  const { body } = req;

  if (body.username === undefined) {
    return res.status(400).json({ message: 'O campo username é obrigatório' });
  }

  if (body.username === '') {
    return res
      .status(400)
      .json({ message: 'O campo username não pode ser vazio' });
  }

  next();
};

const validateEmail = (req, res, next) => {
  const { body } = req;

  if (body.email === undefined) {
    return res.status(400).json({ message: 'O campo email é obrigatório' });
  }

  if (body.email === '') {
    return res
      .status(400)
      .json({ message: 'O campo email não pode ser vazio' });
  }

  next();
};

const validatePassword = (req, res, next) => {
  const { body } = req;

  if (body.password === undefined) {
    return res.status(400).json({ message: 'O campo senha é obrigatório' });
  }

  if (body.password === '') {
    return res
      .status(400)
      .json({ message: 'O campo senha não pode ser vazio' });
  }

  next();
};

module.exports = {
  validateName,
  validateUsername,
  validateEmail,
  validatePassword,
};
