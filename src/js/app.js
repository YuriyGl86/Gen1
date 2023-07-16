
function canIterate(obj) {
  if (obj == null || !obj[Symbol.iterator]) {
    return false;
  }
  return true;
}

console.log(canIterate(new Map()));
console.log(canIterate(new Set()));
console.log(canIterate(null));
console.log(canIterate(10));
console.log(canIterate('Netology'));
