import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

// Dữ liệu mẫu các món ăn từ đề bài
const dishes = [
  {
    id: 0,
    name: "Uthappizza",
    image: "images/uthappizza.png",
    category: "mains",
    label: "Hot",
    price: "4.99",
    featured: true,
    description: "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."
  },
  {
    id: 1,
    name: "Zucchipakoda",
    image: "images/zucchipakoda.png",
    category: "appetizer",
    label: "",
    price: "1.99",
    featured: false,
    description: "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"
  },
  {
    id: 2,
    name: "Vadonut",
    image: "images/vadonut.png",
    category: "appetizer",
    label: "New",
    price: "1.99",
    featured: false,
    description: "A quintessential ConFusion experience, is it a vada or is it a donut?"
  },
  {
    id: 3,
    name: "ElaiCheese Cake",
    image: "images/elaicheesecake.png",
    category: "dessert",
    label: "",
    price: "2.99",
    featured: false,
    description: "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"
  }
];

// 1. Component hiển thị danh sách các món ăn (Menu)
function DishList() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Menu Dishes</h2>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id} style={{ margin: '10px 0' }}>
            {/* Tạo Link trỏ động tới đường dẫn /dishes/:dishId */}
            <Link to={`/dishes/${dish.id}`} style={{ fontSize: '18px', fontWeight: 'bold' }}>
              {dish.name}
            </Link> - ${dish.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

// 2. Component hiển thị chi tiết món ăn dựa vào ID trên URL
function DishDetail() {
  let { dishId } = useParams();
  // Tìm món ăn khớp với id từ URL (chuyển dishId sang kiểu số)
  const dish = dishes.find((d) => d.id === parseInt(dishId));

  if (!dish) {
    return <h2>Không tìm thấy món ăn này!</h2>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <h2>{dish.name}</h2>
      <p><strong>Loại:</strong> {dish.category} {dish.label && `(${dish.label})`}</p>
      <p><strong>Giá:</strong> ${dish.price}</p>
      <p><strong>Mô tả:</strong> {dish.description}</p>
      <br />
      <Link to="/">⬅ Quay lại danh sách</Link>
    </div>
  );
}

// 3. Component tổng hợp Router cho Exercise 21
export default function Exercise21() {
  return (
    <Router>
      <Routes>
        {/* Route hiển thị danh sách */}
        <Route path="/" element={<DishList />} />
        {/* Route động nhận tham số dishId */}
        <Route path="/dishes/:dishId" element={<DishDetail />} />
      </Routes>
    </Router>
  );
}