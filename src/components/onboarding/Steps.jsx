import React from "react";

const Steps =({currentScreen}) => {
  const numSteps = [1, 2, 3, 4]
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-xs flex justify-center mt-12">
      <div className="stepper mt-3">
        <ul className="steps">
          {numSteps.map((item) => {
            return (
              <li
                className={
                  "step " +
                  (currentScreen === item
                    ? "step--incomplete step--active"
                    : currentScreen < item
                    ? "step--incomplete step--inactive"
                    : "step--complete step--inactive")
                }
                key={item}
              >
                <span className="step__icon shadow-sm">{item}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}

export default Steps