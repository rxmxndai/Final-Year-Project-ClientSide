import { ProgressBar, Step } from "react-step-progress-bar";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const StatusWrapper = styled.div`
  background-color: #ffffff;
  cursor: pointer;
`;

const IconWrapper = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.color && props.color};
  background-color: ${(props) => props.bg && props.bg};
  padding: 10px 20px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

const MultiStepProgressBar = styled.div`
  width: 50%;
`;

const CheckoutSteps = ({ step }) => {

// for progressbar
  const steps = [
    {
      name: "Shipping"
    },
    {
      name: "Confirmation"
    },
    {
      name: "Payment"
    },
  ];


  return (
    <Container>
      <MultiStepProgressBar>
        <ProgressBar
          percent={step}
          filledBackground="linear-gradient(to right, #2c8fffd3, #4effb8e8)"
        >
          {steps.map((step, index) => (
            <Step key={index} transition="scale">
              {({ accomplished }) =>
                accomplished ? (
                  <StatusWrapper >
                    <IconWrapper color={"#ffffff"} bg={"#0171b6"}>
                      {step.name}
                    </IconWrapper>
                  </StatusWrapper>
                ) : (
                  <StatusWrapper>
                    <IconWrapper color={""} bg={"#ffffff"}>
                      {step.name}
                    </IconWrapper>
                  </StatusWrapper>
                )
              }
            </Step>
          ))}
        </ProgressBar>
      </MultiStepProgressBar>
    </Container>
  );
};

export default CheckoutSteps;
