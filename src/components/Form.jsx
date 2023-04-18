
export function Input(props) {
    return (
        <div>
            <label htmlFor={ props.name }>{ props.label || props.name }</label><br />
            <input className='h-8 text-black' type={ props.type || 'text' } name={ props.name } required={ props.required === false ? false : true }/>
        </div>
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