# Become a Software Professional 2023

## Week 01:

### Prototyping in Figma

For this week's project, we were divided into groups to create a prototype for a gym management system. Each group was responsible for a specific section of the system, including Landing Page, Sign Up/Log In, SuperAdmin, Admin, Trainer, and Member/User. We used Figma to design the prototype and collaborated to ensure a cohesive user experience.

## Week 02:

### Git Implementation and GitHub Repository: BaSP-M2023

[MegaRocket S.A Week-02 GitHub Pages](https://maurocaffesse.github.io/BaSP-M2023/Week-02)

I implemented Git for version control and created a GitHub repository called BaSP-M2023 to store and manage the project's files, which allow me to easily track changes.

### Building the website using HTML

During this week, I focused on developing the HTML structure of the Landing Page. This involved working with the wireframe and prototype developed during the previous week on Figma to create the necessary HTML elements and content for the page.

I started by breaking down the different sections of the page into individual HTML elements, including the header, nav, main content, and footer. Within each section, I carefully crafted the appropriate HTML tags to create a well-organized and semantically meaningful structure for the page, for accessibility and SEO purposes.

## Week 03:

### Styling the website using CSS pixel-perfect method

[MegaRocket S.A Week-03 GitHub Pages](https://maurocaffesse.github.io/BaSP-M2023/Week-03)

During this week, I focused on implementing the CSS for the Landing Page of the gym management system. I used the pixel-perfect method to ensure that the design was faithfully recreated in code.
To achieve the pixel-perfect look, I did not use modern layout techniques such as flexbox or grid. Instead, I relied on traditional CSS layout methods such as float, inline-block, and positioning. This allowed me to accurately place and style each element of the page according to the design specifications.

## Week 04:

### Styling the website using CSS Responsive design with Flexblox

[MegaRocket S.A. Week-04 GitHub Pages](https://maurocaffesse.github.io/BaSP-M2023/Week-04/)

During this week, I applied responsive design principles to the same Landing Page using flexbox. I followed the mobile-first approach, designing for smaller screen sizes first and gradually scaling up, using media-queries. I used flexbox to create a flexible and adaptable layout that could adjust to different screen sizes while maintaining its structure and readability.

To display the sidebar on the mobile version, you need to change:

```
display: none;
```

to:

```
display: flex;
```

on **line 2** of the **aside.css** file.

## Week 05:

### JavaScript Exercises using ES5

[JavaScript Exercises Week-05 GitHub Pages](https://maurocaffesse.github.io/BaSP-M2023/Week-05/)

During this week, I completed several JavaScript exercises using ECMAScript 5. These exercises covered topics such as variables and operators, strings, arrays, conditionals, loops, and functions. I applied my knowledge of these concepts to solve various problems and challenges, improving my problem-solving skills and familiarity with JavaScript syntax.

## Week 06:

### Building Login and Signup Pages with Form Validation using ES5

[MegaRocket S.A Week-06 GitHub Pages](https://maurocaffesse.github.io/BaSP-M2023/Week-06/views/index.html)

For Week 06, I was tasked with creating Login and Signup pages for the gym management system. I used HTML and CSS to design and style the pages, focusing on creating a clear and user-friendly layout. In addition, I added JavaScript validation to the form fields on both pages, using ECMAScript 5 to write the validation code.

The validation process involved ensuring that required fields were filled in, checking that passwords matched, and validating email addresses. For the Signup page, additional fields such as name, last name, ID, date of birth, address, phone number, city, and postal code also required specific validation rules.

By implementing these validation rules, I was able to create a secure and user-friendly experience for users of the gym management system.

To display the sidebar on the mobile version, you need to change:

```
display: none;
```

to:

```
display: flex;
```

on **line 3** of the **aside.css** file.

## Week 07:

### HTTP Requests with Fetch and Form Data Persistence using LocalStorage in JavaScript

[MegaRocket S.A Week-07 GitHub Pages](https://maurocaffesse.github.io/BaSP-M2023/Week-07/views/index.html)

During Week 7, the focus was on using HTTP requests made with the Fetch method in JavaScript to send data from the extended forms of Week 6 to a web server.

Upon form submission, data is sent as query-params to either the login or signup URL depending on the form. If the response is successful, a modal is shown indicating that the request was successful, and the response data is displayed in the same modal.

For the Signup form, the data obtained from the successful HTTP request must also be saved in the LocalStorage and displayed in the form every time the page is refreshed. If the response is unsuccessful, an error modal is shown.

To display the sidebar on the mobile version, you need to change:

```
display: none;
```

to:

```
display: flex;
```

on **line 3** of the **aside.css** file.
