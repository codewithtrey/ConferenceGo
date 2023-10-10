function convertDate(longDate){
    const dateObject = new Date(longDate);
    const month = dateObject.getMonth();
    const day = dateObject.getDate();
    const year = dateObject.getFullYear() % 100;
    return `${month}/${day < 10 ? '0' : ''}${day}/${year < 10 ? '0': ''}${year}`;
}


function createCard(title, description, pictureUrl, starts, ends, locationName) {
    const shortStarts = convertDate(starts)
    const shortEnds = convertDate(ends)
    return `
      <div class="col-md-4 mb-3">
        <div class="card shadow">
          <img src="${pictureUrl}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${locationName}</h6>
            <p class="card-text">${description}</p>
          </div>
          <div class="card-footer text-muted">
            ${shortStarts} - ${shortEnds}
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
            const locationName = details.conference.location;
            const html = createCard(title, description, pictureUrl, starts, ends, location, locationName);
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
