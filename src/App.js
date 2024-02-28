import "./index.css";
import { useState } from "react";

const messages = ["Learn react", "Apply fo jobs", "Invest your new income"];
export default function App() {
  return (
    <div>
      <Steps></Steps>
      <StepMessage step={1}>
        <p>pass in content</p>
        <p>emoji here</p>
      </StepMessage>
    </div>
  );
}

function Steps() {
  // const step = 1;

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: "Jonas" });
  console.log(step, setStep);

  function handlePrevious() {
    // alert("previous");
    // setStep(step <= 1 ? 3 : step - 1);
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    setStep(step >= 3 ? 1 : step + 1);
    setStep(step >= 3 ? 1 : step + 1);

    // bad practice :
    //   test.name = "Fred";
    //   console.log(test.name);
    // good practice:

    // setTest({ name: "Fred" });
    // console.log(test.name);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              {" "}
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      className="buttons"
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
