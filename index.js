
const btn1 = document.getElementById("btn");
const bmiResult = document.getElementById("result");
const weightCondition = document.getElementById("weight");


function calculateBMI(){
    const heightValue = document.getElementById("input1").value / 100;
    const weightValue = document.getElementById("input2").value;

    const bmiValue = weightValue / (heightValue * heightValue);

    bmiResult.value = bmiValue;


    if(bmiValue < 18.5){
        weightCondition.innerText = "Under weight";
    }
    else if(bmiValue >= 18.5 && bmiValue <= 24.9){
        weightCondition.innerHTML = "Normal weight";
    }else if(bmiValue >= 25 && bmiValue <= 29.9){
        weightCondition.innerHTML = "Overweight";
    }else if(bmiValue >= 30 ){
        weightCondition.innerHTML = "Obesity";
    }
}
btn1.addEventListener("click",calculateBMI);

