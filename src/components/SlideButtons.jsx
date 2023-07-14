export function SlideButton(props) {
    function handleClick(e) {
        console.log("HERE!");
        e.preventDefault();
        e.stopPropagation();

        const y = window.scrollY;
        console.log(y);
        document.querySelector(`${ props.href }`).scrollIntoView();
        window.scrollTo(0, y);
    }

    return <a { ...props } class='bg-slate-200 w-3 aspect-square inline-block rounded-full' onClick={ handleClick }></a>
}

export default function SlideButtons() {
    return (
        <div className='flex gap-2'>
            <SlideButton href="#slide-1"/>
            <SlideButton href="#slide-2"/>
            <SlideButton href="#slide-3"/>
            <SlideButton href="#slide-4"/>
        </div>
    );
}