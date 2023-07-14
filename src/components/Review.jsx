export function Stars(props) {
    const stars = [];
    const _class = props.className ? ' ' + props.className: '';
    for (let i = 0; i < props.count; i++) {
        stars.push(<img src='/img/star.svg' width={ 16 }/>);
    }
    return (
        <div className={ 'flex gap-1' + _class }>
            { stars }
        </div>
    );
}

export default function Review(props) {
    return (
        <div className='bg-slate-800 shadow p-4 rounded'>
            <h3 className='align-middle'>{ props.author }<span className='text-sm text-gray-300'>{ props.company ? ' - ' + props.company : '' }</span></h3>
            <Stars count={ props.rating } />
            <p className='mt-4'>{ props.review }</p>  
        </div>
    );
}