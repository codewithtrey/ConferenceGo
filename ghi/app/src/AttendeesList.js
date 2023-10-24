import { useState, useEffect } from "react";

function AttendeesList() {
  const [attendees, setAttendee] = useState([]);

  async function handleDelete(event, attendeeId) {
    const fetchOptions = {
      method: "DELETE",
    };
    const request = await fetch(
      `http://localhost:8001/api/attendees/${attendeeId}/`,
      fetchOptions
    );

    if (request.ok) {
      loadAttendees();
    }
  }

  async function loadAttendees() {
    const response = await fetch("http://localhost:8001/api/attendees/");
    if (response.ok) {
      const data = await response.json();
      setAttendee(data.attendees);
    } else {
      console.error(response);
    }
  }

  useEffect(() => {
    loadAttendees();
  }, []);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Conference</th>
        </tr>
      </thead>
      <tbody>
        {attendees?.map((attendee) => {
          return (
            <tr key={attendee.href}>
              <td>{attendee.name}</td>
              <td>{attendee.conference}</td>
              <td>
                <button onClick={(e) => handleDelete(e, attendee.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default AttendeesList;
