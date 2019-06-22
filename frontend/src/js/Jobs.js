import React from 'react';
import Job from './Job';

function Jobs(props)  {
  return (
    <ul className="list-group list-group-flush">
      {
        props.jobs.length > 0
          ?
          props.jobs.map((job) => {
            return (
              <li
                key={job.id}
                className="list-group-item">
                <div className="row">
                  <div className="col-10">
                    <Job
                      title={job.title}
                      location={job.location}
                      description={job.description}
                      />
                  </div>
                  <div className="col-2">
                    <button type="button" className="btn btn-sm btn-danger " onClick={() => props.toDeleteJob(job)}>Delete</button>
                  </div>
                </div>
              </li>
            )
          })
          :
          <p>No jobs at the moment, please add.</p>
      }
    </ul>
  );
}

export default Jobs;