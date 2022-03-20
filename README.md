# Calculator App

## By: Waed Hafitha.


## About Calculator App:
This app was built using react hook functional components. The calculator can perform the basic operations with the following user stories:

1. The calculator contains a clickable element containing an = (equal sign).
 
2. The calculator contains 10 clickable elements containing one number each from 0-9.

3. The calculator contains 4 clickable elements each containing one of the 4 primary mathematical operators.

4. The calculator contains a clickable element containing a . (decimal point).

5. The calculator contains a clickable element with an id="clear".

6. The calculator contains an element to display values with a corresponding id="display".

7. At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state.

8. In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.

9. When inputting numbers, the calculator should not allow a number to begin with multiple zeros.

10. When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.

11. I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.

12. If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 * (-5)).

13. Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.


<br>

 ## How 

  - Clone the repo 
 1. In treminal 
 
 
 ```
 - git clone https://github.com/waed-hamza/calculator.git
 - cd calculator
 - code .
 ```
 
2. in VS code :

 ```
 - npm start
 ```
<br>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
