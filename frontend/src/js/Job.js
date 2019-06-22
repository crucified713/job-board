import React, { Component } from 'react';

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true
    }
    this.toggleDetail = this.toggleDetail.bind(this);
  }

  toggleDetail() {
    this.setState((prevState) => {
      return {isCollapsed: !prevState.isCollapsed}
    });
  }

  render() {
    return (
      <article>
        <h5 className="jobs__title" onClick={this.toggleDetail}>{(this.state.isCollapsed ? '+ ' : '- ') + this.props.title}</h5>
        <div className={"jobs__collapse " + (this.state.isCollapsed ? "" : "jobs__collapse--show")}>

          <p><small><strong>Location: </strong>{this.props.location ? this.props.location : 'No locations'}</small></p>
          <br/>
          <p>{this.props.description ? this.props.description : 'No description'}</p>
          <br />
        </div>
      </article>
    );
  }
}

export default Job;