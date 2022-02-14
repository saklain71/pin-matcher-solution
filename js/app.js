function generatePin(){
   const number = Math.round(Math.random() * 10000);
   const pin = number + '';

   if(pin.length == 4){
       
       document.getElementById('display-pin').value = pin;
       return pin;
   }
   else{
    generatePin();
   }
}

document.getElementById('key-pad').addEventListener('click', function(event){
     const number = event.target.innerText;
     let calInput = document.getElementById('typed-numbers');
     if(isNaN(number)){
         if(number == 'C'){
             calInput.value = '';
         }
        }
        else{
            let previousNumber = calInput.value;
            const newNumber = previousNumber + number;
            calInput.value = newNumber;

        }
})
