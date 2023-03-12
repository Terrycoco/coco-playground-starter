//for use in selecting project font variables
//smart component - is connected to store
import Select, { components } from "react-select";
import { Fragment, useState, useCallback, useEffect, useId } from "react";
import { getFontsByVariable } from "@/utils/fonts";
import { useSelector, useDispatch } from 'react-redux';
import { selectFonts, selectVars } from '@/store/fontsSlice';

const AllFontDropdown = ({category}) => {
    const dispatch = useDispatch();
    const [allFonts, setAllFonts] = useState(getFontsByVariable());
    const []
    const [options, setOptions] = useState([]);
    const {themeFonts} = useSelector(selectFonts);

    useEffect(() => {
        if (allFonts) {
            for (const font in allFonts) {

            }
        }
    })
    return () =

    <Select
        defaultValue=
        );
}