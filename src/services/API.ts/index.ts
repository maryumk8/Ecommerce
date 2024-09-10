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
