import Logo from "./Logo";

export default function Nav(props) {
    return (
        <nav className='flex gap-10 p-6 bg-white text-black items-center relative z-50 shadow-md'>
                <div className="flex">
                    <a href="/" className='font-medium text-2xl flex items-center gap-4'>
                        <Logo className='w-12' size='48px'/>
                        <span className='hidden sm:block'>Zoar Valley Software</span>
                    </a>
                </div>
                
                <div class="flex items-center gap-4">
                    <a href="/contact" class="font-bold btn--cta">Contact</a>
                    <a href="https://apps.zoarvalleysoftware.com" target="_blank" class="font-bold">Our Apps</a>
                </div>
                
            {/* <a href="/blog" className='text-xl underline'>Blog</a> */}
        </nav>
    );
}
