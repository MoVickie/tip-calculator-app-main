// // add event listener to the bill
// let amount;
// // const amount= document
// document.getElementById('amount')
// .addEventListener('input', getAmount);
// // get amount
// function getAmount(event){
//     amount= parseFloat(event.target.value);
//     calculateTotal(amount,people);
//     console.log(typeof amount);
    
// }
// // add event listener to people input field
// let people=0;
// document.getElementById('people')
// .addEventListener("input", getNoOfPeople)
// function getNoOfPeople(event){
//     people= parseInt(event.target.value);
//     console.log(typeof people);
//     calculateTotal(amount,people);
// }
// // calculate the total person
// let totalPerPerson;
// function calculateTotal(bill, people){
//     if(people == 0 ){
//     totalPerPerson = 0
//     }else{

//         totalPerPerson= (bill /people).toFixed(2);
//         document.querySelector('h1.num').innerHTML=`$${totalPerPerson}`;
//         console.log(totalPerPerson);
//     }
// }
// // add event listener for the blur event
// document.getElementById('people').addEventListener('blur', function(event){
//     if(event.target.value =="" ||event.target.value=='0'){
//         event.target.parentElement.classList.add('invalid');
//     }else{
//         event.target.parentElement.classList.remove('invalid')
//     }
// });

const userData={
    amount:0,
    people:0,
    totalPerPerson:0,
    percentageTip:0,
    tipPerPerson:0,
    split: function(){
        if(this.people !=0){
            let totalTip=(this.percentageTip/100) * this.amount;
            console.log(totalTip)
            this.tipPerPerson= totalTip / this.people;
            this.totalPerPerson=(this.amount + totalTip) / this.people;
    } else{
        this.tipPerPerson=0;
        this.totalPerPerson=0;
    }
    },
    reset: function(){
        this.amount=0;
        this.people=0;
        this.percentageTip=0;
        this.totalPerPerson=0;
        this.tipPerPerson=0;
    }
};
document
.querySelector('.card__body')
.addEventListener('input', handleUserInput, {capture: true});


document
.querySelector('.card__body')
.addEventListener('beforeinput', validateInput);

// // add event listener to reset button
// document
// .querySelector('button.disabled')
// .addEventListener('click', resetApp);

//add event listener to tip button
document
.querySelector('.card__options') 
.addEventListener('mousedown', handleUserTip);
// add event listener for
//document.getElementById('people').addEventListener('blur', handleBlur);
document.querySelector('.card__reset').addEventListener('click', resetApp);

function handleBlur(event){
    console.log(event.target.value);
    if (!parseInt(event.target.value)){
        event.target.parentElement.classList.add('invalid');
    } else {
        event.target.parentElement.classList.remove('invalid');
    }
}
function handleUserInput(event) {
    setUserData(event.target.id, event.target.value);
    console.log(userData);
    // check if the input field has an id of percentage
    if(event.target.id =='percentageTip'){
        let previousSelected=document.querySelector('button.selected');
        if(previousSelected){
            previousSelected.classList.remove('selected');
        }
        
    }
    if(event.target.id=='people'){
        if(parseInt(event.target.value)){
                event.target.parentElement.classList.remove('invalid');
            } else{
                event.target.parentElement.classList.add('invalid');
            }
    }
}

// handle userInput input
function setUserData(key, value) {
    userData[key]=parseFloat(value) || 0;
    userData.split();
    displayResult();
    if(document.querySelector('button.disabled')){
        document.querySelector('button.disabled').classList.remove('disabled');
    } 
   console.log(userData);
}

// handle userTip
function handleUserTip(event){
    
    if(event.target.dataset.percentage){
        console.log(event.target.dataset.percentage)
        let previousTipElement=document.querySelector('button.selected')
            console.log(previousTipElement);
    if(previousTipElement){
        previousTipElement.classList.remove('selected');
        document.getElementById('percentageTip').value='';
    }
            console.log(event.target);

    event.target.classList.add('selected');
    setUserData('percentageTip', event.target.dataset.percentage);
    console.log(userData);
    previousElement=event.target;
    }
}


function validateInput(event){
    let allowedValues= '01234567890.'.split('');
    if(event.target.id=='percentageTip'){
        allowedValues.pop();
    }
    if (event.data && allowedValues.indexOf(event.data)==-1){
        console.log(event.data);
        event.preventDefault();
    }
    console.log(allowedValues);
}
function resetApp(){
    userData.reset();
    displayResult();
    document.getElementById('amount').value='';
    document.getElementById('people').value='';
    document.getElementById('percentageTip').value='';
    if(document.querySelector('button.selected')){
        document.querySelector('button.selected').classList.remove('selected');
    }
    document.getElementById('people').parentElement.classList.remove('invalid');

        document.querySelector('button.card__reset').classList.add('disabled');
     
 

  }

function displayResult(){
    document.getElementById('tip').innerHTML = '$' + (userData.tipPerPerson).toFixed(2);
    document.getElementById('total').innerHTML = '$' + (userData.totalPerPerson).toFixed(2);
}

// const date=new Date();
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// function clock(){
//     const date=new Date();
//     console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
//     );
// }
// setInterval(clock, 1000);
// clock();
let fname='Joy';
`hello ${fname}`;
console.log(`hello ${fname.toUpperCase()}`);