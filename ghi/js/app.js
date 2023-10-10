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
        document.getElementById("error-alert").innerHTML = "An error occurred.";

        // document.getElementById("error-alert").style.display = "block";

      } else {
        const data = await response.json();

        for (let conference of data.conferences) {
          const detailUrl = `http://localhost:8000${conference.href}`;
          const detailResponse = await fetch(detailUrl);
          if (detailResponse.ok) {
            const details = await detailResponse.json();
            const title = details.conference.name;
            const starts = details.conference.starts;
            const ends = details.conference.ends;
            const description = details.conference.description;
            const pictureUrl = details.conference.location.picture_url;
            const locationName = details.conference.location.name;
            const html = createCard(title, description, pictureUrl, starts, ends, locationName);
            const row = document.querySelector('#conferences-row');
            row.innerHTML += html;
          }
        }

      }
    } catch (e) {
      // Figure out what to do if an error is raised
        document.getElementById("error-alert").style.display = "block";
        document.getElementById("error-alert").innerHTML = "An error occurred.";
    }

  });
