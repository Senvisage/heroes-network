import React, { Component } from 'react';
const axios = require('axios');

const DEFAULT_STATE = {
  sort: 'level', // id | name | level | class | race
  displayStyle: 'seamless', // seamless | grid
  hero: {
    class: 'N/A',
    id: 'N/A',
    level: 'N/A',
    name: 'N/A',
    pictureUrl: 'N/A',
    race: 'N/A'
  }
};
class HeroDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { ...DEFAULT_STATE };
  }
  componentDidMount() {
    axios
      .create({
        baseURL: 'http://localhost:8080/',
        timeout: 1000
      })
      .get('/heroes/' + this.props.match.params.name)
      .then(response => {
        const hero = response.data;
        this.setState({ hero });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    const hero = this.state.hero;
    return (
      <div className="container">
        <div className="row">
          <img
            className="col-sm-0 col-md-6"
            src={hero.pictureUrl}
            alt={hero.name}
          />
          <h2 className="col-xs-3 col-md-6">{hero.name}</h2>
        </div>
      </div>
    );
  }
}
export default HeroDetails;
