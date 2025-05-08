## Objective

Build a single page app that serves the user with a feed based on all the users they follow. Feed will be sorted based on order of most recent post history of followees. 

- readFeed(userID) 

- updateFollow(followeeID, followerID)

- createPost(message, userID)

- readUser(userID)

- createUser(userID)

- deleteUser(userID)

- deletePost(messageID)

## Software Architecture

We will use an MVC to handle the application.

The user will have login information and auth. When they are logged in, their feed will show up as the homepage.

There is a search option to see the post history of a single follower. In addition, in order to follow a user, you must search up their username and then hit a FOLLOW button.

## Tech Stack

- Front-End: HTML, CSS, React, Tailwind

- Web Server: Next.js, Node.js

- Database: MySQL

- APIs: Auth0

Infrastructure as a Service (IaaS) will be used to manage the back-end and hosting. 

Assume active daily users for this application is a maximum of 5. You do **not** need a complicated tech stack! Simplify stack if necessary.
