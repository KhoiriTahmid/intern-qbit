export type Product = {
  name: string;
  price: number;
  rating: 1 | 2 | 3 | 4 | 5;
  information: {
    forUse: string;
    vol: number;
    type: "Bottle" | "Tube" | "Jar" | "Spray" | string;
    expiry: number;
  };
};

export const products: Product[] = [
  {
    name: "Acne Herbal Solution Castile Soap",
    price: 45000,
    rating: 5,
    information: {
      forUse: "Acne",
      vol: 300,
      type: "Bottle",
      expiry: 6,
    },
  },
  {
    name: "Sunnah Skin Clear Black Seed Cream",
    price: 55000,
    rating: 4,
    information: {
      forUse: "Oily Skin",
      vol: 100,
      type: "Jar",
      expiry: 4,
    },
  },
  {
    name: "Natural Glow Turmeric Face Wash",
    price: 40000,
    rating: 4,
    information: {
      forUse: "Dull Skin",
      vol: 200,
      type: "Tube",
      expiry: 5,
    },
  },
  {
    name: "Honey & Olive Facial Toner",
    price: 38000,
    rating: 5,
    information: {
      forUse: "All Skin Types",
      vol: 150,
      type: "Bottle",
      expiry: 8,
    },
  },
  {
    name: "Gentle Aloe Vera Gel Hydrator",
    price: 42000,
    rating: 4,
    information: {
      forUse: "Sensitive Skin",
      vol: 250,
      type: "Jar",
      expiry: 6,
    },
  },
  {
    name: "Black Seed Herbal Night Cream",
    price: 60000,
    rating: 5,
    information: {
      forUse: "Acne & Scar",
      vol: 50,
      type: "Jar",
      expiry: 3,
    },
  },
  {
    name: "Neem Purifying Cleansing Foam",
    price: 47000,
    rating: 4,
    information: {
      forUse: "Acne",
      vol: 180,
      type: "Tube",
      expiry: 5,
    },
  },
  {
    name: "Coconut & Honey Lip Balm Stick",
    price: 25000,
    rating: 4,
    information: {
      forUse: "Dry Lips",
      vol: 15,
      type: "Tube",
      expiry: 12,
    },
  },
  {
    name: "Rose Water Facial Mist Sunnah",
    price: 50000,
    rating: 5,
    information: {
      forUse: "Refresh & Hydrate",
      vol: 100,
      type: "Spray",
      expiry: 6,
    },
  },
  {
    name: "Zaitun Herbal Oil for Face & Hair",
    price: 70000,
    rating: 5,
    information: {
      forUse: "Nourishment",
      vol: 200,
      type: "Bottle",
      expiry: 10,
    },
  },
];
