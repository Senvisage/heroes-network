import React, { Component } from 'react';
import HeroThumb from './HeroThumb';

const DEFAULT_STATE = {
  sort: 'level', // id | name | level | class | race
  displayStyle: 'grid' // seamless | grid
};
class HeroCollection extends Component {
  constructor(props) {
    super(props);
    this.state = { heroes: props.heroesData, ...DEFAULT_STATE };
  }

  render() {
    return (
      <div className="row">
        {this.state.heroes
          .filter(hero => {
            const filter = this.props.filter.toLowerCase();
            return (
              hero.name.toLowerCase().includes(filter) ||
              hero.class.toLowerCase().includes(filter) ||
              hero.race.toLowerCase().includes(filter)
            );
          })
          .sort((heroA, heroB) => {
            switch (this.state.sort) {
              case 'id':
                return heroA.id > heroB.id;
              case 'name':
                return heroA.name > heroB.name;
              case 'level':
                return heroA.level > heroB.level;
              case 'class':
                return heroA.class > heroB.class;
              case 'race':
                return heroA.race > heroB.race;
              default:
                return 'We may have a problem there...';
            }
          })
          .map(hero => {
            return (
              <HeroThumb
                key={hero.id}
                heroData={hero}
                filter={this.state.filter}
                displayStyle={this.state.displayStyle}
              />
            );
          })}
      </div>
    );
  }
}
export default HeroCollection;
