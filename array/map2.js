const phone = [
  {
    name: 'iphone',
    price: 10000,
    count: 5
  },
  {
    name: 'huawei',
    price: 8888,
    count: 8
  },
  {
    name: 'xiaomi',
    price: '3999',
    count: 6
  }
]

// const totalProductsValue = phone.map(item => item.price * item.count);

const totalProductsValue = phone.map(item => ({
  name: item.name,
  totalValue: item.price * item.count
}));

console.log(totalProductsValue)