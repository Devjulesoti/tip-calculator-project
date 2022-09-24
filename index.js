
    
    let bill = document.getElementById('bill');
    let People = document.querySelector('.number');
    let tipAmount = document.getElementById('tip-amount');
    let totalPrice = document.getElementById('total-price');
    

    function calculate(){
        let result;
       let buttons = document.querySelectorAll('button');

       if (buttons[0].textContent === '5%') {
        result = Number(((5/100)*bill.value)* 1);
        tipAmount.textContent = `$${result}`;
       }

       else if (buttons[1].textContent === '10%'){
        result = Number(((10/100)*bill.value)* 1);
        tipAmount.textContent = `$${result}`;
       }

       else if (buttons[2].textContent === '15%'){
        result = Number(((15/100)*bill.value)* 1);
        tipAmount.textContent = `$${result}`;
       }

       else if (buttons[3].textContent === '20%'){
        result = Number(((20/100)*bill.value)* 1);
        tipAmount.textContent = `$${result}`;
       }

       else if (buttons[4].textContent === '25%'){
        result = Number(((25/100)*bill.value)* 1);
        tipAmount.textContent = `$${result}`;
       }
       
       else if (buttons[5].textContent === '50%'){
        result = Number(((50/100)*bill.value)* 1);
        tipAmount.textContent = `$${result}`;
       }

       else if (button[6].textContent === 'Custom') {
        let percentage = alert('Enter percentage');
        alert(percentage);
        result = Number(((percentage.value/100)*bill.value)* 1);
        tipAmount.textContent = `$${result}`;
       }

       else{
        tipAmount.textContent = " ";
       }

    }
    

