//first number
//let firstNum = document.getElementById('input1').setAttribute('type','number');

//second number


//output box
let outBox = document.getElementById('output');

//The button
let btn = document.getElementById('butn');

function ComputSumAndRoot()
{
    let firstNum = Number(document.getElementById('input1').value);
    let secondNum = Number(document.getElementById('input2').value);
    console.log(firstNum +" is a "+typeof(firstNum));
    console.log(secondNum +" is a "+typeof(firstNum));

    let firstRoot = Math.sqrt(firstNum);
    let secondRoot = Math.sqrt(secondNum);
    let sumOfBoth = firstNum + secondNum;

    console.log("Sum: "+sumOfBoth);
    console.log("Product of roots "+ firstRoot*secondRoot);
    outBox.innerHTML = "Sum:              "+sumOfBoth+"\n"+"Product of roots: "+firstRoot*secondRoot;
}

btn.addEventListener('click', ComputSumAndRoot);