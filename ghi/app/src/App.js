import Nav from './Nav';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm'
import AttendConferenceForm from './AttendConferenceForm'
import PresentationForm from './PresentationForm'
import {BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from './MainPage';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path ="home">
            <Route path="" index element={<MainPage />} />
          </Route>
          <Route path ="locations">
            <Route path="new" element={<LocationForm />} />
          </Route>
          <Route path ="presentations">
            <Route path="new" element={<PresentationForm />} />
          </Route>
          <Route path ="conferences">
            <Route path="new" element={<ConferenceForm />} />
          </Route>
          <Route path ="attendees">
            <Route path="" index element={<AttendeesList attendees={props.attendees} />} />
            <Route path="new" element={<AttendConferenceForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
