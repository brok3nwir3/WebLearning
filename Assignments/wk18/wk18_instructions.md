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
- The statement should target ID `Q3` and be set to `slices`.
- Save the file, and check if your string is correctly displaying: `abc`.

### Question 4 - String Search
- Working within the `wk18.html` HTML file...
  - *HTML*
- Inside the HTML file, create one new paragraph element within the body.
- Add the `id` attribute to the paragraph element, and set the value `Q4`.
- The paragraph element should be closed without any text inside.
- Save the HTML file.
  - *JavaScript*
- Working within the `wk18.js` JavaScript file...
- Initialize a new variable called `text` set to `"I receive snail mail DAILY!"`.
- Initialize a new variable called `array1`.
- Set `array1` to use the `match` string search method, selecting `ail` globally, regardless of case.
- Once you've done this, write a get element by ID statement.
- The statement should target ID `Q4` and be set to the *length* of `array1`, plus `" "`, plus `array1`.
- Save the file, and check if your string is correctly displaying: `3 ail,ail,AIL`.

### Question 5 - Convert toString()
- Working within the `wk18.html` HTML file...
  - *HTML*
- Inside the HTML file, create one new paragraph element within the body.
- Add the `id` attribute to the paragraph element, and set the value `Q5`.
- The paragraph element should be closed without any text inside.
- Save the HTML file.
  - *JavaScript*
- Working within the `wk18.js` JavaScript file...
- Initialize a new variable called `x` set to `123`.
- Initialize a new variable called `new_string`.
- Set `new_string` to use the `toString()` method against `x`.
- Once you've done this, write a get element by ID statement.
- The statement should target ID `Q5` and be set to `new_string`.
- Save the file, and check if your string is correctly displaying: `123`.


## AWS

### Creating a Trail (CloudTrail)
- Note: This lab is based on exercise 7.1 from the textbook.
- Log into your AWS console and search "CloudTrail".
- Click "Create a trail".
- Name the trail: `coding-hour-trail` and click to continue.
- Return to the CloudTrail home page.
- Click the `coding-hour-trail` and view the details.
- Click "Trail log location".
- Identify the newly created S3 bucket used by your trail.
- Discuss the following with a classmate...
- 1) What is the name of the object within the new bucket?
- 2) What file type is in the bucket?
- 3) What information does the file contain?
- 4) Return the trail, open the details, and identify the four main event categories.
- 5) From the CloudTrail menu, click "Event History" (on the left), and review the latest events.
 
## Important Note
- Ensure you disable or delete all newly created test/lab resources.
