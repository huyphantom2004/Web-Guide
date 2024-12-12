exports.index = (req, res) => {
  res.render('layout.ejs',{ body: 'home' });
  };

exports.support = (req, res) => {
  res.render('layout.ejs',{ body: 'support' });
  };

exports.handleNotFound = (req, res) => {
    res.status(404).render('404');
  };

