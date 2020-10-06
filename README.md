# CSC301 Fall 2020 A1
This repository is the **Web Application** submission for Group 81.

### Submission Requirements
The app can be run locally with `npm install` followed by `npm start`.
A live version of this web application can be found [here](https://csc301-fall-2020.github.io/assignment-1-81-fsq-poplar-mangoyogurt-web/).
The report is [web_report.pdf](https://github.com/csc301-fall-2020/assignment-1-81-fsq-poplar-mangoyogurt-web/blob/master/web_report.pdf) available in the root directory.
Examples of testing are present in [src/testing](https://github.com/csc301-fall-2020/assignment-1-81-fsq-poplar-mangoyogurt-web/tree/master/src/testing) and is scripted to run with `npm test`.

### Report Summary
Front-end: Vanilla tools are too weak for the single page application we wished to build. Django, while built on a familiar language Python, has an architecture for larger non-single page apps and did not meet our needs. Angular and React were the two main contendors, in which React won out due to Poplar's experience with the library and lack of experience with Typescript (which Angular uses).
Back-end: While Ruby on Rails was once the most popular choice, it is slow compared to modern alternatives and continues to decline in popularity due to the aforementioned speed and other issues. Django did not make sense since we settled on React for front-end anyways, serving no purpose not to complicate our tech stack; PHP, despite its plethora of libraries and seniority, was not picked for a similar reason. Thus, we ended up with Node.js.
CI/CD: Jenkins, CircleCI and Travis are all very powerful CI/CD tools with various differences between them (see full doc). However, GitHub actions has seamless integration with our existing repository on GitHub and required the least investment in terms of learning and implementing new technologies into our project.
Database: Relational databases such as PostGreSQL have very good data integrity and structure, whereas NoSQL solutions such as MongoDB are far more scalable and appropriate for non-related information. However, given the size of our app both were deemed overkill and too resource heavy for no gain. A simple JSON file would suffice for data storage, and this was upgraded to Firebase to allow the same database to be used across both web and android.

### Using the Web App
Our interpretation of A1 was a self-checkout machine, specifically mimicking one present at Dollarama (see [design_inspiration.jpg](https://github.com/csc301-fall-2020/assignment-1-81-fsq-poplar-mangoyogurt-web/blob/master/design_inspiration.jpg)). 
Since scanning items obviously cannot be implemented without the proper hardware and was outside the scope of this project, adding items to the cart is accomplished by the **Key in Code** button. Currently, our Firebase database contains 13 items with **ID codes from 1 to 13**.
While the should work on a variety of screen sizes and screen ratios, it looks best on a roughly 3x4 aspect ratio due to its design mimicking the aforementioned image.
Two features brought up as examples in the assignment page we chose not to implement:
  - Customers cannot directly apply discounts, as discounts are normally not available at self checkout without staff intervention
  - Similarly, editing the cart required a scan from an employee. Thus, we chose not to implement removing items from the cart

Since employee functionality was not in the assignment, we chose not to implement the above given our interpretation.
