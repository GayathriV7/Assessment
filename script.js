var balance = localStorage.getItem("balance");
var incomes = localStorage.getItem("income");
var expenses = localStorage.getItem("expenses");
if (balance ==null) 
{

    var balance = 0.00;
    var incomes = 0.00;
    var expenses = 0.00;
}
document.getElementById("balance_amount").innerHTML = 'Rs.'+' '+balance;
document.getElementById("income_amount").innerHTML = 'Rs.'+' '+incomes;
document.getElementById("expense_amount").innerHTML = 'Rs.'+' '+expenses;


function income() 
{
    var a = document.getElementById("text").value;
    var b = document.getElementById("amount").value;
    incomes = parseFloat(b) + parseFloat(incomes);
    balance = parseFloat(balance) + parseFloat(b);
    localStorage.setItem("income",incomes);
    localStorage.setItem("balance",balance);
    document.getElementById("income_amount").innerHTML = 'Rs.'+' '+incomes;
    document.getElementById("balance_amount").innerHTML = 'Rs.'+' '+balance;
    var today=new Date();
    var date=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    var dateTime=date+' '+time;
    document.getElementById("datetime").innerHTML +='Time: '+dateTime+'., Rs.'+' '+incomes+'; ';

    
}
function expense() 
{
    var a = document.getElementById("text").value;
    var b = document.getElementById("amount").value;
    expenses = parseFloat(b) + parseFloat(expenses);
    balance = parseFloat(balance) - parseFloat(b);
    if (balance>0) 
    {
        localStorage.setItem("expenses",expenses);
        localStorage.setItem("balance",balance);
        document.getElementById("expense_amount").innerHTML = 'Rs.'+' '+expenses;
        document.getElementById("balance_amount").innerHTML = 'Rs.'+' '+balance;
    }
    else
    {
        alert("Please check your balance. Your balance is going to negative")
    }
    }