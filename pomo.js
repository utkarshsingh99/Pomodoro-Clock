
let second = 0, minute = 0, hour = 0, t, b, breakFlag = 0;

let limitOfTask = 25, limitOfBreak = 5;
var h3 = document.querySelector('#h3');

function clock(){
	second++;
	if(second==60){
		second = 0;
		minute++;
		if(minute==60){
			minute = 0;
			hour++;
		}
	}

	h3.textContent = hour + " : " + minute + " : " + second;

	if(minute==limitOfTask&&!breakFlag){
		console.log("Task Limit");
		pause();
		TaskBreak();
		breakFlag = 1;
		second = 0; hour = 0; minute = 0;
		breakInterval();
	}
	if(minute==limitOfBreak&&breakFlag){
		console.log("Break Limit");
		breakPause();
		TaskBreak();
		breakFlag = 0;
		second = 0; hour = 0; minute = 0;
		interval();
	}
}

function breakInterval(){
	b = setInterval(clock,1000);
}

function breakPause(){
	clearInterval(b);
}

function interval(){
	t = setInterval(clock,1000);
}

function pause(){
	clearInterval(t);
}

var clearButton = document.querySelector('#clear');
clearButton.addEventListener("click",clear);

function clear(){
	clearInterval(t);
	second = 0;
	minute = 0;
	hour = 0;
	h3.textContent = hour + " : " + minute + " : " + second;
}

function timeCustomisation(){
	var taskAdd = document.querySelector('#addTime');
	taskAdd.addEventListener("click",function(){
		limitOfTask++;
		statsDisplay();
	});

	var taskminus = document.querySelector('#minusTime');
	taskminus.addEventListener("click",function(){
		limitOfTask--;
		statsDisplay();
	});

	var breakAdd = document.querySelector('#addBreak');
	breakAdd.addEventListener("click",function(){
		limitOfBreak++;
		statsDisplay();
	});

	var breakMinus = document.querySelector('#minusBreak');
	breakMinus.addEventListener("click",function(){
		limitOfBreak--;
		statsDisplay();
	});
}

function statsDisplay(){
	var stats = document.querySelector("#stats");
	stats.innerHTML = "Task Time: " + limitOfTask + "<br>Break Time: " + limitOfBreak;
}

function TaskBreak(){
	var TaskBreak = document.querySelector('#TaskBreak');
	if(breakFlag){
		TaskBreak.textContent = "Relax, it's your break!"
	}
	else {
		TaskBreak.textContent = "Ongoing Task";
	}
}

statsDisplay();
timeCustomisation();