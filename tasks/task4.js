// Задача: Напишіть функцію findMax, яка приймає масив чисел і повертає найбільше число в масиві.

function findMax(numbers) {
  if (numbers.length === 0)   return null; 
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  
  return max;
}

// Приклади використання:
console.log(findMax([3, 5, 7, 2, 8])); // Виведе: 8
console.log(findMax([10, 20, 5, 30])); // Виведе: 30

module.exports = findMax;