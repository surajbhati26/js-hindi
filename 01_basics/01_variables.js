const accountId = 144553
let accountEmail = "suraj@google.com"
var accountPassword = "12345"
accountCity = "Jodhpur"
let accountState;
//accountId = 2 // not allowed

accountEmail = "sk@google.com"
accountPassword = "342301"
accountCity = "Udaipur"
console.log(accountId);
console.table([accountId, accountEmail, accountCity, accountPassword, accountState]);
/* avoid using var
because of issue in block scope and functional scope 
*/