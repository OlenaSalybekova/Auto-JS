function checkOrder(available, ordered) {
  if (ordered > available) {
    return "Your order is too large, we don’t have enough goods.";
  } else if (ordered === 0) {
    return "Your order is empty";
  } else {
    return "Your order is accepted";
  }
}
console.log(checkOrder(75, 100));
console.log(checkOrder(60, 0));
console.log(checkOrder(99, 14));
