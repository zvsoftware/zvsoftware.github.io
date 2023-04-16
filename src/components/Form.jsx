
export function Input(props) {
    return (
        <div>
            <label htmlFor={ props.name }>{ props.label || props.name }</label><br />
            <input className='h-8' type={ props.type || 'text' } name={ props.name } required={ props.required || true }/>
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