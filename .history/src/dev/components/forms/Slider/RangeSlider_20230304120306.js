import { useState } from 'react'

const RangeSlider = {className, label, onChange, value, ...sliderProps}) => {
    //set initial value to 0 this will change inside useEffect on first render
    const [sliderVal, setSliderVal] = useState(0);
}