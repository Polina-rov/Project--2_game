const gameStart1 = document.getElementById('gameStart1');
const gameStart2 = document.getElementById('gameStart2');

gameStart1.addEventListener('click', function gameOne() {
  let numberMonth = Number(prompt('Введите номер месяца'));
  function seasons(num) {
    if (num <= 0 || num >= 13) {
      alert('Вы ввели неверное число');
    } else if (num === 1 || num === 2 || num === 12) {
      alert('Зима');
    } else if (num >= 3 && num <= 5) {
      alert('Весна');
    } else if (num >= 6 && num <= 8) {
      alert('Лето');
    } else {
      alert('Осень');
    }
  }
  seasons(numberMonth);
});

gameStart2.addEventListener('click', function gameTwo() {
  let arr = [
    'Яблоко',
    'Груша',
    'Дыня',
    'Виноград',
    'Персик',
    'Апельсин',
    'Мандарин',
  ];
  arr = arr.sort(() => Math.random() - 0.5);
  alert(arr);

  let firstElem = prompt('Первый элемент массива');
  let lastElem = prompt('Последний элемент массива');

  if (firstElem === arr[0] && lastElem === arr[arr.length - 1]) {
    alert('Поздравляю');
  } else if (firstElem === arr[0] || lastElem === arr[arr.length - 1]) {
    alert('Вы были близки к победе');
  } else {
    alert('Не угадал');
  }
});
