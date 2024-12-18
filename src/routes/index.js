const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

// Các controller để render nội dung cho từng phần
const homeController = require('../controllers/homeController');
const docsController = require('../controllers/docsController');
const supportController = require('../controllers/supportController');
const searchController = require('../controllers/searchController');

// Route cho phần Tài liệu chi tiết
router.get('/sign-in', docsController.signIn);
router.get('/sign-up', docsController.signUp);
router.get('/manage-product', docsController.manageProduct);
router.get('/supplier', docsController.supplier);

router.get('/manage-warehouse', docsController.manageWarehouse);
router.get('/manage-order', docsController.manageOrder);

router.get('/roles/roles-group', docsController.rolesGroup);
router.get('/roles/role-permissions', docsController.rolePermissions);
router.get('/roles/manage-account', docsController.manageAccount);
router.get('/roles', docsController.roles);

router.get('/work-schedule', docsController.workSchedule);

// Controller hoặc Route xử lý tìm kiếm
router.get('/search', searchController.renderSearchPage);

// Route cho support
router.get('/support', homeController.support);
// Middleware để xử lý dữ liệu JSON
router.use(bodyParser.json());

// Định nghĩa route sử dụng controller
router.post('/send-email', supportController.support); 

// Route cho trang chủ
router.get('/', homeController.index);
router.use(homeController.handleNotFound);

module.exports = router;
