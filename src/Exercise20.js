import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

// Tạo component riêng để lấy tham số URL an toàn bằng useParams
function UserProfile() {
  let { userId } = useParams();
  return <h1>User Profile: {userId}</h1>;
}

export const routes = [
  {
    path: '/',
    component: () => <h1>Home Page</h1>,
    exact: true,
  },
  {
    path: '/products',
    component: () => <h1>Products Page</h1>,
  },
  {
    path: '/about',
    component: () => <h1>About Page</h1>,
  },
  {
    path: '/contact',
    component: () => <h1>Contact Page</h1>,
  },
  {
    path: '/users/:userId?',
    component: UserProfile, // Trỏ đến component vừa tạo ở trên
  },
];

// Các phần còn giữ nguyên...
export function NavigationMenu() {
  return (
    <nav style={{ marginBottom: '20px' }}>
      <Link to="/">Home</Link> |{' '}
      <Link to="/products">Products</Link> |{' '}
      <Link to="/about">About</Link> |{' '}
      <Link to="/contact">Contact</Link> |{' '}
      <Link to="/users/123">User Profile</Link>
    </nav>
  );
}

export default function AppRouter() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <NavigationMenu />
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}