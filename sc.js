let turn = 1 //Создали переменную которая считает количество ходов 
let symbol = "X" 
document.querySelector("span").innerHTML = symbol 
let area = [
	["*","*","*"],
	["*","*","*"],
	["*","*","*"]
]


document.querySelector("button").onclick = function() {
	let row = document.querySelector(".row").value - 1; 
	let column = document.querySelector(".column").value - 1;
	area [row][column] = symbol


	let rows = document.querySelectorAll("tr");
	let cells = rows[row].querySelectorAll("td");
	let target = cells[column];
	target.innerHTML = symbol//Ставим X или 0 внутрь тега td в ту ячейку которую выбрали 
	if (symbol == "X") {
		target.style.backgroundColor = "red"
		target.style.color = "white"
	}
	else if (symbol == "0") {
		target.style.backgroundColor = "black"
		target.style.color = "white"
	}
	turn = 1 + turn //Считаем ходы, прибавляем ход 
	if (turn%2 == 0) { //Если остаток от деления номера хода на 2 равен 0 то тогда...
		symbol = "0" 
	} 
	else{ //иначе, этот код срабатывает если условие в if неправда и остаток не равен нулю
		symbol = "X"

	}
document.querySelector("span").innerHTML = symbol 
if (check() === "X") {
	alert("X Победили")
}

if (check() === "0") {
	alert("0 Победили")
}

}



function check(){
if (area[0][0] == "X" && area[0][1] == "X" && area[0][2] == "X") {

return "X";

}

if (area[1][0] == "X" && area[1][1] == "X" && area[1][2] == "X") {

return "X";

}

if (area[2][0] == "X" && area[2][1] == "X" && area[2][2] == "X") {

return "X";

}

if (area[0][0] == "X" && area[1][0] == "X" && area[2][0] == "X") {

return "X";

}

if (area[0][1] == "X" && area[1][1] == "X" && area[2][1] == "X") {

return "X";

}

if (area[0][2] == "X" && area[1][2] == "X" && area[2][2] == "X") {

return "X";

}

if (area[0][0] == "X" && area[1][1] == "X" && area[2][2] == "X") {

return "X";

}

if (area[0][2] == "X" && area[1][1] == "X" && area[2][0] == "X") {

return "X";

}

if (area[0][0] == "0" && area[0][1] == "0" && area[0][2] == "0") {

return "0";

}

if (area[1][0] == "0" && area[1][1] == "0" && area[1][2] == "0") {

return "0";

}

if (area[2][0] == "0" && area[2][1] == "0" && area[2][2] == "0") {

return "0";

}

if (area[0][0] == "0" && area[1][0] == "0" && area[2][0] == "0") {

return "0";

}

if (area[0][1] == "0" && area[1][1] == "0" && area[2][1] == "0") {

return "0";

}

if (area[0][2] == "0" && area[1][2] == "0" && area[2][2] == "0") {

return "0";

}

if (area[0][0] == "0" && area[1][1] == "0" && area[2][2] == "0") {

return "0";

}

if (area[0][2] == "0" && area[1][1] == "0" && area[2][0] == "0") {

return "0";

}

return false;









}

