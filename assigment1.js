var calcBMI = function() {

    var height = parseInt(document.getElementById('height').value)
    var weight = parseInt(document.getElementById('weight').value)
    var result = document.querySelector('result')


    var BMI = (weight / ((height/100) * (height/100)))

    if (BMI < 18.5){
        alert('Phan loai: Gay, Nguy co phat trien benh:Thap')
    }else if(BMI >= 18.5 && BMI <= 24.9){
        alert('Phan loai: Binh thuong, Nguy co phat trien benh: Trung Binh')
    }else if(BMI >= 25.0 && BMI <= 29.9){
        alert('Phan loai: Hoi beo, Nguy co phat trien benh: Cao')
    }else if(BMI >= 30.0 && BMI <= 34.9){
        alert('Phan loai: Beo phi cap 1, Nguy co phat trien benh: Cao')
    }else if(BMI >= 35.0 && BMI <= 39.9){
        alert('Phan loai: Beo phi cap 2, Nguy co phat trien benh: Rat cao')
    }else if (BMI > 40.0)
        alert('Phan loai: Beo phi cap 3, Nguy co phat trien benh: Nguy hiem')
    

    

}
















