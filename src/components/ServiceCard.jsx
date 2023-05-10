export default function ServiceCard(props) {
    return (
        <div className='rounded p-4 grid place-items-center text-center bg-[#1c1c1c] w-100% max-w-[30rem] lg:max-w-[25rem]'>
            <h2 className='text-3xl font-medium mb-8'>{ props.title }</h2>
            <p className='text-gray-100'>{ props.children }</p>

            <a href="/#contact" className='bg-primary btn w-fit block mt-6'>Get a quote</a>
        </div>
    );
}