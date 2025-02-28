import { useState, useEffect } from "react";
import axios from "axios";
// import { API_URL } from "@env"; // Đảm bảo bạn đã cấu hình biến môi trường này
const API_URL = "https://26.238.80.228/books"; // Thay thế bằng URL thực tế của bạn
interface Book {
  id: number;
  title: string;
  price: number;
  publisher: { name: string };
  age: number;
  avgRating: number;
  totalSold: number;
  Images: { url: string }[];
}

interface FilterParams {
  title?: string;
  minPrice?: number;
  maxPrice?: number;
  publisher?: string;
  minAge?: number;
  maxAge?: number;
  sortByPrice?: "ASC" | "DESC";
  page?: number;
  limit?: number;
}

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({ currentPage: 1, totalPages: 1 });

  const fetchBooks = async (filters: FilterParams = {}) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get(API_URL, { params: filters });
      setBooks(response.data.data);
      setPagination({ currentPage: response.data.currentPage, totalPages: response.data.totalPages });
    } catch (err) {
      setError("Không thể tải danh sách sách.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks(); // Gọi API khi component mount
  }, []);

  return { books, loading, error, pagination, fetchBooks };
};
