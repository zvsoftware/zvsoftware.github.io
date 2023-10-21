import { useEffect, useState } from 'react';

export function SlideButton(props) {
    function handleClick(e) {
        props.onClick();

        e.preventDefault();
        e.stopPropagation();


        const y = window.scrollY;
        document.querySelector(`${ props.href }`).scrollIntoView();
        window.scrollTo(0, y);
    }

    return <a style={{ backgroundColor: props.isActive ? 'white': '' }}  className={`bg-slate-500 w-4 aspect-square inline-block rounded-full`} onClick={ handleClick }></a>
}

export default function SlideButtons(props) {
    const [activeSlide, setActiveSlide] = useState(0);
    const [slideButtons, setSlideButtons] = useState(null);

    const slider = document.querySelector('.slider');
    const slideWidth = slider.clientWidth

    slider.addEventListener("scroll", e => {
        // Calculate the current slide num based off of the scroll offset and the width of the slide.
        const scrollOffset = e.target.scrollLeft;
        if (scrollOffset % slideWidth === 0) {
            const slideNum = scrollOffset / slideWidth;
            setActiveSlide(slideNum);
        }
    });

    useEffect(() => {
        const btns = [];
        for (let i = 0; i < props.count; i++) {
            const href = `#slide-${ i }`;
            const isActive = `#slide-${ activeSlide }` === href;
            btns.push(
                <SlideButton 
                    key={ i } 
                    isActive={ isActive } 
                    href={ href } 
                    onClick={ () => setActiveSlide(i) }
                />
            );
        }

        setSlideButtons(btns);
    }, [activeSlide]);

    return (
        <div className='flex gap-2'>
            { slideButtons }            
        </div>
    );
}