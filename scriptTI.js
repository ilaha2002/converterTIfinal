$('input#inPut').on('input', function() {
    $(this).val($(this).val().replace(/\,/g, '.'));
    $(this).val($(this).val().replace(/(?=(\d+\.\d{3})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));
    $(this).val($(this).val().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '));
  })
  let block1 = document.querySelectorAll('.inputShow');
  let block2 = document.querySelectorAll('.showInput');
  let buttons = document.querySelectorAll('.converT');
  let leftInput = document.querySelector('#inPut');
  let rightInput = document.querySelector('.rightInput');
  let left = 'USD';
  let right = 'AZN';
  let valute;
  block1.forEach((item, k) =>{
    item.addEventListener('click',(event) => {
    item.style.backgroundColor = '#833AE0';
    for(let i = 0 ; i < 4; i++){
      if(i != k){
        block1[i].style.backgroundColor = 'white';
      }
    }
    left = event.innerHTML;
    calc(left, right)
  })})
  block2.forEach((item, k) =>{
    item.addEventListener('click',(event) => {
    item.style.backgroundColor = '#833AE0';
    for(let i = 0 ; i < 4; i++){
      if(i != k){
        block2[i].style.backgroundColor = 'white';
      }
    }
    right = item.innerHTML;
    calc(left, right);
  })})
  function calc(left, right){
  fetch(`https://api.exchangerate.host/latest?base=${left}&symbols=${right}`)
  .then(res => res.json())
  .then((data) => {
    valute = data.rates[right];
    console.log(valute)
  })
  rightInput.addEventListener('input', (event)=>{
    leftInput.value = rightInput.value*valute
  })
leftInput.value = rightInput.value*valute;
  }
  calc(left, right)