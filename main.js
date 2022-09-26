var  b = document.getElementById("btn")

b.addEventListener("click", function(){
    var number = document.getElementById("num").value
    

    if (number >= 80 && number <= 100)
    var result = "You Got"+': '+ "A+"

    else if (number >= 70 && number <= 79)
    var result = "You Got"+': '+ "A"

    else if (number >= 60 && number <= 69)
    var result = "You Got"+': '+ "A-"

    else if (number >= 50 && number <= 59)
    var result = "You Got"+': '+ "B"

    else if (number >= 40 && number <= 49)
    var result = "You Got"+': '+ "C"

    else if (number >= 33 && number <= 39)
    var result = "You Got"+': '+ "D"

    else if (number >= 0 && number <= 35)
    var result = "Fail ! " 

    else if (number > 100)
    var result = "You Got"+': '+ "no match"

    document.getElementById("res").innerHTML = result
})
