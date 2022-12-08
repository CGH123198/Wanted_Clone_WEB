import UnivSearch from "./univeSearch";


import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";

import { searchUniversityAction } from "../../../../store/actions/university";


const UnivSearchContainer = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState();
    const [result, setResult] = useState();
    const { university } = useSelector(({university}) => ({
        university: university.search
    }))

    const onChange = e => {
        setSearch(e.target.value)
        dispatch(searchUniversityAction(e.target.value));
    }

    useEffect(() => {
        if(university) {
            setResult(university.map(school => school.replace(`${search}`, `<span>${search}</span>`)  ))
        }
    }, [university]);

    return (
        <UnivSearch onChange={onChange} university={result} search={search}/>
    )
}

export default UnivSearchContainer;