import React, { forwardRef } from 'react';
import './colorpicker.css';

const ColorPicker = forwardRef((props, ref) => {
    return (
        <label>Color
            <input placeholder="Select Color" type="text" ref={ref} />
            {/* color values: [#03E4AC, #04D5FB, #F7903E, #FFD72F, #9665D8, #F94141, #4481D8, #F96E99, #FFFFFF, #9FA1A0] */}
        </label>
        )
    }
)

export default ColorPicker;
