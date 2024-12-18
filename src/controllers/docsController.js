// Đăng nhập
exports.signIn = (req, res) => {
  res.render('layout.ejs', { body: 'docFiles/sign-in.ejs' });
};

// Đăng ký
exports.signUp = (req, res) => {
  res.render('layout.ejs', { body: 'docFiles/sign-up.ejs' });
};

// Quản lý sản phẩm
exports.manageProduct = (req, res) => {
  res.render('layout.ejs', { body: 'docFiles/manage-product.ejs' });
};

// Quản lý nhà cung cấp
exports.supplier = (req, res) => {
  res.render('layout.ejs', { body: 'docFiles/supplier.ejs' });
};

// Quản lý kho
exports.manageWarehouse = (req, res) => {
  res.render('layout.ejs', { body: 'docFiles/manage-warehouse.ejs' });
};

// Quản lý đơn hàng
exports.manageOrder = (req, res) => {
  res.render('layout.ejs', { body: 'docFiles/manage-order.ejs' });
};

// Quản lý roles
exports.roles = (req, res) => {
  res.render('layout.ejs', { body: 'docFiles/roles/roles.ejs' });
};
exports.manageAccount = (req, res) => {
  res.render('layout.ejs', { body: 'docFiles/roles/manage-account.ejs' });
};
exports.rolePermissions = (req, res) => {
  res.render('layout.ejs', { body: 'docFiles/roles/role-permissions.ejs' });
};
exports.rolesGroup = (req, res) => {
  res.render('layout.ejs', { body: 'docFiles/roles/role-group.ejs' });
};

// Quản lý lịch làm việc
exports.workSchedule = (req, res) => {
  res.render('layout.ejs', { body: 'docFiles/work-schedule.ejs' });
};