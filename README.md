# Conference GO
Conference-management solution designed for planning and running conferences. Supports presentation, location, and attendee creation and management. Features Django, React, domain-driven design, microservices, and data interactions with RESTful APIs.


## Design
- [Design summary](docs/design-summary.md)
- [API design](docs/api-design.md)
- [Data model](docs/data-model.md)

## Methods
- [Methods](docs/methods.md)


## Intended Market
Companies who intend to have a hub for all things conferences and utilize a sophisticated solution for managing presentations, locations, and attendees.


## Functionality
- Create and view conferences
- Create presentations
- Create locations
- Create attendees


## Project Initialization

To fully enjoy this application on your local machine, please ensure you have <b>Docker</b> installed and follow these steps:

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Create <b>.env</b> and include the following code:


```
OPEN_WEATHER_API_KEY="XXXXXXXXXXXX"
PEXELS_API_KEY="YYYYYYYYYYYY"
DJWTO_SIGNING_KEY=abcdefg
```

>Replace XXXXXXXXXXXX with your [OPEN WEATHER API](https://openweathermap.org/api) key <br />
>Replace YYYYYYYYYYYY with your [PEXELS API](https://www.pexels.com/api/) key


4. Ensure <b>Docker</b> is running on your machine
5. Run `docker compose build`
6. Run `docker compose up`


## Project Deactivation
1. Stop containers
2. Run `docker compose down`
