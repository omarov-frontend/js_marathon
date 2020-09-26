// [HomeWork 2] - Задача #1:
const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';
const CHAR = 'а';
const value = prompt('Введите букву:', CHAR);

function getRow(firstRow, secondRow, CHAR, value) {  
    let countFirstValue = countedChar(firstRow, CHAR);
    let countSecondValue = countedChar(secondRow, CHAR);

    if (value.length > 1) return 'Вы ввели больше одного символа!';
    if (countFirstValue === countSecondValue) return `Здесь одинаковое кол-во букв - '${CHAR}'`;

    return countFirstValue > countSecondValue ? firstRow : secondRow;
}

function countedChar(row, char) {
    let counted = 0;
  
    for (let i = 0; i < row.length; i++) {
        if (row.charAt(i) === char) {
            counted++;
        }
    }
    return counted;
}
alert( getRow(firstRow, secondRow, CHAR, value) );


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