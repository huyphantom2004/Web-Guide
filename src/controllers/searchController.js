// Danh sách từ khóa gợi ý với URL tương ứng
const suggestionsList = [
  { keyword: 'HTML', url: '/html' },
  { keyword: 'CSS', url: '/css' },
  { keyword: 'JS', url: '/js' },
  { keyword: 'React', url: '/search/react' },
  { keyword: 'Vue.js', url: '/search/vuejs' }
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
