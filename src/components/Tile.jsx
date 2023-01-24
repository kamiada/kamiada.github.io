import React, { Component } from "react";
import "./components.scss";
import { Fragment } from "react/cjs/react.production.min";

class Tile extends Component {
  render() {
    return (
      <Fragment>
        <div className="img_holder">
          <img src={this.props.image} alt={this.props.alt} />
        </div>
        <div>
          <span className="company">{this.props.company}</span>
        </div>
        <div className="tile_education_holder">
          <span className="job_title">{this.props.job_title}</span>
          <span>{this.props.grade}</span>
          <span>{this.props.final_project}</span>
        </div>

        <div className="tile_description_holder">
          {this.props.points &&
            this.props.points.map((point, key) => (
              <p className="description_container" key={`${key}+${point}`}>
                {point}
              </p>
            ))}
          {this.props.skills &&
            this.props.skills.map((skill, key) => (
              <span key={key}>Used technologies: {skill}</span>
            ))}
        </div>
      </Fragment>
    );
  }
}

export default Tile;
