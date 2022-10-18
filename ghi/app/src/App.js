import Nav from './Nav';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';
import PresentationForm from './PresentationForm';
import AttendConferenceForm from './AttendConferenceForm';
import MainPage from './MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
            <Route index element={<MainPage />} />
            <Route path="conferences">
                <Route path="new" element={<ConferenceForm />}></Route>
            </Route>
            <Route path="attendees">
                <Route path=""  element={<AttendeesList attendees={props.attendees} />}></Route>
                <Route path="new" element={<AttendConferenceForm />}></Route>
            </Route>
            <Route path="locations">
                <Route path="new" element={<LocationForm />}></Route>
            </Route>
            <Route path="presentations">
                <Route path="new" element={<PresentationForm />}></Route>
            </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
