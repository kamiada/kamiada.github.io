import React, { Component } from "react";
import "./components.scss";

class Tile extends Component {
  render() {
    return (
      <div className="tile_parent">
        <div className="tile_text_container">
          <span className="company">{this.props.company}</span>
          <span className="job_title">{this.props.job_title}</span>
          <span>{this.props.grade}</span>
          <span>{this.props.final_project}</span>
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
        <div className="tile_img_container">
          <img src={this.props.image} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

export default Tile;
