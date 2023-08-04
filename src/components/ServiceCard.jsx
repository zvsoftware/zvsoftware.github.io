export default function ServiceCard(props) {
    return (
        <div className={`border border-gray-800 rounded px-4 py-8 grid place-items-center text-center w-100% max-w-[30rem] lg:max-w-[25rem] ${ props.className }`}>
            <h2 className='text-3xl font-medium mb-8'>{ props.title }</h2>
            <p className='text-gray-100'>{ props.children }</p>

            <a href="/#contact" className='bg-primary btn w-fit block mt-6'>Get a quote</a>
        </div>
    );
}