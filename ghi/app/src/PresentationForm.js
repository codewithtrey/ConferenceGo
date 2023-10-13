import React, {useEffect, useState } from 'react';

function PresentationForm () {
  // Here is the old way of creating state hooks for every
  // property. Can you refactor this to make it into a single
  // data object like the ConferenceForm() above?
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [title, setTitle] = useState('')
  const [synopsis, setSynopsis] = useState('')
  const [conference, setConference] = useState('')
  const [conferences, setConferences] = useState([]);

  const fetchData = async () => {
    const url = 'http://localhost:8000/api/conferences/';

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setConferences(data.conferences);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};
    data.presenter_email = email;
    data.presenter_name = name;
    data.company_name = companyName;
    data.title = title;
    data.synopsis = synopsis;
    data.conference = conference;

    console.log(data)

    const conferenceId = data.conference

    const presentationUrl = `http://localhost:8000/api/conferences/${conferenceId}/presentations/`;
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(presentationUrl, fetchConfig);
    if (response.ok) {
      const newConference = await response.json();
      console.log(newConference);

      setName('');
      setEmail('');
      setCompanyName('');
      setTitle('');
      setSynopsis('');
      setConference('')
    }
  }

  // How can we refactor these handleChange methods to make
  // a single method, like the ConferenceForm above?
  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  }

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  }

  const handleCompanyNameChange = (event) => {
    const value = event.target.value;
    setCompanyName(value);
  }

  const handleTitleChange = (event) => {
    const value = event.target.value;
    setTitle(value);
  }

  const handleSynopsisChange = (event) => {
    const value = event.target.value;
    setSynopsis(value);
  }

  const handleConferenceChange = (event) => {
    const value = event.target.value;
    setConference(value);
  }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a new presentation</h1>
          <form onSubmit={handleSubmit} id="create-presentation-form">
            <div className="form-floating mb-3">
              <input value={name} onChange={handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
              <label htmlFor="presenter_name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input value={email} onChange={handleEmailChange} placeholder="Email" required type="text" name="email" id="email" className="form-control" />
              <label htmlFor="presenter_email">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input value={companyName} onChange={handleCompanyNameChange} placeholder="Company Name" required type="text" name="companyName" id="companyName" className="form-control" />
              <label htmlFor="company_name">Company Name</label>
            </div>
            <div className="form-floating mb-3">
              <input value={title} onChange={handleTitleChange} placeholder="Title" required type="text" name="title" id="title" className="form-control" />
              <label htmlFor="title">Title</label>
            </div>
            <div className="mb-3">
              <label htmlFor="synopsis">Synopsis</label>
              <textarea value={synopsis} onChange={handleSynopsisChange} name="synopsis" id="synopsis" className="form-control" rows="3"></textarea>
            </div>
            <div className="mb-3">
              <select value={conference} onChange={handleConferenceChange} required name="conference" id="conference" className="form-select">
                <option value="">Choose a conference</option>
                {conferences.map(conference => {
                  return (
                    <option key={conference.id} value={conference.id}>
                      {conference.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PresentationForm;
