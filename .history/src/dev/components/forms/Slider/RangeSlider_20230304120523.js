import { useState, useEffect } from 'react'

const RangeSlider = {className, label, onChange, value, ...sliderProps}) => {
    //set initial value to 0 this will change inside useEffect on first render
    const [sliderVal, setSliderVal] = useState(0);


    /* keep mouse state to determine whether i should call parent onChange or not.
    so basically after dragging the slider and then release the mouse 
    then we will call the parent onChange, 
    otherwise parent function will get call each and every change */
    const [mouseState, setMouseState] = useState(null);

    /* set new value on first render and every time value gets changed */
    useEffect(() => {
        setSliderVal(value);
    }, [value]);
}