exports.signIn = (req, res) => {
  res.render('layout.ejs', { body: 'docFiles/sign-in.ejs' });
};

exports.signUp = (req, res) => {
  res.render('layout.ejs', { body: 'docFiles/sign-up.ejs' });
};

exports.manageProduct = (req, res) => {
  res.render('layout.ejs', { body: 'docFiles/manage-product.ejs' });
};

exports.manageWarehouse = (req, res) => {
  res.render('layout.ejs', { body: 'docFiles/manage-warehouse.ejs' });
};

exports.manageOrder = (req, res) => {
  res.render('layout.ejs', { body: 'docFiles/manage-order.ejs' });
};

exports.roles = (req, res) => {
  res.render('layout.ejs', { body: 'docFiles/roles.ejs' });
};

exports.manageAccount = (req, res) => {
  res.render('layout.ejs', { body: 'docFiles/manage-account.ejs' });
};