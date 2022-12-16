## Attendees microservice

### List Attendees

* Endpoint path: /attendees
* Endpoint method: GET

* Response: A list of attendees
* Response shape (JSON):
    ```json
    {
        "attendees": [
            {
                "name": string,
                "href": string
            }
        ]
    }
    ```

### Create Attendee

* Endpoint path: /attendees
* Endpoint method: POST

* Headers:
  * Content-Type: application/json

* Request shape (JSON):
    ```json
    {
        "email": string,
        "name": string,
        "company_name": string,
        "created": date,
        "conference": number
    }
    ```

* Response: A detail of attendee
* Response shape (JSON):
    ```json
    {
        "email": string,
        "name": string,
        "company_name": string,
        "created": date,
        "conference": {
            "name": string,
            "href": string
        }
    }
    ```

### Show Attendee

* Endpoint path: /attendees/`<int:id>`
* Endpoint method: GET

* Response: A detail of attendee
* Response shape (JSON):
    ```json
    {
        "email": string,
        "name": string,
        "company_name": string,
        "created": date,
        "conference": {
            "name": string,
            "href": string
        }
    }
    ```

## Conference GO monolith

### List Accounts

* Endpoint path: /accounts
* Endpoint method: GET

* Response: A list of accounts
* Response shape (JSON):
    ```json
    {
      "employees": [
        {
          "href": string,
          "name": string,
          "employee_number": number,
          "position": {
            "href": string,
            "id": number,
            "name": string
          }
        }
      ]
    }
    ```

### Create Account

* Endpoint path: /accounts
* Endpoint method: POST

* Headers:
  * Content-Type: application/json

* Request shape (JSON):
    ```json
    {
      "name": string,
      "phone_number": number,
      "position": number
    }
    ```

* Response: A detail of account
* Response shape (JSON):
    ```json
    {
        "href": string,
        "name": string,
        "employee_number": number,
        "position": {
            "href": string,
            "id": number,
            "name": string
        }
    }

### Show Account

* Endpoint path: /employees/`<str:email>`
* Endpoint method: GET

* Response: A detail of account
* Response shape (JSON):
    ```json
    {
        "href": string,
        "name": string,
        "employee_number": number,
        "position": {
            "href": string,
            "id": number,
            "name": string
        }
    }

### Update Account

* Endpoint path: /accounts/`<str:email>`
* Endpoint method: PUT

* Headers:
  * Content-Type: application/json

* Request shape (JSON):
    ```json
    {
      "position": number
    }
    ```

* Response: A detail of account
* Response shape (JSON):
    ```json
    {
        "href": string,
        "name": string,
        "employee_number": number,
        "position": {
            "href": string,
            "id": number,
            "name": string
        }
    }

### Delete Account

* Endpoint path: /accounts/`<str:email>`
* Endpoint method: DELETE

* Response: A detail of account
* Response shape (JSON):
    ```json
    {
        "href": string,
        "name": string,
        "employee_number": number,
        "position": {
            "href": string,
            "id": number,
            "name": string
        }
    }

### List Conferences

* Endpoint path: /conferences
* Endpoint method: GET

* Response: A list of conferences
* Response shape (JSON):
    ```json
    {
        "conferences": [
            {
                "name": string,
                "href": string,
            }
        ]
    }
    ```

### Create Conference

* Endpoint path: /conferences
* Endpoint method: POST

* Headers:
  * Content-Type: application/json

* Request shape (JSON):
    ```json
    {
        "name": string,
        "starts": date,
        "ends": date,
        "description": string,
        "max_presentations": number,
        "max_attendees": number,
        "location": number
    }
    ```

* Response: A detail of confernce
* Response shape (JSON):
    ```json
    {
        "name": string,
        "starts": date,
        "ends": date,
        "description": string,
        "created": date,
        "updated": date,
        "max_presentations": number,
        "max_attendees": number,
        "location": {
            "name": string,
            "href": string
        }
    }

### Show Conference

* Endpoint path: /conferences/`<int:id>`
* Endpoint method: GET

* Response: A detail of position
* Response shape (JSON):
    ```json
    {
        "name": string,
        "starts": date,
        "ends": date,
        "description": string,
        "created": date,
        "updated": date,
        "max_presentations": number,
        "max_attendees": number,
        "location": {
            "name": string,
            "href": string
        }
    }

### List Locations

