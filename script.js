const counterName = document.querySelectorAll(".counter");
let i = 0;
let counter0 = setInterval(incremente0, 50);
let counter1 = setInterval(incremente1, 25);
let counter2 = setInterval(incremente2, 5);

function incremente0() {
  let count0 = counterName[0].innerHTML++;
  if (count0 === 499) {
    clearInterval(counter0);
  }
}
function incremente1() {
  let count1 = counterName[1].innerHTML++;
  if (count1 === 3900) {
    clearInterval(counter1);
  }
}
function incremente2() {
  let count2 = counterName[2].innerHTML++;
  if (count2 === 789) {
    clearInterval(counter2);
  }
}
