**`Week 21 - HTML Canvas Element; JavaScript ; AWS `**

## JavaScript

### Question 1 - HTML Canvas Element & JavaScript Drawing
- *This question introduces the HTML canvas element.*
  - *HTML*
- Create a new HTML file or copy of one of your website HTML files, and name it `wk21.html`.
- Inside the HTML file, create one new canvas element within the body.
- Add the `id` attribute to the paragraph element, and set the value `Q1`.
- The canvas element should be closed without any text inside.
- Set the canvas to have a `height` attribute of `700` and a `width` attribute of `700`.
- Set the canvas to have a `style` attribute with `2` pixel border, `solid`, with color `#164996`.
- Below the canvas element, add a script element.
- Add the source attribute to the script element, and set it to `wk21.js`.
- Save the HTML file.
  - *JavaScript*
- Create a new JavaScript file, name it `wk21.js`, and open it.
- Within the JavaScript file, initialize a *constant* variable named, `canvas`.
- Set the `canvas` variable to a `getElementById` for `Q1`.
- Next, initialize a *constant* variable named, `ctx` (context).
- Set the `ctx` variable to a `"2d"` canvas context.
- Next, set `ctx` to have a `fillStyle` of `"green"`.
- Then, draw a rectangle, i.e. `fillRect` with the dimension `150` by `70`.
- Place the rectangle at an X position of `10` and a Y position of `100`.
- Save the file, and check if your string is displaying correctly.

### Question 2 - Object Display (Loop)
- *Note: There are several ways to display object properties; here we'll use a loop.*
- Within your `wk20.html` file...
  - *HTML*
- Create a new paragraph element within the body.
- Add the `id` attribute to the paragraph element, and set the value `Q2`.
- The paragraph element should be closed without any text inside.
- Save the HTML file.
  - *JavaScript*
- Within your `wk20.js` file...
- Add a new `box` object property: `material`.
- Set the `material` property to: `cardboard`.
- Once you've done this, create two new variable...
- `let` the first variable be `box_data` set to an empty string.
- `let` the second variable be `count` set to the number 1.
- Next create a loop that runs `x` times, for each item `in box`.
- The loop should create a formatted string for the current property.
- Each line should include the current `count`, item `x`, and a new line at the end using `<br>`.
- The end of the loop should include a statement to increment `count`.
- Lastly, write a get element by ID statement.
- The statement should target ID `Q2` and return `box_data`.
- Save the file, and check if your string is displaying correctly.



## AWS

### Register a Domain Name
- *Note: This exercise will charge you ~$3 USD, for a year-long lease on a domain name.*
- Log into the AWS web console, search "Route 53" in the search bar, and navigate to the page.
- 
