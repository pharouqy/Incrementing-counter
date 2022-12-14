////////// Method With setInterval & clearInterval //////////

/*const counterName = document.querySelectorAll(".counter");
let i = 0;
let counter0 = setInterval(incremente0, 50);
let counter1 = setInterval(incremente1,1);
let counter2 = setInterval(incremente2, 5);

function incremente0() {
  let count0 = counterName[0].innerHTML++;
  if (count0 === 499) {
    clearInterval(counter0);
  }
}
function incremente1() {
  let count1 = counterName[1].innerHTML++;
  if (count1 === 3899) {
    clearInterval(counter1);
  }
}
function incremente2() {
  let count2 = counterName[2].innerHTML++;
  if (count2 === 789) {
    clearInterval(counter2);
  }
}*/

////////// Method With setTimeout & Recursion //////////

const counterName = document.querySelectorAll(".counter");

incremente();

function incremente() {
  counterName.forEach((element, index, arr) => {
    let count = element.innerHTML++;
    if (count === 5000 && index === 0) {
      element.innerHTML = "5000";
    } else if (count === 2500 && index === 1) {
      element.innerHTML = "2500";
    } else if (count === 3500 && index === 2) {
      element.innerHTML = "3500";
    }
  });
  setTimeout(incremente, 0);
}
