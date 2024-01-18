let a = "";  // переменная в которую будем заносить первое число
let b = ""; // переменная в которую заносим 2 число
let sign = ""; // переменная для знака операции
let finish = false;  //  


const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];//массив для проверки,  нажато для цифр
const action = ["-", "+", "X", "/"]; //массив для проверки нажатого знака

const out = document.querySelector(".calc-screen p"); // переменная со значением содержимого параграфа , найденного в документе внутри элемента с классом calc-screen


document.addEventListener("keydown", function(event) {  //отслеживаем нажатие клавиши на клавиатуре, при нажатии:
  const key = event.key;              //заносим значение нажатой клавиши в переменную
  const targetDiv = document.getElementById(key); // ищем в документе элемент с id = значение нажатой клавиши
  if (targetDiv) {               //если такой элемент в документе есть, 
targetDiv.click();             // клик по нему.
  }
});

function clearAll () {     //создаем функцию очистки для кнопки ас
  a = "";                  
  b = "";
  sign = "";
  finish = false;
  out.textContent = 0
}

document.querySelector(".ac").onclick = clearAll; //нажатие на кнопку ac вызывает функцию.

document.querySelector(".buttons").onclick = (event) => {        //если кликнуть на блок кнопок ,
  if(!event.target.classList.contains("btn")) return;           //если не кликнуть по элементу btn, ничего не произойдет

  if(event.target.classList.contains("ac")) return;       //если нажата ас, ничего не делать

  out.textContent = "";                 //очистка экрана, пустая строка.      

const key = event.target.textContent;         //поместили в переменную текст элемента кнопки, на которую нажали.

if (digit.includes(key)) {  // если нажата цифра
  if (b ==="" && sign === "" ) {   //если переменная б и знака пустые
  a += key;                      // заносим значение нажатой цифры в переменную а. 
  out.textContent = a;            // выводим а на экран
}
else if (a!=="" && b!== "" && finish) { //если а заполнена и б заполнена и нажат финиш
  b = key;                         //наполняем б
  finish = false;                  
  out.textContent = b;
}
else {                            //если переменная а и знак заполнены, 
  b += key;                          //наполняем переменную б
  out.textContent = b;                  // выводим на экран
}
console.log(a, b, sign);
return;                              //выход
}

if (action.includes(key)) {           //если нажат знак
  sign = key;
  out.textContent = sign;
  console.log(a, b, sign);
  return;
}

if (key === "=") {                //если нажато равно
  if (b=== "") b = a;             //чтобы при нажатии + = прибавлял одинаковое число к сумме
  switch (sign) {
    case "+":
      a = (+a) + (+b);
      break;
    case "-":
      a = a - b;
      break;
    case "X":
      a = a * b;
      break;
    case "/":
     if (b === "0") {
      out.textContent = "Ошибка";
      a = "";
      b = "";
      sign = "";
      return;
     }
      a = a/b;
      break;
    }
    finish = true;
    out.textContent = a;                           //вывести результат и сразу помещенный в а
    console.table(a, b, sign);
  }
}

