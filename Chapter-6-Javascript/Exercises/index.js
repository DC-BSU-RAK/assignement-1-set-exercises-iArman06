/*adding the calculate function to calculate the total cost of the petrol*/
function calculateTotal(){
    const cost_of_petrol = parseFloat(document.getElementById('cost_of_petrol').value);   /*using the ID from index.html*/

    /*using variable Liters to calculate the liter purchased*/
    const liters = parseFloat(document.getElementById('liter_purchased').value);    /*using the ID from index.html*/
    /*using the parsefloat to convert the inputted number to float number*/

    /*now we will calculate the total cost of Petrol purchased per liter*/
    const total = cost_of_petrol * liters;

    /*to display the result using the html id total*/
    document.getElementById('total').textContent = `Total Cost is: ${total.toFixed(2)}`;
}

