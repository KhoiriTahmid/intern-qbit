export type Article = {
  tittle: string;
  writer: string;
  published: string; // format: YYYY-MM-DD
  information: {
    category: string;
    type: "Tips" | "Review" | "Tutorial" | "Opinion" | string;
    readTime: number; // dalam menit
  };
};

export const articles: Article[] = [
  {
    tittle: "7 Tips Alami Merawat Kulit Berjerawat",
    writer: "Faiz Halwi",
    published: "2024-12-01",
    information: {
      category: "Skincare",
      type: "Tips",
      readTime: 4,
    },
  },
  {
    tittle: "Review: Sabun Herbal Black Seed dan Madu",
    writer: "Aisyah Putri",
    published: "2024-11-10",
    information: {
      category: "Product Review",
      type: "Review",
      readTime: 5,
    },
  },
  {
    tittle: "Tutorial: Cara Membuat Sabun Castile",
    writer: "Rafi Ahmad",
    published: "2024-10-05",
    information: {
      category: "DIY",
      type: "Tutorial",
      readTime: 7,
    },
  },
  {
    tittle: "Pentingnya Produk Sesuai Jenis Kulit",
    writer: "Nadya Ramadhani",
    published: "2024-09-22",
    information: {
      category: "Edukasi",
      type: "Opinion",
      readTime: 3,
    },
  },
  {
    tittle: "Manfaat Minyak Zaitun untuk Kulit dan Rambut",
    writer: "Aminah Nur",
    published: "2024-08-14",
    information: {
      category: "Health",
      type: "Tips",
      readTime: 4,
    },
  },
];
