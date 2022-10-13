window.addEventListener('DOMContentLoaded', async () => {


    const formTag = document.querySelector('#create-attendee-form');

    formTag.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(formTag);
        const body = JSON.stringify(Object.fromEntries(formData));  //returns key value pairs

        const select = document.querySelector('#conference');
        const select_val = select.options[select.selectedIndex].value

        const attendeeUrl = `http://localhost:8001/api/attendees/`;
        const fetchConfig = {
            method: 'post',
            body: body,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(attendeeUrl, fetchConfig);
        if (response.ok) {
            formTag.reset();
            const newConference = await response.json();
            console.log(newConference);


        // Here, add the 'd-none' class
        formTag.classList.add("d-none");

        // Here, remove the 'd-none' class
        var loading = document.getElementById("success-message");
        loading.classList.remove("d-none");

        }

    });


    const selectTag = document.getElementById('conference');

    const url = 'http://localhost:8000/api/conferences/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();

      for (let conference of data.conferences) {
        const option = document.createElement('option');
        option.value = conference.href;
        option.innerHTML = conference.name;
        selectTag.appendChild(option);
      }

    // Here, add the 'd-none' class to the loading icon
    var loading = document.getElementById("loading-conference-spinner");
    loading.classList.add("d-none");

    // Here, remove the 'd-none' class from the select tag
    selectTag.classList.remove("d-none");

    }

  });
