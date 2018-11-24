function myFirstApp(name, age) {
	alert("Привет, меня зовут " + name + " и это моя первая программа!");

	function showSkills() {
		let skills = ["Html", "css", "js", "bootstrap"];

		for (let i = 0; i<skills.length; i++) {
			document.write("Я владею " + skills[i] + "<br>");
		};
	};

	showSkills();

	function checkAge(age) {
		age = prompt("Сколько тебе лет?");
		if (age > 18) {
			alert("Пивка не хочешь?");
		} else {
			alert("аташол");
		};
	};

	checkAge();

	function calcPow(num) {
		i = num * num;
		alert(i);
	};

	calcPow(4);
}

myFirstApp("Roman");