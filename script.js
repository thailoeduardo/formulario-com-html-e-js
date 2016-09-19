function updateorder(){
	//constants rate e price Donut
	const rate = 0.09,
		  donutPrice = 0.50;
	
	//search input number donuts
	var numberDonuts = parseDonuts(document.getElementById('amountDonuts').value);
	
	if (isNaN(numberDonuts)) 
		numberDonuts = 0;

	//value calculations
	var subTotal = numberDonuts * donutPrice,
		rat = subTotal * rate,
		total = subTotal + rat;
	
	document.getElementById('subtotal').value = 'R$ ' + subTotal.toFixed(2);
	document.getElementById('rate').value = 'R$ ' + rate.toFixed(2);
	document.getElementById('total').value = 'R$ ' + total.toFixed(2);
};

//convert dozen (dúzia) em twelve
function parseDonuts(donutString){
    numDonuts = parseInt(donutString);
    if (donutString.indexOf('dozen') !== -1){
        numDonuts *= 12;
    };

    return numDonuts;
};

//checks the input is filled
function placeOrder(){
	if ((document.getElementById('nameClient').value == '') || 
		(document.getElementById('amountDonuts').value == '') ||
		(document.getElementById('minutes').value == '') ||
		isNaN(document.getElementById('minutes').value)) {
		
		alert('Complete the fields');
	} else{
		//send to the server.
		alert("Request sent");	
	};
};

