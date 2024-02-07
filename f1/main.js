const circle = document.getElementById(`circle`);
const upBtn = document.getElementById(`upBtn`);
const downBtn = document.getElementById(`downBtn`);

const rotateValue = circle.style.transform;
const rotateSum;

upBtn.onclick = function () {
  rotateSum = rotateValue + `rotate(-90deg)`;
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};

downBtn.onclick = function () {
  rotateSum = rotateValue + `rotate(90deg)`;
  circle.style.transform = rotateSum;
  rotateSum = rotateValue;
};
