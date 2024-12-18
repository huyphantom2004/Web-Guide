// Danh sách từ khóa gợi ý với URL tương ứng
const suggestionsList = [
  { keyword: 'Giới thiệu', url: '/' },
  { keyword: 'Đăng nhập', url: '/sign-in' },
  { keyword: 'Đăng nhập bằng google', url: '/sign-in' },
  { keyword: 'Đăng nhập bằng gmail', url: '/sign-in' },
  { keyword: 'Đăng nhập bằng facebook', url: '/sign-in' },
  { keyword: 'Tạo tài khoản', url: '/sign-in' },
  { keyword: 'Quên tài khoản', url: '/sign-in' },
  { keyword: 'Đăng ký', url: '/sign-up' },
  { keyword: 'Quản lý sản phẩm', url: '/manage-product' },
  { keyword: 'Thêm sản phẩm', url: '/manage-product' },
  { keyword: 'Xóa sản phẩm', url: '/manage-product' },
  { keyword: 'Xem thông tin sản phẩm', url: '/manage-product' },
  { keyword: 'Chỉnh sửa sản phẩm', url: '/manage-product' },
  { keyword: 'Quản lý nhà cung cấp', url: '/supplier' },
  { keyword: 'Quản lý kho', url: '/manage-warehouse' }
];

// Trả về gợi ý tìm kiếm dưới dạng JSON
exports.getSuggestions = (req, res) => {
  const query = req.query.query || '';  // Lấy từ khóa tìm kiếm từ query string 'query'
  
  // Lọc danh sách từ khóa dựa trên truy vấn tìm kiếm
  const filteredSuggestions = suggestionsList.filter(item => 
    item.keyword.toLowerCase().includes(query.toLowerCase())
  );

  // Trả về danh sách gợi ý dưới dạng JSON
  res.json(filteredSuggestions);
};

// Render trang tìm kiếm với kết quả tìm kiếm
exports.renderSearchPage = (req, res) => {
  const query = req.query.query || '';  // Lấy từ khóa tìm kiếm từ query string 'query'
  
  // Lọc kết quả tìm kiếm từ danh sách (ví dụ: suggestionsList)
  const filteredResults = suggestionsList.filter(item => 
    item.keyword.toLowerCase().includes(query.toLowerCase())
  );
  
  // Render trang tìm kiếm với kết quả tìm kiếm
  res.render('layout', { 
    body: 'suggestion',  // Body sẽ chỉ định view con nào được render trong layout
    filteredResults: filteredResults,  // Truyền kết quả tìm kiếm vào view
    query: query  // Truyền query vào view để hiển thị trên giao diện
  });
};
