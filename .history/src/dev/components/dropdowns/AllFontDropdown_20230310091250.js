//for use in selecting project font variables
//smart component - is connected to store
import Select, { components } from "react-select";
import { Fragment, useState, useCallback, useEffect, useId } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectFonts, selectAllFonts, selectVars } from '@/store/fontsSlice';

const AllFontDropdown = ({category}) => {
    const dispatch = useDispatch();
    const [allFonts, setAllFonts] = useSelector(selectAllFonts);
    const [options, setOptions] = useState([]);
    const {themeFonts} = useSelector(selectFonts);

    //load up options only once
    useEffect(() => {
        let opts = [];
        if (allFonts) {
            for (const f in allFonts) {
                opts.push({label: allFonts[f], value: f});
            }
            setOptions(opts);
        }
    }, []);


    return () =

    <Select
        defaultValue=
        );
}