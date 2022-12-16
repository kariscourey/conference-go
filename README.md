# Conference GO
Conference-management solution designed for planning and running  conferences with attendees and presenters. Supports location, conference, and presentation creation and management. Features Django, React, and data interactions with RESTful APIs.


## Design
- [Design summary](docs/design-summary.md)
- [API design](docs/api-design.md)
- [Data model](docs/data-model.md)

## Methods
- [Methods](docs/methods.md)


## Intended Market
Companies who intend to have a hub for all things conferences and utilize a sophisticated solution for managing attendees, presenters, and presentations.


## Functionality
- Create and view attendees
- Create and view presenters
- Create and view presentations
- Create and view conferences
- Create and view locations


## Project Initialization

To fully enjoy this application on your local machine, please ensure you have <b>Docker</b> installed and follow these steps:

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Create `.env` and include the following code:


</br>
OPEN_WEATHER_API_KEY="XXXXXXXXXXXX"
</br>
PEXELS_API_KEY="XXXXXXXXXXXX"
</br>
DJWTO_SIGNING_KEY=abcdefg

Replace XXXXXXXXXXXX with your [OPEN WEATHER API](https://openweathermap.org/api) key
</br>

Replace XXXXXXXXXXXX with your [PEXELS API](https://www.pexels.com/api/) key


4. Ensure <b>Docker</b> is running on your machine
5. Run `docker compose build`
6. Run `docker compose up`


## Project Deactivation
1. Stop containers
2. Run `docker compose down`
