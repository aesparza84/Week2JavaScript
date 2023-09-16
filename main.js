
//output box
let sumBox = document.getElementById('outputSum');
let rootBox = document.getElementById('outputRoot');

//The button
let btn = document.getElementById('butn');

function ComputSumAndRoot()
{
    //First Number
    let firstNum = Number(document.getElementById('input1').value);

    //Second number
    let secondNum = Number(document.getElementById('input2').value);

    let firstRoot = Math.sqrt(firstNum);
    let secondRoot = Math.sqrt(secondNum);
    let sumOfBoth = firstNum + secondNum;

    console.log("Sum: "+sumOfBoth);
    console.log("Product of roots "+ firstRoot*secondRoot);
    sumBox.innerHTML= "Sum: "+sumOfBoth;

    //Checks if the inputs are negative or not for Square Root
    if(firstNum < 0 || secondNum < 0)
    {
        rootBox.innerHTML = "Can't take root of negatives";
    }
    else
    {
        //Gives the squre root, up to 2 deciaml places
        rootBox.innerHTML = "Product of roots: "+(firstRoot*secondRoot).toFixed(2);
    }

    //Debug purposes
    console.log(firstNum +" is a "+typeof(firstNum));
    console.log(secondNum +" is a "+typeof(firstNum));    
}

btn.addEventListener('click', ComputSumAndRoot);