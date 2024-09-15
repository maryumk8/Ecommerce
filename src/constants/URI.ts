const baseURL = 'https://dummyjson.com';

export const URI = {
  all_products: (skip?: number, limit?: number) =>
    `${baseURL}/products?${skip}?${limit}`,
  product_by_id: (id: string) => `${baseURL}/products?${id}`,
  search: (product: string) => `${baseURL}/products?${product}`,
  categories: `${baseURL}/products/categories`,
  product_by_category: (cat: string) => `${baseURL}/products/category/${cat}`,
};
