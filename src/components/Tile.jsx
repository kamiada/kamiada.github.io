import React, { Component } from "react";
import "./components.scss";
import { Fragment } from "react/cjs/react.production.min";

class Tile extends Component {
  render() {
    return (
      // <Fragment>
      // <div className="img_holder">
      //   <img src={this.props.image} alt={this.props.alt} />
      // </div>
      // <div className="company">
      //   <span>{this.props.company}</span>
      // </div>
      // <div className="tile_education_holder">
      //   <span className="job_title">{this.props.job_title}</span>
      //   <div className="grade">
      //     <span>{this.props.grade}</span>
      //   </div>
      //   <div className="final_project">
      //     <span>{this.props.final_project}</span>
      //   </div>
      // </div>

      // <div className="tile_description_holder">
      //   {this.props.points &&
      //     this.props.points.map((point, key) => (
      //       <p className="description_container" key={`${key}+${point}`}>
      //         {point}
      //       </p>
      //     ))}
      //   {this.props.skills &&
      //     this.props.skills.map((skill, key) => (
      //       <span key={key}>Used technologies: {skill}</span>
      //     ))}
      // </div>
      // </Fragment>
      <Fragment>
        <div className="container_tile_master">
        <div className="img_holder">
            <img src={this.props.image} alt={this.props.alt} />
          </div>
          <div className="company">
            <span>{this.props.company}</span>
          </div>
          <div className="tile_education_holder">
            <span className="job_title">{this.props.job_title}</span>
            <div className="grade">
              <span>{this.props.grade}</span>
            </div>
            {/* <div className="final_project">
              <span>{this.props.final_project}</span>
            </div> */}
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
        </div>
      </Fragment>
    );
  }
}

export default Tile;
