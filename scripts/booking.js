/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35;
let numberDays = 0;
let monday = document.getElementById('monday');
let tuesday = document.getElementById('tuesday');
let wednesday = document.getElementById('wednesday');
let thursday = document.getElementById('thursday');
let friday = document.getElementById('friday');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function handleClick() {
    this.classList.toggle("clicked")
    if (this.classList.contains('clicked')) {
        numberDays++;
    
    } else {
    numberDays--;
}
calculate()
}
monday.addEventListener('click', handleClick);
tuesday.addEventListener('click', handleClick);
wednesday.addEventListener('click', handleClick);
thursday.addEventListener('click', handleClick);
friday.addEventListener('click', handleClick);




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clearButton = document.getElementById("clear-button")

function clear() {
    [monday, tuesday, wednesday, thursday, friday].forEach(day => {
        day.classList.remove('clicked');

});


numberDays = 0;
calculate();
}

clearButton.addEventListener('click', clear);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
let halfButton = document.getElementById("half")

function halfDay() {
    if (!this.classList.contains("clicked")) {
        this.classList.add("clicked");
        fullButton.classList.remove("clicked");
        dailyRate = 20;
        calculate();
    }
}


halfButton.addEventListener('click', halfDay);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

let fullButton = document.getElementById("full")

function fullDay() {
    if (!this.classList.contains("clicked")) {
        this.classList.add("clicked");
        halfButton.classList.remove("clicked");
        dailyRate = 35;
        calculate();
    }
}


fullButton.addEventListener('click', fullDay);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

let costLabel = document.getElementById("calculated-cost")
function calculate() {
    let totalCost = numberDays * dailyRate;
    costLabel.textContent = totalCost;
}
