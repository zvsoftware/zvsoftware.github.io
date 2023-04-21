
export function Input(props) {
    return (
        <fieldset>
            <label htmlFor={ props.name }>{ props.label || props.name }</label><br />
            <input className='h-12 text-black' type={ props.type || 'text' } name={ props.name } required={ props.required === false ? false : true }/>
        </fieldset>
    );
}

export function Form(props) {
    return (
        <form 
            className={ props.className }
            action={ props.action } method={ props.method || 'GET' }
        >
            { props.children }
            
        </form>
    );
}