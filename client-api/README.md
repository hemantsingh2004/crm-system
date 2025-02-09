# CRM Ticket system API

This api is a part of create CRM Ticket system with MERN stack from scratch.

## How to use

- run `git clone...`
- run `npm start`

Note: Make sure you have nodemon installed in your system otherwise you can install as a dev dependency in the project.

## API Resources

### User API Resources

All the user API router follow `/v1/user/`

```markdown
|#| Routers                           |verbs |Progress|Is Private| Description                                      |
|-| --------------------------------- | ---- | ------ | -------- | ------------------------------------------------ |
|1| "/vi/user/login"                  | POST | TODO   | No       | Verify user authentication and return JWT        |
|2| "/vi/user/request-reset-password" | POST | TODO   | No       | Verify email and email pin to reset the password |
|3| "/vi/user/reset-password"         | PUT  | TODO   | No       | Replace with new password                        |
|4| "/vi/user/{id}"                   | GET  | TODO   | Yes      | Get user's Info                                  |

# Ticket API Resources

All the user API routers follow "/vi/ticket/"

| #   | Routers                        | verbs | Progress | Is Private | Description                              |
| --- | ------------------------------ | ----- | -------- | ---------- | ---------------------------------------- |
| 1   | "/vi/ticket"                   | GET   | TODO     | Yes        | Get all tickets for the logged in user   |
| 2   | "/vi/ticket/{id}"              | GET   | TODO     | Yes        | Get ticket details                       |
| 3   | "/vi/ticket"                   | POST  | TODO     | Yes        | Create a new ticket                      |
| 4   | "/vi/ticket/{id}"              | PUT   | TODO     | Yes        | Update ticket details, ie. reply message |
| 5   | "/vi/ticket/close-ticket/{id}" | PUT   | TODO     | Yes        | Close a ticket                           |
```
