const alert = () => {
    return `
    <div class="alert alert-primary" role="alert">
        Something went wrong.
    </div>
    `
};

const selectHTML = (values) => {

    let select_html = `<option selected value="">Choose a state</option>`;

    for (let i of values) {
        select_html += `
        <option value="${Object.values(i)}">${Object.values(i)}</option>
        `
    };

    return select_html;
};



window.addEventListener('DOMContentLoaded', async () => {


    const formTag = document.querySelector('#create-location-form');

    formTag.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(formTag);
        const body = JSON.stringify(Object.fromEntries(formData));  //returns key value pairs

        const locationUrl = 'http://localhost:8000/api/locations/';
        const fetchConfig = {
            method: 'post',
            body: body,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(locationUrl, fetchConfig);
        if (response.ok) {
            formTag.reset();
            const newLocation = await response.json();
            console.log(newLocation);
        }

    });





    const url = 'http://localhost:8000/api/states/';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            let alert_html = alert();
            let alert_tag = document.querySelector('#alert');
            alert_tag.innerHTML = alert_html
        } else {
            const data = await response.json();

            const selectTag = document.querySelector('#state');
            const values = Object.values(data);
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
