import { URI } from '../../constants/URI';
import { axiosInstance } from '..';

export const handleAllProducts = async () => {
  try {
    const res = await axiosInstance.get(URI.all_products());
    const data = await res.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const handleAllCategories = async () => {
  try {
    const res = await axiosInstance.get(URI.categories);
    const data = await res.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const handleProductsByCategory = async ({ item }: { item: any }) => {
  try {
    const res = await axiosInstance.get(URI.product_by_category(item?.name));
    const data = await res.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const handleSearch = async (value?: any) => {
  try {
    const { data } = await axiosInstance.get(URI.search(value));

    return data;
  } catch (err) {
    console.error('Error during search:', err);
    throw err; // Ensure errors are propagated
  }
};
