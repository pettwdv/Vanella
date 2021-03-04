import React, {useState} from 'react';

function CountryForm(props){

    const [formValue, setFormValue] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addNewCountry (formValue)
        setFormValue("")

    }

    const handleNewCountry = (event) => {
       setFormValue(event.target.value)

    }

    return (
        <form onSubmit = {handleSubmit}>
        <input value = {formValue} onChange={handleNewCountry} placeholder="Add New Destination" />
        </form>
    )

}

export default CountryForm