var choice = prompt("Welcome to Area calculator. \n choose the below options to calculate the area of \n  1. Area of Rectangle \n 2. Area of Triangle \n 3. Area of Circle \n 4. Area of Parelelogram")

if (choice == '1') {
    var one = prompt ('Enter the length')
    var b = prompt ('Enter the breath')
    var result = Number(one) * Number(b)
    alert('The Area is '+ result) 
}
if (choice == '2') {
    var two = prompt ('Enter the base')
    var b = prompt ('Enter the height')
    var result = 1/2 * Number(two) * Number(b)
    alert('The Area is ' + result) 
}
if (choice == '3') { 
    var three = prompt ('Enter the radius')
    var result = 3.14 * Number(three) * 2
    alert('The Area is ' + result)
}