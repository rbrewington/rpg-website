import React from 'react';

const RenderActive = ({ stepComponents, ...restProps }) => {
  const { activeIndex = 0, steps } = restProps;
  const currentStep = steps[activeIndex];

  if (!currentStep) {
    console.error(
      `WizardEngine: RenderActive: The current step (${activeIndex}) does not exist.`
    );
    return null;
  }

  const { component, ...restStep } = currentStep;
  const Component = stepComponents[component];

  if (!Component) {
    console.error(
      `WizardEngine: RenderActive: Could not find the component (${component}) specified for step ${activeIndex}.`
    );
    return null;
  }

  return <Component {...restProps} {...restStep} />;
};

export default RenderActive;
