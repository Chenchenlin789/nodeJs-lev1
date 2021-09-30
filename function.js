// lev 1.2
//die function bekommt zwei Parameter übergeben. Gib eine zufällige Zahl zurück, die zwischen diesen beiden liegt
// Erstelle eine function, der ein String übergeben wird. Sie soll den ersten Buchstaben in einen Großbuchstaben umwandelt
// Erstelle eine function, der ein String übergeben wird. Sie soll den gesamten String in Großbuchstaben umwandeln
// Erstelle eine function, mit zwei Parametern. Sie soll überprüfen ob der letzte Buchstabe von Parameter 1 mit dem Parameter 2 überein stimmt

//lev1.3
//Erstelle eine function, der 3 Parameter übergeben werden sollen. Zwei Zahlen und ein Zeichen (+, -, /, *)
function myFunction(a, b, c) {
    if (typeof a === "number" && typeof b === "number") {
        if (c === "+") {
            return a + b
        } else if (c === "-") {
            return a - b
        } else if (c === "*") {
            return a * b
        } else if (c === "/") {
            return a / b
        } else {
            return "Error"
        }
    }
    else {
        return "Enter the number"
    }
}

module.exports = myFunction
