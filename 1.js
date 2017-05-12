var but = document.querySelector('button');
but.onclick = function fun1() {
  var val1 = document.getElementById('val1').value;
  var val2 = document.getElementById('val2').value;
  var mal = document.getElementById('mul');
  if (mal.checked) {
    var x = val1 * val2
  } else {
    var x = val1 / val2
  }
  document.getElementById('out').innerHTML = x;
}
