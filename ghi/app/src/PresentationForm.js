import React from 'react';

class PresentationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            presenterName: '',
            presenterEmail: '',
            companyName: '',
            title: '',
            synopsis: '',
            conferences: [],
        };
        this.handlePresenterNameChange = this.handlePresenterNameChange.bind(this);
        this.handlePresenterEmailChange = this.handlePresenterEmailChange.bind(this);
        this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSynopsisChange = this.handleSynopsisChange.bind(this);
        this.handleConferenceChange = this.handleConferenceChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const url = 'http://localhost:8000/api/conferences/';
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            // console.log(data.conferences);
            this.setState({conferences:data.conferences});
            // console.log(this.state);
            }
        }

    handlePresenterNameChange(event) {
        const value = event.target.value;
        this.setState({presenterName: value});
    }

    handlePresenterEmailChange(event) {
        const value = event.target.value;
        this.setState({presenterEmail: value});
    }

    handleCompanyNameChange(event) {
        const value = event.target.value;
        this.setState({companyName: value});
    }

    handleTitleChange(event) {
        const value = event.target.value;
        this.setState({title: value});
    }

    handleSynopsisChange(event) {
        const value = event.target.value;
        this.setState({synopsis: value});
    }

    handleConferenceChange(event) {
        const value = event.target.value;
        this.setState({conference: value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        data.presenter_name = data.presenterName;
        data.presenter_email = data.presenterEmail;
        data.company_name = data.companyName;
        delete data.presenterName;
        delete data.presenterEmail;
        delete data.companyName;
        delete data.conferences;
        console.log(data);

        const body = JSON.stringify(data);

        const presentationUrl = `http://localhost:8000/api/conferences/${data.conference}/presentations/`;
        const fetchConfig = {
            method: 'post',
            body: body,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(presentationUrl, fetchConfig);

        if (response.ok) {
            const newPresentation = await response.json();
            console.log(newPresentation);

            const cleared = {
                presenterName: '',
                presenterEmail: '',
                companyName: '',
                title: '',
                synopsis: '',
                conferences: [],
            };
            this.setState(cleared);
        }
    }

    render() {
        return (
            <div className="container">
            <div className="row">
                <div id="alert">
                <div></div>
                </div>
                <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a new presentation</h1>
                    <form onSubmit={this.handleSubmit} id="create-presentation-form">
                    <div className="form-floating mb-3">
                        <input onChange={this.handlePresenterNameChange} value={this.state.presenterName} placeholder="Presenter name" required type="text" id="presenter_name" name="presenter_name" className="form-control"/>
                        <label htmlFor="presenter_name">Presenter name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleEmailChange} value={this.state.email} placeholder="Presenter email" required type="email" id="presenter_email" name="presenter_email" className="form-control"/>
                        <label htmlFor="presenter_email">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleCompanyNameChange} value={this.state.companyName} placeholder="Company name" type="text" id="company_name" name="company_name" className="form-control"/>
                        <label htmlFor="company_name">Company name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleTitleChange} value={this.state.title} placeholder="Title" required type="text" id="title" name="title" className="form-control"/>
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea onChange={this.handleSynopsisChange} value={this.state.synopsis} placeholder="Synopsis" required id="synopsis" name="synopsis" className="form-control"></textarea>
                        <label htmlFor="synopsis">Synopsis</label>
                    </div>
                    <div className="mb-3">
                        <select onChange={this.handleConferenceChange} value={this.state.conference} required id="conference" name="conference" className="form-select">
                        <option value="">Choose a conference</option>
                        {this.state.conferences.map(conference => {
                            return (
                                <option key={conference.id} value={conference.id}>
                                    {conference.name}
                                </option>
                            )
                        })}
                        </select>
                    </div>
                    <button className="btn btn-primary">Create</button>
                    </form>
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default PresentationForm;
