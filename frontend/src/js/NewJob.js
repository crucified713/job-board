import React, { Component } from 'react';

class NewJob extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title: '',
      location: '',
      description: ''
    }
  }

  handleInputChange(event) {
    const target = event.target,
    value = target.value,
    name = target.name;

    if (value.trim().length !== 0) {
      this.setState({
        [name]: value
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.title.length !== '')
      this.props.toCreateNewJob(this.state);
  }

  render() {
    return (
      <>
        <form className="jobs__form" onSubmit={this.handleSubmit}>
          <h5 className="text-center"> Post New Job</h5 >
          <div className="form-group">
            <label htmlFor="job-title" className="required">Tilte</label>
            <input className="form-control" name="title" id="job-title" placeholder="eg. Administrator" onChange={this.handleInputChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="job-location">Location</label>
            <input className="form-control" name="location" id="job-location" placeholder="eg. Melbourne" onChange={this.handleInputChange} />
          </div>

          <div className="form-group">
            <label htmlFor="job-location">Description</label>
            <textarea className="form-control" name="description" id="job-location" placeholder="Please type description here..." onChange={this.handleInputChange} ></textarea>
          </div>
          <div className="text-right">
            <button disabled={this.state.title.length === 0 ? 'disabled' : false} type="submit" className="btn btn-primary">Post</button>
          </div>
        </form>
      </>
    )
  }

}



export default NewJob;
