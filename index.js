
    
    let bill = document.getElementById('bill');
    let people = document.getElementById('people');
    let tipAmount = document.getElementById('tip-amount');
    let totalPrice = document.getElementById('total-price');
    let resetButton = document.getElementsByClassName('.reset-btn');
    let buttons = document.querySelectorAll('.percent-btn');
    let custom = document.getElementById('custom-btn');
    
    
    // let billInput = bill.value;

    // let peopleInput = people.value;

    buttons.forEach(function(value) {
        value.addEventListener('click', function(){
         let percent = parseInt(value.getAttribute('data-percent'))
         let calculate = (percent/100) * bill.value
         let total = calculate * people.value
         tipAmount.innerHTML = calculate
         totalPrice.innerHTML = total
        })
    })


    
    function resetCalc() {
        bill.value = '';
        bill.focus();
        people.value = '';
        tipAmount.textContent = '$0.00';
        totalPrice.textContent = '$0.00';
        custom.placeholder = "Custom";
        custom.value = 'Custom'
    }

    function customCalc() {
      let userInput = custom.value
      console.log(userInput)
        if (userInput > 0 && people.value > 0) {
            let calculate = (userInput / 100) * bill.value
            let total = calculate * people.value
            tipAmount.innerHTML = calculate
            totalPrice.innerHTML = total
        }

        else{
         alert('Enter number of people')   
        }
    }
    function whenClicked() {
        custom.value = ""
        custom.placeholder = "%"
    }
    
    custom.value = "Custom";
        custom.placeholder = "Custom";