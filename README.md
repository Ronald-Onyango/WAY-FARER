# WayFarer

[![Build Status](https://travis-ci.org/Ronald-Onyango/WAY-FARER.svg?branch=ft-user-signup-167605225)](https://travis-ci.org/Ronald-Onyango/WAY-FARER)
[![Coverage Status](https://coveralls.io/repos/github/Ronald-Onyango/WAY-FARER/badge.svg?branch=master)](https://coveralls.io/github/Ronald-Onyango/WAY-FARER?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/dfdbde182be1e167062c/maintainability)](https://codeclimate.com/github/Ronald-Onyango/WAY-FARER/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/dfdbde182be1e167062c/test_coverage)](https://codeclimate.com/github/Ronald-Onyango/WAY-FARER/test_coverage)

WayFarer is a public bus transportation booking service.

## Core Features

- User can sign up.
- User can sign in.
- Admin can create a trip.
- Admin can cancel a trip.
- Both Admin and Users can see all trips.
- Both Admin and Users can see a specific trip.
- Users can book a seat on a trip.
- View all bookings. An Admin can see all bookings, while user can see all of his/her
bookings.
- Users can delete their booking

## Extra Features

- Users can get a list of filtered trips based on origin.
- Users can get a list of filtered trips based on destination.
- Users can specify their seat numbers when making a booking.

## Links

- UI Templates can be found [here](https://ronald-onyango.github.io/WAY-FARER/UI/landing-page.html)
- APIs are hosted on Heroku [here](https://cheki.herokuapp.com/api)
- API documentation can be found [here](https://cheki.herokuapp.com/api/v1/docs)
- This project is managed with Pivotal Tracker [here](https://www.pivotaltracker.com/n/projects/2368338)

## Getting Started

To have this application running on your computer, follow the following steps

### Prerequisites

- You need to have [Node.js](nodejs.org) installed

### Installing

- Clone or download this repository using `https://github.com/Ronald-Onyango/WAY-FARER.git`
- Run `npm install` to install all the application's dependencies
- Set the following environment variables in your `.env` file:

  - `PORT` - An Integer specifying the PORT your application will run on.
  
  - `SECRET_KEY` - A random string used for generation authorization tokens.

  - `BASE_URL` - It should be formated thus:  http(s)://(host)(:port)(TLD)/api/v1
       Example:

```
    http://localhost:8000/api/v1 or https://cheki.herokuapp.com/api/v1

 ```

### Running The Tests

#### Testing Locally

- Run `npm run test`

#### Testing With Postman

- Install [Postman](https://getpostman.com).
- View the api endpoints [here](cheki.herokuapp.com/api/v1/docs).

## Built With

- [Node.Js](https://nodejs.org)
- [ExpressJs](https://expressjs.com)

### Testing Tools

- [Mocha](https://www.npmjs.com/package/mocha)
- [Chai](https://www.npmjs.com/package/chai)
- [nyc](https://www.npmjs.com/package/nyc)
- [Istanbul](https://www.npmjs.com/package/istanbul)

### Coding Style

- [AirBnB](https://github.com/airbnb/javascript)

## Author

- [Ronald Onyango](https://github.com/Ronald-Onyango/)
