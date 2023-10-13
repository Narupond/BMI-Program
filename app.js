function calculateBMI() {
    let getWeight = document.getElementById("input-weight").value;
    let getHeight = document.getElementById("input-height").value;
    let height = parseFloat(getHeight) / 100;
    let value = parseFloat(getWeight) / (height * height)
    // let form = document.getElementById("my_form");
    // form.addEventListener('submit', function handleSubmit(event){
    //     event.preventDefault();
    //     form.reset();
    // });

    if (getWeight == "" && getHeight == "") {
        document.getElementById("errorMessage").innerHTML = "กรุณากรอกน้ำหนักและส่วนสูง"
    } else if (getWeight != "" && getHeight != "") {
        document.getElementById("errorMessage").innerHTML = " "
    } else if (getWeight == "") {
        document.getElementById("errorMessageWeight").innerHTML = "กรุณากรอกน้ำหนัก"
    } else if (getHeight == "") {
        document.getElementById("errorMessageHeight").innerHTML = "กรุณากรอกส่วนสูง"
    }


        if (value < 18.50) {
            document.getElementById("answer_section").innerHTML = "BMI = " + value.toFixed(2) + "<br>" + "<span id='text'>อยู่ในเกณฑ์ : ต่ำกว่าเกณฑ์</span>";
        } else if (value >= 18.50 && value <= 22.99) {
            document.getElementById("answer_section").innerHTML = "BMI = " + value.toFixed(2) + "<br>" + "<span id='text'>อยู่ในเกณฑ์ : ปกติสมส่วน</span>";
        } else if (value >= 23.00 && value <= 24.90) {
            document.getElementById("answer_section").innerHTML = "BMI = " + value.toFixed(2) + "<br>" + "<span id='text'>อยู่ในเกณฑ์ : น้ำหนักเกิน</span>";
        } else if (value >= 25.00 && value <= 29.90) {
            document.getElementById("answer_section").innerHTML = "BMI = " + value.toFixed(2) + "<br>" + "<span id='text'>อยู่ในเกณฑ์ : อ้วนระดับ 1</span>";
        } else if (value > 30) {
            document.getElementById("answer_section").innerHTML = "BMI = " + value.toFixed(2) + "<br>" + "<span id='text'>อยู่ในเกณฑ์ : อ้วนระดับ 2</span>";
        }
    }