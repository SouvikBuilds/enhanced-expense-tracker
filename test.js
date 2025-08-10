let price = 0
let expense = []
let length = 3
for (let i = 0; i < length; i++) {
    expenseDetails = {
        product: prompt("Enter Product Name:"),
        Price: prompt("Enter Price: ")
    }
    price += parseFloat(expense[i].Price)
}
expense.push(expenseDetails)
console.log(expense)
console.log(price)
alert(price)
