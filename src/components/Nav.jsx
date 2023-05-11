import Logo from "./Logo";

export default function Nav(props) {
    return (
        <nav className='flex gap-10 p-6 bg-white text-black items-center relative z-50 shadow-md'>
                
                <a href="/" className='font-medium text-2xl flex items-center gap-4'>
                    <Logo className='w-12' size='48px'/>
                    <span className='hidden sm:block'>Zoar Valley Software</span>
                </a>
            <a href="/#contact" className='text-xl underline'>Contact</a>
            <a href="/blog" className='text-xl underline'>Blog</a>
        </nav>
    );
}