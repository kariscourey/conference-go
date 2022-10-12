function createCard(name, description, pictureUrl, starts, ends, location) {
    return `
        <div class="card shadow mb-4">
            <img src="${pictureUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${location}</h6>
                <p class="card-text">${description}</p>
            </div>
            <div class="card-footer">
                ${starts} - ${ends}
            </div>
        </div>
    `;
}

function pending() {
    return `

        <div class="card" aria-hidden="true">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
        </h5>
        <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
        </p>
        <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
        </div>
    </div>
    `
}

function alert() {
    return `
    <div class="alert alert-primary" role="alert">
        Something went wrong.
    </div>
    `
}

window.addEventListener('DOMContentLoaded', async () => {

    const url = 'http://localhost:8000/api/conferences/';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            // Figure out what to do when the response is bad
            const alert_html = alert();
            const alert = document.querySelector('#alert');
            alert.innerHTML = alert_html
        } else {
            // console.log(response);
            const data = await response.json();
            const columns = document.querySelectorAll('.col');
            // console.log(columns);
            // console.log(data.conferences.length);
            // console.log(data.conferences);

            // for (let conference of data.conferences)
            for (let i=0; i<data.conferences.length; i++) {
                // const conference = data.conferences[0];
                // const nameTag = document.querySelector('.card-title');
                // nameTag.innerHTML = conference.name;

                // const html_pending = pending();
                // columns[i % 3].innerHTML += html_pending;

                let conference = data.conferences[i];
                const detailUrl = `http://localhost:8000${conference.href}`;
                const detailResponse = await fetch(detailUrl);

                if (detailResponse.ok) {
                    const details = await detailResponse.json();

                    const name = details.conference.name;
                    const description = details.conference.description;
                    const pictureUrl = details.conference.location.picture_url;
                    const starts = (new Date(details.conference.starts)).toLocaleDateString();
                    const ends = (new Date(details.conference.ends)).toLocaleDateString();
                    const location = details.conference.location.name;
                    const html = createCard(name, description, pictureUrl, starts, ends, location);

                    // for (let column of columns) {
                    //     // console.log(column);
                    //     column.innerHTML += html;
                    // }

                    // columns[i % 3].innerHTML -= html_pending;
                    columns[i % 3].innerHTML += html;
                    // i++;

                    // const detailDescription = details.conference.description;
                    // const textTag = document.querySelector('.card-text');
                    // textTag.innerHTML = detailDescription;

                    // console.log(details);

                    // const detailPicture = details.conference.location.picture_url;
                    // const imgTag = document.querySelector('.card-img-top');
                    // imgTag.src = detailPicture;
                }
            }
        }
    } catch (e) {
        // Figure out what to do if an error is raised
        const alert_html = alert();
        const alert = document.querySelector('#alert');
        alert.innerHTML = alert_html
    }

});
