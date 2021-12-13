import React, { Component } from "react";
import "./components.scss";

class Tile extends Component {
  render() {
    return (
      <div className="tile_container">
        <div className="main_tile">
          <span className="company">{this.props.company}</span>
          <span className="job_title">{this.props.job_title}</span>
          <span>{this.props.grade}</span>
          <span>{this.props.final_project}</span>
          {this.props.points &&
            this.props.points.map((point, key) => (
              <ul>
                <li key={key}>{point}</li>
              </ul>
            ))}
          {this.props.skills &&
            this.props.skills.map((skill) => <span>Used technologies: {skill}</span>)}
        </div>

        <div className="tile_image_container">
          <img
            className="tile_image"
            src={this.props.image}
            alt={this.props.alt}
          />
        </div>
      </div>
    );
  }
}

export default Tile;
