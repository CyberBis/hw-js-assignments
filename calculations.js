function increaseBalance(x, y) {
  x += y;
  return x;
}

function decreaseBalance(x, y) {
  x -= y;
  return x;
  //добавляем данные, для того чтобы наша функция работала корректно
}

function divideBalanceByAccounts(x, y) {
  x /= y;
  return x;
  // убираем лишний код console.log
}

function getRestAfterDivision(x, y) {
  x %= y;
  return x;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2)); // убираем лишнюю информацию, т.к. у нас идет речь о 2-х операндах
console.log(getRestAfterDivision(7000, 3));
