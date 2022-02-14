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
function verifyPin(){
    const pinInput = document.getElementById('typed-numbers').value;
    const displayPin = document.getAnimations('display-pin').value;
    const failMEssage = document.getElementById('notify-fail');
    const successMessage = document.getElementById('notify-success');
    if ( pinInput == displayPin){
       successMessage.style.display = 'block';
       
    }
    else{
        failMEssage.style.display = 'block';
    }
}

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        failError.style.display = 'block';
        successMessage.style.display = 'none';
    }
}