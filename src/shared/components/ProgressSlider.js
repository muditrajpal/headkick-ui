import React from "react";
import styled from "styled-components";

const ProgressSliderContainer = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  background: #e6e6e6;
  outline: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #8fc9ff;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
  }

  ::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border: 2px solid #8fc9ff;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
  }
`;

const ProgressSlider = (props) => (
  <ProgressSliderContainer
    type="range"
    min={props.min}
    max={props.max}
    value={props.value}
    style={props.customCss}
    onChange={props.onChange}
  />
);

export default ProgressSlider;
