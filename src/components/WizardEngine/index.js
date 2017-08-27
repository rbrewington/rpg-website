import React from 'react';

const objectToArray = obj => {
  return Object.keys(obj).map(key => {
    return {
      key,
      ...obj[key],
    };
  });
};

export default class WizardEngine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: this.resolveInitActiveIndex(props),
      steps: this.buildStepsFromConfig(props),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      steps: this.buildStepsFromConfig(nextProps),
    });
  }

  resolveInitActiveIndex = props => {
    const { initActiveIndex } = props;
    let activeIndex = 0;
    if (typeof initActiveIndex === 'function') {
      activeIndex = initActiveIndex(props);
    }

    if (typeof initActiveIndex === 'number') {
      activeIndex = initActiveIndex;
    }

    return activeIndex;
  };

  buildStepsFromConfig = props => {
    const stepArr = objectToArray(props.steps);
    if (stepArr.every(step => !!step.order)) {
      return stepArr.sort((a, b) => a.order - b.order);
    }
    return stepArr;
  };

  setActiveIndex = activeIndex => {
    this.setState({ activeIndex });
  };

  buildChildren = () => {
    const { children, stepComponents } = this.props;
    return React.Children.map(children, child => {
      const newChild = {
        ...child,
        props: {
          ...child.props,
          ...this.state,
          stepComponents,
          setActiveIndex: this.setActiveIndex,
        },
      };
      return newChild;
    });
  };

  render() {
    const { Wrapper } = this.props;
    if (Wrapper) {
      return (
        <Wrapper>
          {this.buildChildren()}
        </Wrapper>
      );
    }
    return (
      <div>
        {this.buildChildren()}
      </div>
    );
  }
}
