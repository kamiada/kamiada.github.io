import React, { Component } from "react";
import "./components.scss";

class Panel extends Component {
  render() {
    return (
      <button className="parent_square" onClick={this.props.onClick}>
        <img className="square" src={this.props.image} alt={this.props.alt} />
        <div className="overlay">
          <div class="sliding_text"> 
            <a className="details_holder" target="_blank" href={this.props.link} rel="noreferrer">
              {this.props.projectTitle}
            </a>
            {this.props.tags &&
              this.props.tags.map((tag) => {
                return (
                  <div className="tag_container">
                    <div className="tag">{tag}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </button>
    );
  }
}

export default Panel;
