# CRM Ticket system API

This api is a part of create CRM Ticket system with MERN stack from scratch.

## How to use

- run `git clone...`
- run `npm start`

Note: Make sure you have nodemon installed in your system otherwise you can install as a dev dependency in the project.

## API Resources

### User API Resources

All the user API router follow `/v1/user/`

| #   | Routers                   | verbs  | Progress | Is Private | Description                                      |
| --- | ------------------------- | ------ | -------- | ---------- | ------------------------------------------------ |
| 1   | "/vi/user/"               | GET    | Done     | Yes        | Get user's Info                                  |
| 2   | "/vi/user/"               | POST   | Done     | NO         | Create New user                                  |
| 3   | "/vi/user/login"          | POST   | Done     | No         | Verify user authentication and return JWT        |
| 4   | "/vi/user/reset-password" | POST   | Done     | No         | Verify email and email pin to reset the password |
| 5   | "/vi/user/reset-password" | PUT    | Done     | No         | Replace with new password                        |
| 6   | "/vi/user/logout"         | DELETE | Done     | Yes        | Delete Access token                              |

# Ticket API Resources

All the user API routers follow "/vi/ticket/"

| #   | Routers                        | verbs  | Progress | Is Private | Description                              |
| --- | ------------------------------ | ------ | -------- | ---------- | ---------------------------------------- |
| 1   | "/vi/ticket"                   | GET    | Done     | Yes        | Get all tickets for the logged in user   |
| 2   | "/vi/ticket/{id}"              | GET    | Done     | Yes        | Get ticket details                       |
| 3   | "/vi/ticket"                   | POST   | Done     | Yes        | Create a new ticket                      |
| 4   | "/vi/ticket/{id}"              | PUT    | Done     | Yes        | Update ticket details, ie. reply message |
| 5   | "/vi/ticket/close-ticket/{id}" | PUT    | Done     | Yes        | Close a ticket                           |
| 6   | "/vi/ticket/{id}"              | DELETE | Done     | Yes        | Delete a ticket                          |

# Refresh Token API

All the user API routers follow "/vi/token/"

| #   | Routers     | verbs | Progress | Is Private | Description                              |
| --- | ----------- | ----- | -------- | ---------- | ---------------------------------------- |
| 1   | "/vi/token" | GET   | Done     | No         | Get new access token using refresh token |
