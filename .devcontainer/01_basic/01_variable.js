const accountId = 144453
let accountEmail = "Pradeep@google.com"
var accountPassword = "12345"
accountCity = "Prayagraj"

//accountId = 2 //not allowed
accountEmail = "@jklnsnchu.com"
accountPassword = "21347949"
accountCity = "noida"
let accountState;


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])