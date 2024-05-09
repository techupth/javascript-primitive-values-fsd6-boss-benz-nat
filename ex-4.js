// Exercise #4: E-commerce logic bug
// Close Quokka before do this!

let numberOfSoldProduct = 12000;
let numberOfProductInStock = undefined;

console.log((numberOfSoldProduct / numberOfProductInStock) * 100);

// ตอบ NaN เพราะ undefined ไม่สามารถคำนวนได้ เวลานำไปคำนวนก็จะไม่เกิดค่าใดๆ จึงตอบ NaN