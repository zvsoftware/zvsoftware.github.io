export default function ServiceCard(props) {
    return (
        <div className='p-4 grid text-center bg-[#0a0a0a] w-100% max-w-[20rem]'>
            <h2 className='text-3xl font-medium mb-8'>{ props.title }</h2>
            <p className='text-gray-100'>{ props.children }</p>
        </div>
    );
}