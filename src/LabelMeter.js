import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

const CustomSegmentLabels = ({score,maxValue}) => (
  <div>
    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}>
      <ReactSpeedometer
        width={200}
        needleHeightRatio={0.50}
        value={score}
        maxValue={maxValue}
        height={100}
        // currentValueText="Happiness Level"
        segments={3}
        valueTextFontSize={"0px"}
        // dimensionUnit={"10px"}
        labelFontSize={"12px"}
        customSegmentLabels={[
          {
            text: "Bad",
            position: "INSIDE",
            color: "#555",
          },
          {
            text: "Average",
            position: "INSIDE",
            color: "#555",
          },
          {
            text: "Good",
            position: "INSIDE",
            color: "#555",
          },
        ]}
        ringWidth={60}
        needleTransitionDuration={3333}
        needleTransition="easeElastic"
        needleColor="#404040"
        textColor={"#d8dee9"}
      />
    </div>
  </div>
);

export default CustomSegmentLabels;
