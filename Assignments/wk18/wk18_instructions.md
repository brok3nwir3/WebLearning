**`Week 18 - JavaScript String Methods, String Search, and toString); AWS GuardDuty`**

## JavaScript

### Question 1 - Escaping Within Strings
- The following questions will focus on string usage and manipulation.
  - *HTML*
- Create a new HTML file or copy of one of your website HTML files, and name it `wk18.html`.
- Inside the HTML file, create one new paragraph element within the body.
- Add the `id` attribute to the paragraph element, and set the value `Q1`.
- The paragraph element should be closed without any text inside.
- Below the paragraph element, add a script element.
- Add the source attribute to the script element, and set it to `wk18.js`.
- Save the HTML file.
  - *JavaScript*
- Create a new JavaScript file, name it `wk18.js`, and open it.
- Within the JavaScript file, initialize an string named, `string1`.
- Set `string1` to: `"The "GOAT" is the greatest of all time."`.
- Next, you'll need to escape the inner double quote characters.
- Once you've done this, write a get element by ID statement.
- The statement should target ID `Q1` and be set to `string1`.
- Save the file, and check if your string is displaying correctly.

### Question 2 - String Concat & Length
- Working within the `wk18.html` HTML file...
  - *HTML*
- Inside the HTML file, create one new paragraph element within the body.
- Add the `id` attribute to the paragraph element, and set the value `Q2`.
- The paragraph element should be closed without any text inside.
- Below the paragraph element, and below the script element, we need to add *another* script element.
- This script element won't have any `src` but will call the function `concat_plus_length`.
- Within the function, pass three strings: `"hello", "good", "world"`.
- Save the HTML file.
  - *JavaScript*
- Working within the `wk18.js` JavaScript file...
- Create a new function called `concat_plus_length`, which requires three parameters.
- Initialize a variable called `combined` within the function.
- Set `combined` equal to the concatenation of the three parameters passed to the function.
- Next, initialize a variable called `output` within the function.
- Set `output` equal to `combined` plus the length of `combined`.
- Once you've done this, write a get element by ID statement.
- The statement should target ID `Q2` and be set to `output`.
- Save the file, and check if your string is correctly displaying: `hellogoodworld14`.

### Question 3 - String Slicing
- Working within the `wk18.html` HTML file...
  - *HTML*
- Inside the HTML file, create one new paragraph element within the body.
- Add the `id` attribute to the paragraph element, and set the value `Q3`.
- The paragraph element should be closed without any text inside.
- Save the HTML file.
  - *JavaScript*
- Working within the `wk18.js` JavaScript file...
- Initialize a new variable called `string_a` set to `"alpha"`.
- Initialize a new variable called `string_b` set to `"bravo"`.
- Initialize a new variable called `string_c` set to `"charlie"`.
- Initialize a new variable called `slices`.
- Set `slices` equal to the sliced first character from `string_a`, `string_b`, and `string_c`.
- Once you've done this, write a get element by ID statement.
- The statement should target ID `Q2` and be set to `slices`.
- Save the file, and check if your string is correctly displaying: `abc`.


## AWS

### GuardDuty
- Note: We won't be configuring GuardDuty, because it costs money. But we will review it as an AWS service.
- Log into your AWS console and search "GuardDuty".
- Read the following sections: "Benefits and features" and "Use cases".
- Next, click the link titled "What is GuardDuty?".
- Read the page and watch the video.
- Next, use the Internet to find a list of all the GuardDuty detections AWS offers.
- Next, use the Internet to find how GuardDuty is priced.
- Lastly, discuss the following with a classmate:
  - What is GuardDuty?
  - Why might a company enable GuardDuty for their AWS account?
  - What sort of things could GuardDuty detect?
  - How much does GuardDuty cost?
