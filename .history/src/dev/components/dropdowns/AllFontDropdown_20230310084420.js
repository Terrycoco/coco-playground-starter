//for use in selecting project font variables
//dumb component (default passed in value passed out)
import Select, { components } from "react-select";
import { Fragment, useState, useCallback, useEffect, useId } from "react";

import { getFontsByVariable } from "@/utils/fonts";

const AllFontDropdown = ({defaultLabel}) => {
    const [allFonts, setAllFonts] = useState(getFontsByVariable());

    const findOption = (label) => {

    }

    return ()=

    <Select
        defaultValue
        );
}