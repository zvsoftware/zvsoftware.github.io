export function Stars(props) {
    const stars = [];
    const _class = props.className ?? '';
    
    for (let i = 0; i < props.count; i++)
        stars.push(<img src='/img/star.svg' width={ 16 }/>);
    
    return (
        <div className={'flex gap-1 ' + _class}>
            { stars }
        </div>
    );
}

export default function Review(props) {
    const _class = props.className ? ' ' + props.className: '';

    return (
        <div { ...props } className={'shadow p-8 rounded grid place-items-center'  + _class }>
            <div className='text-center'>
                <h3 className='align-middle text-2xl'>{ props.author }<span className='text-base text-gray-300'>{ props.company ? ' - ' + props.company : '' }</span></h3>
                <Stars count={ props.rating } className='justify-center mb-8' />
                <p className='text-2xl'>{ props.children }</p>  
            </div>
        </div>
    );
}