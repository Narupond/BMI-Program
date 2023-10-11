function calculateBMI(){
    let getWeight = document.getElementById("input-weight").value;
    let getHeight = document.getElementById("input-height").value;
    let height = parseFloat(getHeight) / 100;
    let value = parseFloat(getWeight) / (height*height)
    // let form = document.getElementById("my_form");
    // form.addEventListener('submit', function handleSubmit(event){
    //     event.preventDefault();
    //     form.reset();
    // });

    if(getWeight == "" || getHeight == ""){
        document.getElementById("errorMessge").innerHTML = "กรุณากรอกน้ำหนักและส่วนสูง"
    }else if(getWeight != "" || getHeight != ""){
        document.getElementById("errorMessge").innerHTML = " "
    }


    if(value < 18.50){
        document.getElementById("answer_section").innerHTML = "BMI : " +value.toFixed(2) + " ต่ำกว่าเกณฑ์"
    }else if(value >= 18.50 && value <= 22.99){
        document.getElementById("answer_section").innerHTML = "BMI : " +value.toFixed(2) + " ปกติสมส่วน"
    }else if(value >= 23.00 && value <= 24.90){
        document.getElementById("answer_section").innerHTML = "BMI : " +value.toFixed(2) + " น้ำหนักเกิน"
    }else if(value >= 25.00 && value <= 29.90){
        document.getElementById("answer_section").innerHTML = "BMI : " +value.toFixed(2) + " อ้วนระดับ 1"
    }else if(value > 30){
        document.getElementById("answer_section").innerHTML = "BMI : " +value.toFixed(2) + " อ้วนระดับ 2"
    }
}