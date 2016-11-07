
# Cheerup Buttercup
Cheerup Buttercup allows users to sign up, log in, and provides the opportunity to share insightful, happy thoughts. An API built with rails provides all of the data for this application in JSON, which is served up with Angular on the front end.

[Heroku Link] (https:// /)
[Original Wireframe](https://drive.google.com/file/d/0B9p6hJKmZMZEbXRyYzQ0M0NqU3c/view?usp=sharing)

# Developers
Jason Fry
Zach Retterath
Zarela Graves

## Feature Specs
```markdown
1. When a user visits '/',
  1.1. they will see the site's home page.
    1.1.1. a link to log in or sign up.
2. When a user visits '/profile',
  2.1. they will see their profile page and,
    2.1.1 a form to create new cheerups.
    2.1.2 a list of all the cheerups they have created.
```
## Technologies

-**JavaScript, HTML, CSS**
-The app is written entirely in JavaScript, and the structure and styling were implemented with HTML and CSS.

-**angularJS**
-The app utilizes angularJS as a front-end framework to dynamically display different states and the user's information.

**User Stories**

[Trello Link] (https://trello.com/b/NZ1bMSk1/buttercup-project)

## Entity Relationship Diagram

Diagram (http://creately.com/diagram/example/iv084ofe1/Buttercup)

1. A user has many cheerups and also many reviews through cheerups
2. A review is a joint table and belongs to a cheerup and a user
3. A cheerup belongs to a user and has many reviews

## Unsolved Problems

-Cheerups are created in localStorage but are not added to the database and therefore do not persist over multiple sessions
