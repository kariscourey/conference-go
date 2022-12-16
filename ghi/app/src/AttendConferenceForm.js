import React from 'react';

class AttendConferenceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conference: '',
      name: '',
      email: '',
      conferences: [],
      hasSignedUp: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeConference = this.handleChangeConference.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);

  }

  async componentDidMount() {
    const url = 'http://localhost:8000/api/conferences/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      this.setState({ conferences: data.conferences });
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};
    delete data.conferences;
    delete data.hasSignedUp;
    // console.log(data);

    const attendeeUrl = 'http://localhost:8001/api/attendees/';
    const fetchOptions = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const attendeeResponse = await fetch(attendeeUrl, fetchOptions);
    if (attendeeResponse.ok) {
      this.setState({
        conference: '',
        name: '',
        email: '',
        hasSignedUp: true,
      });
    }
  }

  handleChangeConference(event) {
    const value = event.target.value;
    this.setState({ conference: value });
  }

  handleChangeName(event) {
    const value = event.target.value;
    this.setState({ name: value });
  }

  handleChangeEmail(event) {
    const value = event.target.value;
    this.setState({ email: value });
  }

  render() {
    let spinnerClasses = 'd-flex justify-content-center mb-3';
    let dropdownClasses = 'form-select d-none';
    if (this.state.conferences.length > 0) {
      spinnerClasses = 'd-flex justify-content-center mb-3 d-none';
      dropdownClasses = 'form-select';
    }

    let messageClasses = 'alert alert-success d-none mb-0';
    let formClasses = '';
    if (this.state.hasSignedUp) {
      messageClasses = 'alert alert-success mb-0';
      formClasses = 'd-none';
    }

    return (
      <div className="my-5 container">
        <div className="row">
          <div className="col col-sm-auto">
            <img alt='conference go logo' width="300" className="bg-white rounded shadow d-block mx-auto mb-4" src="/cogo-logo.svg" />
          </div>
          <div className="col">
            <div className="card shadow">
              <div className="card-body">
                <form className={formClasses} onSubmit={this.handleSubmit} id="create-attendee-form">
                  <h1 className="card-title">It's Conference Time!</h1>
                  <p className="mb-3">
                    Please choose which conference
                    you'd like to attend.
                  </p>
                  <div className={spinnerClasses} id="loading-conference-spinner">
                    <div className="spinner-grow text-secondary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <select onChange={this.handleChangeConference} name="conference" id="conference" className={dropdownClasses} required>
                      <option value="">Choose a conference</option>
                      {this.state.conferences.map(conference => {
                        return (
                          <option key={conference.id} value={conference.id}>{conference.name}</option>
                        )
                      })}
                    </select>
                  </div>
                  <p className="mb-3">
                    Now, tell us about yourself.
                  </p>
                  <div className="row">
                    <div className="col">
                      <div className="form-floating mb-3">
                        <input onChange={this.handleChangeName} required placeholder="Your full name" type="text" id="name" name="name" className="form-control" />
                        <label htmlFor="name">Your full name</label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-floating mb-3">
                        <input onChange={this.handleChangeEmail} required placeholder="Your email address" type="email" id="email" name="email" className="form-control" />
                        <label htmlFor="email">Your email address</label>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-lg btn-primary">I'm going!</button>
                </form>
                <div className={messageClasses} id="success-message">
                  Congratulations! You're all signed up!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AttendConferenceForm;

// import React from 'react';

// class AttendeeForm extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: '',
//             email: '',
//             conferences: [],
//         };
//         this.handleNameChange = this.handleNameChange.bind(this);
//         this.handleEmailChange = this.handleEmailChange.bind(this);
//         this.handleConferenceChange = this.handleConferenceChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     async componentDidMount() {
//         const url = 'http://localhost:8000/api/conferences/';
//         const response = await fetch(url);

//         if (response.ok) {
//             const data = await response.json();
//             // console.log(data.conferences);
//             this.setState({conferences:data.conferences});
//             // console.log(this.state);
//             }
//     }

//     handleNameChange(event) {
//         const value = event.target.value;
//         this.setState({name: value});
//     }

//     handleEmailChange(event) {
//         const value = event.target.value;
//         this.setState({email: value});
//     }

//     handleConferenceChange(event) {
//         const value = event.target.value;
//         this.setState({conference: value});
//     }

//     async handleSubmit(event) {
//         event.preventDefault();
//         const data = {...this.state};
//         delete data.conferences;
//         console.log(data);

//         const body = JSON.stringify(data);

//         const attendeeUrl = `http://localhost:8001/api/attendees/`;
//         const fetchConfig = {
//             method: 'post',
//             body: body,
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         };

//         const response = await fetch(attendeeUrl, fetchConfig);

//         if (response.ok) {
//             const newAttendee = await response.json();
//             console.log(newAttendee);

//             const cleared = {
//                 name: '',
//                 email: '',
//                 conferences: [],
//             };
//             this.setState(cleared);
//         }
//     }

//     render() {

//         let spinnerClasses = 'd-flex justify-content-center mb-3';
//         let dropdownClasses = 'form-select d-none';

//         if (this.state.conferences.length > 0) {
//             spinnerClasses = 'd-flex justify-content-center mb-3 d-none';
//             dropdownClasses = 'form-select';
//         }


//         return (
//         <div className="container">
//         <div className="my-5">
//         <div className="row">
//             <div className="col col-sm-auto">
//             <img width="300" className="bg-white rounded shadow d-block mx-auto mb-4" src="/cogo-logo.svg"/>
//             </div>
//             <div className="col">
//             <div className="card shadow">
//                 <div className="card-body">
//                 <form onSubmit={this.handleSubmit} id="create-attendee-form">
//                     <h1 className="card-title">It's Conference Time!</h1>
//                     <p className="mb-3">
//                     Please choose which conference
//                     you'd like to attend.
//                     </p>
//                     <div className={spinnerClasses} id="loading-conference-spinner">
//                     <div className="spinner-grow text-secondary" role="status">
//                         <span className="visually-hidden">Loading...</span>
//                     </div>
//                     </div>
//                     <div className="mb-3">
//                     <select onChange={this.handleConferenceChange} value={this.state.conference} name="conference" id="conference" className={dropdownClasses} required>
//                         <option value="">Choose a conference</option>
//                         {this.state.conferences.map(conference => {
//                             return (
//                                 <option key={conference.id} value={conference.id}>
//                                     {conference.name}
//                                 </option>
//                             )
//                         })}
//                     </select>
//                     </div>
//                     <p className="mb-3">
//                     Now, tell us about yourself.
//                     </p>
//                     <div className="row">
//                     <div className="col">
//                         <div className="form-floating mb-3">
//                         <input onChange={this.handleNameChange} value={this.state.name} required placeholder="Your full name" type="text" id="name" name="name" className="form-control"/>
//                         <label htmlFor="name">Your full name</label>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <div className="form-floating mb-3">
//                         <input onChange={this.handleEmailChange} value={this.state.email} required placeholder="Your email address" type="email" id="email" name="email" className="form-control"/>
//                         <label htmlFor="email">Your email address</label>
//                         </div>
//                     </div>
//                     </div>
//                     <button className="btn btn-lg btn-primary">I'm going!</button>
//                 </form>
//                 <div className="alert alert-success d-none mb-0" id="success-message">
//                     Congratulations! You're all signed up!
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//         </div>
//     </div>
//         );
//     }
// }

// export default AttendeeForm;
