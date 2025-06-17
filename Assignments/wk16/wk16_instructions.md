**`Week 16 - JavaScript Get Element ID vs Class, Array Methods, API Prep; AWS GuardDuty`**

## JavaScript

### Question 1 - More with Arrays, Pt.1
- For the next couple questions we'll be continuing to practice with arrays.
  - *HTML*
- Create a new HTML file or copy of one of your website HTML files, and name it `wk16.html`.
- Inside the HTML file, create one new paragraph element within the body.
- Add the `id` attribute to the paragraph element, and set the value `wk16`.
- The paragraph element should be closed without any text inside.
- Below the paragraph element, add a script element.
- Add the source attribute to the script element, and set it to `wk16.js`.
- Save the HTML file.
  - *JavaScript*
- Create a new JavaScript file, name it `wk16.js`, and open it.
- Within the JavaScript file, initialize an array named, `fruits`.
- Add the following strings to the array: `"Banana", "Orange", "Apple", "Mango", "Lemon", "Cherry"`.
- Next, write a get element by ID statement.
- The statement should target ID `wk16` and be set to `fruits`.
- Save the file, and check if your array is displaying correctly.

### Question 2 - More with Arrays, Pt.2
- Now we'll convert our existing HTML and JavaScript files to use a class, instead of an ID.
- First, replace `ID` with `class` in the HTML file.
- Second, replace `getElementById` with `getElementsByClassName` in the Javascript.
- Save the file, and check if your array is displaying correctly.
- This change should break your HTML file, and nothing should display.
- To fix this, we need to specify an element target of `[0]` for `getElementsByClassName`.
- Save the file, and check if your array is displaying correctly.
- Discuss your observations with the class.
- Note: You can read more about the difference between ID and Class here:
- https://www.geeksforgeeks.org/javascript-getelementsbyclassname-vs-getelementbyid-method/

### Question 3 - More with Arrays, Pt.3
- JavaScript includes many built-in methods for arrays. In this question, we'll test `pop()` and `push()`.
  - *HTML*
- Open your `wk16.html` file.
- Inside the HTML file, create three new paragraph elements within the body.
- Add the `id` attribute to each paragraph element, and set the values `demo1`, `demo2`, and `demo3`.
- The paragraph elements should be closed without any text inside.
- Below the paragraph elements, use the same script element, set to `wk16.js`.
- Save the HTML file.
  - *JavaScript*
- Open your `wk16.js` file.
- We will use the same `fruits` array from question 1.
- Next, write three get element by ID statements.
- Each statement should target a different ID, i.e. `demo1`, `demo2`, and `demo3`.
- Set each statment to equal `fruits`.
- Inbetween the first and second statment, issue a `pop()` on `fruits`.
- Inbetween the second and third statment, issue a `push()` on `fruits`, for new item `kiwi`.
- Save the file, and check if your array is displaying correctly.

### API Project Prep
- Read the JavaScript API Intro page:
- https://www.w3schools.com/js/js_api_intro.asp
- Next, search the Internet for a free geolocation API.
  - Example: https://app.ipgeolocation.io/
- Create a user account, if needed.
- Create an API key, if needed.
- Find the API documentation.
  - Example: https://ipgeolocation.io/documentation.html
- Try making a simple API call from your browser search bar (or curl via terminal).
  - Example: `https://api.ipgeolocation.io/v2/ipgeo?apiKey=API_KEY&ip=8.8.8.8`
- Once you've finished making the API call, share your progress with the class.

## AWS

### GuardDuty
- Note: We won't be configuring GuardDuty, because it costs money. But we will review it as an AWS service.
- Log into your AWS console and search "GuarDuty".
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
