const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = 8000;

// Import route
const indexRoute = require('./src/routes/index');

// Cấu hình middleware
app.use(morgan('dev')); // Log request

// Cấu hình Express để phục vụ các tệp tĩnh từ thư mục "public"
app.use(express.static(path.join(__dirname, 'public')));

// Cấu hình view engine (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Sử dụng routes
app.use('/', indexRoute);

// Khởi động server
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
