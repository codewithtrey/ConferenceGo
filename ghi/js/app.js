function createCard(title, description, pictureUrl, starts, ends) {
    return `
      <div class="col-md-4 mb-3">
        <div class="card shadow">
          <img src="${pictureUrl}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
          </div>
          <div class="card-footer text-muted">
            ${starts} - ${ends}
          </div>
        </div>
      </div>
    `;
  }




  window.addEventListener('DOMContentLoaded', async () => {

    const url = 'http://localhost:8000/api/conferences/';

    try {
      const response = await fetch(url);

      if (!response.ok) {
        // Figure out what to do when the response is bad
      } else {
        const data = await response.json();

        for (let conference of data.conferences) {
          const detailUrl = `http://localhost:8000${conference.href}`;
          const detailResponse = await fetch(detailUrl);
          if (detailResponse.ok) {
            const details = await detailResponse.json();
            console.log(details)
            const title = details.conference.name;
            const starts = details.conference.starts;
            const ends = details.conference.ends;
            const description = details.conference.description;
            const pictureUrl = details.conference.location.picture_url;
            const html = createCard(title, description, pictureUrl, starts, ends);
            const row = document.querySelector('#conferences-row');
            row.innerHTML += html;
          }
        }

      }
    } catch (e) {
        console.error(e);
      // Figure out what to do if an error is raised
    }

  });
