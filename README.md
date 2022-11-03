# Conference GO
Conference-management solution designed for planning and running  conferences with attendees and presenters. Supports location, conference, and presentation creation and management. Features data interactions with RESTful APIs.

## Tools, techniques, languages

### Tools
Django <br/>
Docker <br/>
React <br/>

### Techniques
RESTful API routes <br/>
Templating <br/>
Microservices <br/>
React Hooks <br/>

### Languages
Python 3 <br/>
JavaScript ES6+ <br/>
HTML <br/>
CSS <br/>


## Get started

### Requirements
Docker

### Build image
docker compose build

### Run services
docker compose up



## Back-End Design

### Conference GO microservice
Conference-management project within the monolith directory. Contains apps accounts, events, and presentations.

#### Accounts
Leverages Django's UserCreationForm, LoginView, and LogoutView to be able to create instances of users with accounts, present a login interface, and present a logout interface.

#### Events
Centers on the Conference model, instances of which describe conferences. Conference model includes foreign key reference to Location model, which contains a foreign key reference to State model. Related views permit CRUD functionality for model instances.

#### Presentations
Centers on the Presentation model, instances of which describe presentations. Presentation model includes foreign key reference to Status. Related views permit CRUD functionality for model instances. </br>
Leverages pika and rabbitmq to utilize queueing IPC integration pattern to distribute information regarding presentation approval and rejection.


### Attendees microservice
Attendees-management project within the attendees_microservice directory. Contains app attendees. </br>
Leverages pika to utilize pub-sub IPC integration pattern to distribute information regarding attendee creation.

#### Attendees
Centers on the Attendee model, instances of which describe attendees. Attendee model includes foreign key reference to Conference. Related views permit CRUD functionality for model instances. Badge model instances reference Attendee via foreign key.

### Presentation workflow microservice
Consists of consumer to process presentation approval and rejection output from monolith/presentations.

### Maildir microservice
Utilizes mailhog to mimic email service.


## Front-End Design

### Forms
Standard React class components that permit the creation of instances per the title of the component.

### Lists
Standard React class components that permit the listing of instances per the title of the component.
