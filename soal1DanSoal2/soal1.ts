type IFruit = {
  fruitId: number;
  fruitName: string;
  fruitType: "IMPORT" | "LOCAL" | "INTERNATIONAL" | "NATIONAL";
  stock: number;
};

const fruits: IFruit[] = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
  {
    fruitId: 5,
    fruitName: "Stroberry",
    fruitType: "INTERNATIONAL",
    stock: 150,
  },
  {
    fruitId: 99,
    fruitName: "Pisang",
    fruitType: "NATIONAL",
    stock: 150,
  },
];

// jawaban
function batas(nomor: number) {
  console.log("======================================");
  console.log(`nomor ${nomor}`);
  console.log("======================================");
}

// NO. 1
batas(1);
const namaBuah = new Set(fruits.map((el) => el.fruitName.toLocaleLowerCase()));
console.log(`Buah yang dimiliki andi: ${[...namaBuah].join(", ")}`);

// NO. 2
batas(2);
let fruitBasedOnTypes = new Map<string, IFruit[]>(
  fruits.map((el) => [el.fruitType, []])
);

fruits.forEach((el) => fruitBasedOnTypes.get(el.fruitType)!.push(el));
console.log(`jumlah wadah: ${fruitBasedOnTypes.size}`);
for (const key of fruitBasedOnTypes.keys()) {
  console.info(
    `buah pada wadah ${key}: ${fruitBasedOnTypes
      .get(key)!
      .map((el) => el.fruitName)
      .join(", ")}`
  );
}

//NO. 3
batas(3);
for (const key of fruitBasedOnTypes.keys()) {
  let totalStock = 0;
  fruitBasedOnTypes.get(key)!.forEach((fruit) => {
    totalStock += fruit.stock;
  });
  console.log(`total stock di wadah ${key}: ${totalStock} buah`);
}

//NO. 4
/*
- fruitId seharusnya uniqe per item
- fruitName seharusnya disamakan casenya, misal lowercase semua
*/

// Soal yg belum terjawab saat technical review
batas(5);
const wrongTypeFruits = [
  ...fruitBasedOnTypes.get("NATIONAL"),
  ...fruitBasedOnTypes.get("INTERNATIONAL"),
].map((el) => {
  if (
    fruits.map((el2) => {
      if (el2.fruitId == el.fruitId) {
        return el;
      }
    }).length > 1
  ) {
    namaBuah.delete(el.fruitName.toLowerCase());
  }
});

console.log(`Buah yang dimiliki andi: ${[...namaBuah].join(", ")}`);
