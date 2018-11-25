import React, { Component } from 'react';

import './controller.css';

const dummyArray = {
  '176-15': {
    name: 'space lander',
    status: 'ready',
    on: false
  },
  '67': {
    name: 'oooh',
    status: 'ready',
    on: false
  },
  '66': {
    name: 'dark pad',
    status: 'ready',
    on: false
  },
  '176-18': {
    name: 'atari crunch',
    status: 'ready',
    on: false
  },
  '52': {
    name: 'kick',
    status: 'ready',
    on: false
  },
  '55': {
    name: 'snare',
    status: 'ready',
    on: false
  },
  '54': {
    name: 'closed hat',
    status: 'ready',
    on: false
  },
  '53': {
    name: 'crash',
    status: 'ready',
    on: false
  },
  '123': {
    name: 'breakdown loop',
    status: 'ready',
    on: false
  },
  '177-12': {
    name: 'disco loop',
    status: 'ready',
    on: false
  },
  '177-13': {
    name: 'swing loop',
    status: 'ready',
    on: false
  },
  '177-14': {
    name: "80's party",
    status: 'ready',
    on: false
  },
  '177-99': {
    name: 'disco loop',
    status: 'ready',
    on: false
  },
  '177-98': {
    name: 'swing loop',
    status: 'ready',
    on: false
  },
  '177-97': {
    name: "80's party",
    status: 'ready',
    on: false
  },
  '177-96': {
    name: "80's party",
    status: 'ready',
    on: false
  }
};

class Controller extends Component {
  constructor(props) {
    super(props);

    this.state = {
      midiEnabled: false,
      controllerName: 'N/A'
    };
  }

  handleClick(event) {
    const control = event.target.id;
    const isActive = true;

    if (control) {
      this.props.samples[control].on = true;
      this.props.samples[control].howl.play();

      setTimeout(() => {
        this.props.samples[control].on = false;
        return this.setState({
          [control]: isActive
        });
      }, 150);

      return this.setState({
        [control]: isActive
      });
    }
  }

  createPad(sample) {
    return (
      <div className="pad-area">
        <button
          className="pad"
          key={sample}
          id={sample}
          style={sample.on ? { backgroundColor: 'yellow', color: 'black' } : {}}
          onClick={this.handleClick.bind(this)}
        >
          {sample.name}
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="controller-wrapper">
        <div className="stage">
          <div className="scene">
            <div className="cube">
              <div className="cube__face cube__face--front" />
              <div className="cube__face cube__face--back" />
              <div className="cube__face cube__face--right" />
              <div className="cube__face cube__face--left" />
              <div className="cube__face cube__face--top">
                <div className="controller">
                  {Object.keys(dummyArray).map(sample =>
                    this.createPad(sample)
                  )}
                </div>
              </div>
              <div className="cube__face cube__face--bottom" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Controller;
