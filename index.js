'use strict';

let sharmSeats = 15;
let hurgadaSeats = 25;
let tabaSeats = 6;

let isEmptySeats;


let userSeats = prompt('Введите число необходимых мест');

if (!(Number.isInteger(Number(userSeats))) || userSeats <= 0 || userSeats === null) {
  alert('Ошибка ввода');
} else {
  if (userSeats <= sharmSeats) {
    isEmptySeats = confirm('Есть нужное число мест в группе sharm. Вы согласны быть в этой группе?');
    if (isEmptySeats) {
      alert('Приятного путешествия в группе sharm');
    } else alert('Нам очень жаль, приходите еще!');
    } else {
      if (userSeats <= hurgadaSeats) {
        isEmptySeats = confirm('Есть нужное число мест в группе hurgada. Вы согласны быть в этой группе?');
        if (isEmptySeats) {
          alert('Приятного путешествия в группе hurgada');
        } else alert('Нам очень жаль, приходите еще!');
      } else {
        if (userSeats <= tabaSeats) {
          isEmptySeats = confirm('Есть нужное число мест в группе taba. Вы согласны быть в этой группе?');
          if (isEmptySeats) {
            alert('Приятного путешествия в группе taba');
          } else alert('Извините, столько мест нет ни в одной группе!');
      }
    }
}
}


