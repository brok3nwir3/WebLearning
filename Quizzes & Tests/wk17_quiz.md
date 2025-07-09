**`Week 17 Quiz`**

### This is a quiz (not a test), so feel free to use notes, books, the Internet, etc. if needed.

1. What are the *three* different AWS database instance types?
- A. Scalable, Memory Optimized, and Storage Optimized
- B. Standard, Non-standard, and Bustable
- C. Replica, Primary, and Backup
- D. Standard, Memory Optimized, and Burstable

2. Which of the following typically has an index specified?
- A. `.getElementById`
- B. `.getElementsByClassName`

3. After executing the following code:
`const fruits = ['Banana', 'Orange', 'Apple'];
fruits.pop();`
What will the fruits array look like?
- A. `['', 'Orange', 'Apple']`
- B. `['Banana', 'Orange']`
- C. `['Orange', 'Apple']`
- D. `['Banana', 'Orange', '']`

4. Consider the following code:
`let i, x = '';
for (i = 0; i <= 5; i++) {
  x += i;
}`
What will be the result of `x`?
- A. 01234
- B. 012345
- C. 1234
- D. 12345

5. Which is *not* a legal way to create an array?
- A. `const fruits = ['Orange', 'Banana', 'Apple'];`
- B. `const fruits = new Array ('Orange', 'Banana', 'Apple');`
- C. `const fruits = ('Orange', 'Banana', 'Apple');`

6. Which one of the following is *not* a legal JavaScript String?
- A. `"Hello world!"`
- B. `""Hello world!""`
- C. `'Hello world!'`
- D. `\`Hello world!`\`

7. When considering backup and recovery needs, what are the *two* metrics that should be considered?
- A. RTP and RPO
- B. RCE and RTO
- C. RTO and RPO
- D. RCP and RTP

8. What is the correct HTML event attribute to execute something when a user clicks on an element?
- A. onmouseover
- B. onmouseclick
- C. onkeydown
- D. onclick

9. What will be the output of the following code?
`function test() {
    console.log(a);
    var a = 5;
}
test();`
- A. undefined
- B. 5
- C. ReferenceError
- D. null

10. What is *not* a correct syntax for writing output in JavaScript?
- A. `window.alert()`
- B. `console.log()`
- C. `body.html()`
- D. `document.write()`

11. T/F: In the event of an AWS zone failure, *every* subnet and instance within the zone will also fail.
- A. True
- B. False

12. How many statements are present inside the function block?
`function genie() {
  let a, b, c;
  a = 5;
  b = 9;
  c = a + b;
}`
- A. 4
- B. 5
- C. 6
- D. 7

13. Which one is *not* a legal variable name?
- A. FirstName
- B. $FirstName
- C. _FirstName
- D. -FirstName

14. What is a correct syntax for creating a comment in JavaScript?
- A. # this is a comment
- B. // this is a comment
- C. '' this is a comment
- D. ## this is a comment

15. Which of the following is *not* an AWS recommendation for securing the root account?
- A. Delete any access keys associated with root.
- B. Assign a long and complex password, and store it in a secure password vault.
- C. Enable multifactor authentication (MFA) for the root account.
- D. Wherever possible, don't use root to perform administration operations.
- E. Remove the AdministratorAcess policy from all other accounts.

16. What is *not* a correct syntax for declaring variables?
- A. `let x;`
- B. `dim x;`
- C. `var x;`
- D. `const x;`

17. What is the main difference between var and let in terms of scope?
- A. `var` is block-scoped, while `let` is function-scoped.
- B. `var` is function-scoped, while `let` is block-scoped.
- C. Both `var` and `let` are globally scoped.
- D. Both `var` and `let` are block-scoped.

18. Consider the following code:
`x = 5;
var x;
alert(x);`
What will be the alerted result?
- A. 5
- B. undefined
- C. null
- D. ReferenceError

19. Consider the following code:
`let x = 5;
let y = '8';
let z = x + y;`
What will be the result of `z`?
- A. undefined
- B. 58
- C. 13
- D. 5

20. Which of the following is used to off-load the burden of generating, storing, and managing cryptographic keys?
- A. AWS Key Management Service
- B. AWS Resource Access Manager
- C. AWS CloudHSM
- D. Amazon Cognito
