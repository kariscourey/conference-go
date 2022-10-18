import Nav from './Nav';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';
import PresentationForm from './PresentationForm';
import AttendeeForm from './AttendeeForm';

function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <>
      <Nav />

      <div className="container">
        <AttendeeForm />
        {/* <PresentationForm /> */}
        {/* <ConferenceForm /> */}
        {/* <LocationForm /> */}
        {/* <AttendeesList attendees={props.attendees}/> */}
      </div>

    </>
  );
}

export default App;
