const Languageoption=(props)=>{
    return(
        <select onChange={props.onChange}>
            <option>Select Language</option>
            <option value={'en'}>English</option>
            <option value={'hn'}>Hindi</option>
        </select>
    )
}

export default Languageoption;