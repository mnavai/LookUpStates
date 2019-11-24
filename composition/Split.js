import React from 'react'

function Split(props) {
    const combinedClassName =  `split ${props.className}`;
    const newStyle = {flex: props.flexBasis};
    return (
        <div className={combinedClassName} style={newStyle}>
            {props.children}
        </div>
    );
}

export default Split;
