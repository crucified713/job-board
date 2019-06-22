import React, { Component } from 'react';
import NewJob from './NewJob';
import Jobs from './Jobs';
import '../scss/main.scss';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      isAdding: false,
    }
    this.apiUrl = 'http://localhost:8000//api';
    this.createNewJob = this.createNewJob.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
  }
  
  componentDidMount() {
    fetch(`${this.apiUrl}/jobs`)
      .then((response) => response.json())
      .then((jobs) => {
        this.setState({ jobs: jobs});
      })
      .catch(error => console.error('Error:', error));
  }

  deleteJob(jobToDelete) {
    const msg = `Are you sure you want to delete this Job "${jobToDelete.title}"?`;
    if (window.confirm(msg)) {
      fetch(`${this.apiUrl}/jobs/${jobToDelete.id}`, {
        method: 'delete',
      })
      .then((response) => response.json())
      .then(() => {
        this.setState((prevState) => {
          return {
            jobs: prevState.jobs.filter((job) => {
              return job.id !== jobToDelete.id
            })
          }
        });
      })
      .catch(error => console.error('Error:', error));
    }
  }

  createNewJob(result) {
    fetch(`${this.apiUrl}/jobs`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(result)
    })
    .then(response => response.json())
    .then((newJob) => {
      this.setState((prevState) => {
        return {
          jobs: prevState.jobs.concat(newJob)
        }
      });
    })
    .catch(error => console.error('Error:', error));
  }
  
  render() {
    return (
      <div className="app container">
        <h3 className="text-center">Job Board</h3>
        <div className="row">
          <div className="col-8">
            <Jobs 
              jobs={this.state.jobs}
              toDeleteJob={this.deleteJob}
            />
          </div>
          <div className="col-4">
            <NewJob 
              toCreateNewJob={this.createNewJob}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
