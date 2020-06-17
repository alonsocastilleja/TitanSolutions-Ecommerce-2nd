import React from "react";

const ImgComp = ({ src }) => {
    let imgStyles={
        width: 100 + "%",
        height: 80 + "vh"
    }
    return <img src={src} alt="hello" style={imgStyles}></img>
}

export default ImgComp;