const products = [
  {
    id: "1",
    name: "商品1"
  },
  {
    id: "2",
    name: "商品2"
  },
  {
    id: "3",
    name: "商品3"
  }
];

export const getProducts = () => {
  return new Promise((resolve, reject) => setTimeout(() => resolve(products), 1000))
};
