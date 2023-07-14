export function Stars(props) {
    const stars = [];
    
    for (let i = 0; i < props.count; i++)
        stars.push(<img src='/img/star.svg' width={ 16 }/>);
    
    return (
        <div className='flex gap-1'>
            { stars }
        </div>
    );
}

export default function Review(props) {
    const _class = props.className ? ' ' + props.className: '';

    return (
        <div { ...props } className={'bg-slate-800 shadow p-8 rounded grid place-items-center'  + _class }>
            <div>
                <h3 className='align-middle'>{ props.author }<span className='text-sm text-gray-300'>{ props.company ? ' - ' + props.company : '' }</span></h3>
                <Stars count={ props.rating } />
                <p className='mt-4'>{ props.children }</p>  
            </div>
        </div>
    );
}