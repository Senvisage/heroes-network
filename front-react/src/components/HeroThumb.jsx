import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './HeroThumb.css';

class HeroThumb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: props.heroData,
      displayStyle: props.displayStyle
    };
  }
  render() {
    switch (this.state.displayStyle) {
      case 'grid':
        return (
          <div className="heroThumb card col-sm-12 col-md-6 col-lg-3">
            <div className="img-wrapper">
              <img
                className="card-img-top"
                src={this.state.hero.pictureUrl}
                alt={this.state.hero.name}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{this.state.hero.name}</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, non consequitur.
              </p>
              <Button href={`/heroes/${this.state.hero.name}`}>Details</Button>
            </div>
          </div>
        );
      case 'seamless':
        return (
          <div className="heroThumb card col-sm-12 col-md-6 col-lg-3 p-0 border-0">
            <a href={`/heroes/${this.state.hero.name}`}>
              <div className="img-wrapper">
                <img
                  className="card-img-top"
                  src={this.state.hero.pictureUrl}
                  alt={this.state.hero.name}
                />
              </div>
            </a>
          </div>
        );
      default:
        return <p>You may have a problem in your HeroThumb file</p>;
    }
  }
}
export default HeroThumb;
