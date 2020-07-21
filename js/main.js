// login button event creat
const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function() {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

// deposit button event creat
const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function() {
    const depositInput = document.getElementById("deposit-input").value;
    const depositValue = parseFloat(depositInput);

    const currentDeposit = document.getElementById("current-deposit").innerText;
    const currentValue = parseFloat(currentDeposit);
    const totalDeposit = depositValue + currentValue;
    document.getElementById("current-deposit").innerText = totalDeposit;

    const currentBalance = document.getElementById("current-balance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositValue + currentBalanceNumber;
    document.getElementById("current-balance").innerText = totalBalance;
    document.getElementById("deposit-input").value = "";
})

// withdraw button event creat
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function() {
    const withdrawInput = document.getElementById("withdraw-input").value;
    const withdrawInputNumber = parseFloat(withdrawInput);

    const currentWithdraw = document.getElementById("current-withdraw").innerText;
    const currentWithdrawNumber = parseFloat(currentWithdraw);
    const totalWithdraw = currentWithdrawNumber + withdrawInputNumber;
    document.getElementById("current-withdraw").innerText = totalWithdraw;

    const currentBalance = document.getElementById("current-balance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber - withdrawInputNumber;
    document.getElementById("current-balance").innerText = totalBalance;
    document.getElementById("withdraw-input").value = "";


})