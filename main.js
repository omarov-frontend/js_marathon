// [HomeWork 2] - Задача #1:
function getRow(firstRow, secondRow, value) {
    if (value.length > 1) return 'Вы ввели больше одного символа!';
  
    let countFirstValue = 0;
    let countSecondValue = 0;

    for (let i = 0; i < firstRow.length; i++) {
      if (firstRow.charAt(i) !== value) continue;
      countFirstValue++;
    }
  
    for (let i = 0; i < secondRow.length; i++) {
      if (secondRow.charAt(i) !== value) continue;
      countSecondValue++;
    }

    return countFirstValue >= countSecondValue ? firstRow : secondRow;
}
const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';
const value = prompt('Введите букву:', 'а');
alert( getRow(firstRow, secondRow, value) );


// [HomeWork 2] - Задача #2:
function formattedPhone(phoneValue) {
    if (!phoneValue) return 'Вы не ввели номер телефона!';
      
    const clearSpaces = /[^\d]/g;
    const phonePattern = /(\d{3})(\d{3})(\d{2})(\d{2})/;
  
    switch ( phoneValue.charAt(0) ) {
      case '+':
        return phoneValue.slice(2)
          .replace(clearSpaces, '')
          .replace(phonePattern, '+7 ($1) $2-$3-$4');
      case '7':
        return phoneValue.slice(1)
          .replace(clearSpaces, '')
          .replace(phonePattern, '+7 ($1) $2-$3-$4');
      case '8':
        return phoneValue.slice(1)
          .replace(clearSpaces, '')
          .replace(phonePattern, '+7 ($1) $2-$3-$4');
      case '9':
        return phoneValue
          .replace(clearSpaces, '')
          .replace(phonePattern, '+7 ($1) $2-$3-$4');
      default:
        return 'Введен неверный формат телефона!';
    }
}
const phoneValue = prompt('Введите номер телефона:', '');
alert(formattedPhone(phoneValue));