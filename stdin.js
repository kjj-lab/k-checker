function randomNumber(small, large) {
  if (small == large) return small;
  var num;
  do {
    num = small + (large - small) * Math.random();
  } while (num < small && num >= large);
  return num;
}

var stdInputs = [
  randomNumber(-100, 100).toFixed(2),
  randomNumber(-100, 100).toFixed(2),
  randomNumber(-100, 100).toFixed(2),
  randomNumber(-100, 100).toFixed(2),
  randomNumber(-100, 100).toFixed(2),
  randomNumber(-100, 100).toFixed(2),
];

var numPrompts = 0;
window.prompt = function() {
  numPrompts += 1;
  if (numPrompts - 1 < stdInputs.length) {
    document.write('［入力］');
    document.write('<span class="stdin">' + stdInputs[numPrompts - 1] + '</span>');
    document.write('<br>');
    return stdInputs[numPrompts - 1];
  }
  else {
    return null;
  }
};
