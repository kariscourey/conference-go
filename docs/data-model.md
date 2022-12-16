# Data models

## Attendees microservice

### AccountVO

| name              | type              | unique | optional |
| ----------------  | ----------------- | ------ | -------- |
| id                | int               | yes    | no       |
| email             | string            | yes    | no       |
| first_name        | string            | no     | no       |
| last_name         | string            | no     | no       |
| updated           | date              | no     | no       |


### ConferenceVO

| name              | type              | unique | optional |
| ----------------  | ----------------- | ------ | -------- |
| id                | int               | yes    | no       |
| import_href       | string            | yes    | no       |
| name              | string            | no     | no       |


### Attendee

| name              | type                  | unique | optional |
| ----------------  | --------------------- | ------ | -------- |
| id                | int                   | yes    | no       |
| email             | string                | yes    | no       |
| name              | string                | no     | no       |
| company_name      | string                | no     | yes      |
| created           | date                  | no     | no       |
| conference        | ref to conferencevo   | no     | no       |


### Badge

| name              | type                  | unique | optional |
| ----------------  | --------------------- | ------ | -------- |
| id                | int                   | yes    | no       |
| created           | date                  | no     | no       |
| attendee          | ref to attendeevo     | no     | no       |



## Conference GO monolith

### User

Inherited from Django's AbstractUser.

| name              | type              | unique | optional |
| ----------------  | ----------------- | ------ | -------- |
| id                | int               | yes    | no       |
| email             | string            | yes    | no       |


### State

| name              | type              | unique | optional |
| ----------------  | ----------------- | ------ | -------- |
| id                | int               | yes    | no       |
| name              | string            | no     | no       |
| abbreviation      | string            | yes    | no       |


### Location

| name              | type              | unique | optional |
| ----------------  | ----------------- | ------ | -------- |
| id                | int               | yes    | no       |
| name              | string            | no     | no       |
| city              | string            | no     | no       |
| room_count        | number            | no     | no       |
| created           | date              | no     | no       |
| updated           | date              | no     | no       |
| picture_url       | string            | no     | yes      |
| state             | ref to state      | no     | no       |


### Conference

| name              | type              | unique | optional |
| ----------------  | ----------------- | ------ | -------- |
| id                | int               | yes    | no       |
| name              | string            | no     | no       |
| starts            | date              | no     | no       |
| ends              | date              | no     | no       |
| description       | string            | no     | no       |
| created           | date              | no     | no       |
| updated           | date              | no     | no       |
| max_presentations | number            | no     | no       |
| max_attendees     | number            | no     | no       |
| location          | ref to location   | no     | no       |


### Status

| name              | type              | unique | optional |
| ----------------  | ----------------- | ------ | -------- |
| id                | int               | yes    | no       |
| name              | string            | yes    | no       |



### Presentation

| name              | type              | unique | optional |
| ----------------  | ----------------- | ------ | -------- |
| id                | int               | yes    | no       |
| presenter_name    | string            | no     | no       |
| company_name      | string            | no     | yes      |
| presenter_email   | string            | no     | no       |
| title             | string            | no     | no       |
| synopsis          | string            | no     | no       |
| created           | date              | no     | no       |
| status            | ref to status     | no     | no       |
| conference        | ref to conference | no     | no       |
