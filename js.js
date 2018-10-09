let result = '',
	firstNumber = '',
	secondNumber = '',
	operator = '',
	finishNumber = 0;
document.addEventListener('click', function(e) {
	if (e.target.className == 'btn') {
		if (e.target.innerHTML == 'c') {
			document.getElementById('valCalc').value = 0;
			result = '';
			firstNumber = '';
			secondNumber = '';
			operator = '';
			finishNumber = 0;
		} else if (
			e.target.innerHTML == '/' ||
			e.target.innerHTML == '-' ||
			e.target.innerHTML == '*' ||
			e.target.innerHTML == '+'
		) {
			operator = e.target.innerHTML;
			firstNumber += +result;
			result = '';
		} else if (e.target.innerHTML == '=') {
			switch (operator) {
				case '+':
					finishNumber = +firstNumber + +secondNumber;
					break;
				case '-':
					finishNumber = +firstNumber - +secondNumber;
					break;
				case '/':
					finishNumber = +firstNumber / +secondNumber;
					break;
				case '*':
					finishNumber = +firstNumber * +secondNumber;
					break;
			}
			firstNumber = finishNumber;
			secondNumber = '';
			document.getElementById('valCalc').value = finishNumber;
		} else if (e.target.innerHTML && firstNumber == 0) {
			result += e.target.innerHTML;
			document.getElementById('valCalc').value = result;
		} else if (e.target.innerHTML && firstNumber !== 0) {
			secondNumber += e.target.innerHTML;
			document.getElementById('valCalc').value = secondNumber;
		}
	}
});
