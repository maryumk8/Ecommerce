export interface Product {
  availabilityStatus?: string; // e.g., "Low Stock"
  brand?: string; // e.g., "Essence"
  category: string; // e.g., "beauty"
  description?: string; // Detailed description of the product
  dimensions?: Dimensions; // Dimensions of the product
  discountPercentage?: number; // Discount percentage on the product
  id?: number; // Unique identifier for the product
  images?: string[]; // Array of image URLs
  meta?: MetaData; // Metadata related to the product
  minimumOrderQuantity?: number; // Minimum order quantity
  price?: number; // Price of the product
  rating?: number; // Average rating of the product
  returnPolicy?: string; // Return policy description
  reviews?: Review[]; // Array of reviews for the product
  shippingInformation?: string; // Shipping information details
  sku?: string; // Stock Keeping Unit identifier
  stock?: number; // Available stock count
  tags?: string[]; // Array of tags associated with the product
  thumbnail?: string; // Thumbnail image URL
  title?: string; // Title of the product
  warrantyInformation?: string; // Warranty information
  weight?: number; // Weight of the product in some unit
}

interface Dimensions {
  width: number; // Width of the product
  height: number; // Height of the product
  depth: number; // Depth of the product
}

interface MetaData {
  createdAt: string; // Date of creation
  updatedAt: string; // Date of the last update
  barcode: string; // Barcode of the product
  qrCode: string; // QR code URL
}

interface Review {
  // Define properties as per the specific structure of a review
  reviewerName: string; // Name of the reviewer
  rating: number; // Rating given by the reviewer
  comment: string; // Review comment
}