* Endpoint path: /locations
* Endpoint method: GET

* Response: A list of locations
* Response shape (JSON):
    ```json
    {
        "locations": [
            {
                "name": string,
                "href": string
            }
        ]
    }
    ```

### Create Location

* Endpoint path: /locations
* Endpoint method: POST

* Headers:
  * Content-Type: application/json

* Request shape (JSON):
    ```json
    {
        "name": string,
        "city": string,
        "room_count": number,
        "state": string
    }
    ```

* Response: A detail of location
* Response shape (JSON):
    ```json
    {
        "name": string,
        "city": string,
        "room_count": number,
        "created": date,
        "updated": date,
        "state": string
    }

### Show Location

* Endpoint path: /locations/`<int:id>`
* Endpoint method: GET

* Response: A detail of location
* Response shape (JSON):
    ```json
    {
        "name": string,
        "city": string,
        "room_count": number,
        "created": date,
        "updated": date,
        "state": string
    }

### Update Location

* Endpoint path: /locations/`<int:id>`
* Endpoint method: PUT

* Headers:
  * Content-Type: application/json

* Request shape (JSON):
    ```json
    {
        "name": string,
        "city": string,
        "room_count": number,
        "created": date,
        "updated": date,
        "state": string
    }
    ```

* Response: A detail of location
* Response shape (JSON):
    ```json
    {
        "name": string,
        "city": string,
        "room_count": number,
        "created": date,
        "updated": date,
        "state": string
    }

### Delete Location

* Endpoint path: /locations/`<int:id>`
* Endpoint method: DELETE

* Response: A detail of location
* Response shape (JSON):
    ```json
    {
        "deleted": boolean
    }


### List States

* Endpoint path: /states
* Endpoint method: GET

* Response: A list of states
* Response shape (JSON):
    ```json
    {
        "states": [
            {
                string: string
            }
        ]
    }
    ```


### List Presentations

* Endpoint path: /presentations
* Endpoint method: GET

* Response: A list of presentations
* Response shape (JSON):
    ```json
    {
        "presentations": [
            {
                "title": string,
                "status": string,
                "href": string
            }
        ]
    }
    ```

### Create Presentation

* Endpoint path: /presentations
* Endpoint method: POST

* Headers:
  * Content-Type: application/json

* Request shape (JSON):
    ```json
    {
        "presenter_name": string,
        "company_name": string,
        "presenter_email": string,
        "title": string,
        "synopsis": string,
        "status": string,
        "conference": number
    }
    ```

* Response: A detail of presentation
* Response shape (JSON):
    ```json
    {
        "presenter_name": string,
        "company_name": string,
        "presenter_email": string,
        "title": string,
        "synopsis": string,
        "created": date,
        "status": string,
        "conference": {
            "name": string,
            "href": string
        }
    }

### Show Presentation

* Endpoint path: /presentations/`<int:id>`
* Endpoint method: GET

* Response: A detail of presentation
* Response shape (JSON):
    ```json
    {
        "presenter_name": string,
        "company_name": string,
        "presenter_email": string,
        "title": string,
        "synopsis": string,
        "created": date,
        "status": string,
        "conference": {
            "name": string,
            "href": string
        }
    }


### Approve Presentation

* Endpoint path: /presentations/`<int:id>`/approve
* Endpoint method: PUT

* Headers:
  * Content-Type: application/json

* Request shape (JSON):
    ```json
    {
        "presenter_name": string,
        "presenter_email": string,
        "title": string
    }
    ```

* Response: A detail of presentation
* Response shape (JSON):
    ```json
    {
        "presenter_name": string,
        "company_name": string,
        "presenter_email": string,
        "title": string,
        "synopsis": string,
        "created": date,
        "status": string,
        "conference": {
            "name": string,
            "href": string
        }
    }



### Reject Presentation

* Endpoint path: /presentations/`<int:id>`/reject
* Endpoint method: PUT

* Headers:
  * Content-Type: application/json

* Request shape (JSON):
    ```json
    {
        "presenter_name": string,
        "presenter_email": string,
        "title": string
    }
    ```

* Response: A detail of presentation
* Response shape (JSON):
    ```json
    {
        "presenter_name": string,
        "company_name": string,
        "presenter_email": string,
        "title": string,
        "synopsis": string,
        "created": date,
        "status": string,
        "conference": {
            "name": string,
            "href": string
        }
    }
