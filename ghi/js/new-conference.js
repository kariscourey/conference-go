const alert = () => {
    return `
    <div class="alert alert-primary" role="alert">
        Something went wrong.
    </div>
    `
};

const selectHTML = (values) => {

    let select_html = `<option selected value="">Choose a location</option>`;

    for (let i of values) {
        select_html += `
        <option value="${i.id}">${i.id}</option>
        `
    };

    return select_html;
};



window.addEventListener('DOMContentLoaded', async () => {


    const formTag = document.querySelector('#create-conference-form');

    formTag.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(formTag);
        const body = JSON.stringify(Object.fromEntries(formData));  //returns key value pairs

        const conferenceUrl = 'http://localhost:8000/api/conferences/';
        const fetchConfig = {
            method: 'post',
            body: body,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(conferenceUrl, fetchConfig);
        if (response.ok) {
            formTag.reset();
            const newConference = await response.json();
            console.log(newConference);
        }

    });


    const url = 'http://localhost:8000/api/locations/';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            let alert_html = alert();
            let alert_tag = document.querySelector('#alert');
            alert_tag.innerHTML = alert_html
        } else {
            const data = await response.json();

            const selectTag = document.querySelector('#location');
            const values = data.locations;
            console.log(values);
            const select_html = selectHTML(values);
            selectTag.innerHTML = select_html;

        }
    } catch (e) {
        let alert_html = alert();
        let alert_tag = document.querySelector('#alert');
        alert_tag.innerHTML = alert_html;
        console.log(e);
    }

});
