import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

const styles = {
  dial: {
    display: "inline-block",
    width: `auto`,
    height: `auto`,
    fontFamily: "arial",
    backgroundColor: "#ffff",
    marginTop:"10px",
    marginLeft:"0px"
  },
};

const Speedometer = ({ value,maxvalue,slot=10}) => {
  return (
    <div style={styles.dial}>
      <ReactSpeedometer
        maxValue={maxvalue}
        minValue={0}
        height={107}
        width={190}
        value={value}
        valueTextFontSize={"0px"}
        needleHeightRatio={0.65}
        needleTransition="easeQuadIn"
        needleTransitionDuration={1000}
        needleColor="#404040"
        ringWidth={20}
        segments={maxvalue/slot}
        endColor="#86C135"
        startColor="#B92828"
      />
    </div>
  );
};

export default Speedometer;
