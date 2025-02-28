export interface FilterParams {
    title: string;
    minPrice?: number;  // Chuyển từ `number | null` → `number | undefined`
    maxPrice?: number;  // Chuyển từ `number | null` → `number | undefined`
    publisher: string;
    page?: number; // Thêm page vào đây
  }
  