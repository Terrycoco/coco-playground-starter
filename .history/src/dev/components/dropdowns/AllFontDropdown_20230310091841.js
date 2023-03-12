//for use in selecting project font variables
//smart component - is connected to store
import Select, { components } from "react-select";
import { Fragment, useState, useCallback, useEffect, useId } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectFonts, selectAllFonts, selectVars } from '@/store/fontsSlice';

const AllFontDropdown = ({category}) => {
    const dispatch = useDispatch();
    const {allFonts} = useSelector(selectAllFonts);
    const {themeFonts} = useSelector(selectFonts);
    

    //load up options only once
    useEffect(() => {
        let opts = [];
        for (const f in allFonts) {
            //label is font name, value is the variable in store
            opts.push({label: allFonts[f], value: f});
        }
        setOptions(opts);

    }, [allFonts]);

    const findOption = () => {

    }


    return ( 

    <Select
        defaultValue=

        );
};

export default AllFontDropdown;