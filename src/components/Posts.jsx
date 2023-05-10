import ReactMarkdown from 'react-markdown';

export function PostLink({ post }) {
    const postLink = `/blog/${ post.slug }`;
    const truncatedBody = post.body.substring(0, 100) + `...`;
    return ( 
        <section className='py-4 grid grid-cols-4 gap-8 place-items-center border-t border-gray-300'>
            <img src="/img/code.webp" class='hidden md:block [grid-column:1] min-w-[7rem] w-60 aspect-square rounded object-cover' alt="" />
            <div className='md:[grid-column:2/-1] [grid-column:1/-1]'>
                <h2 className='text-3xl font-medium'>
                    <a class='hover:underline' href={ postLink }>{ post.data.title }</a>
                </h2>
                <small className='text-sm font-light'>{ post.data.description }</small>

                <article className='w-100%'>
                    <ReactMarkdown className='inline-block mb-4'>
                        { truncatedBody }
                    </ReactMarkdown>

                    <a href={ postLink } className='block w-fit p-2 border bg-slate-100 hover:bg-slate-50'>Read More</a>
                </article>
            </div>
        </section>
    )
}

export default function Posts(props) {
    return (
    <section className='grid gap-8 max-w-screen-md'>
        { 
            props.posts.length 
            ? props.posts.map(post => <PostLink post={ post }/> )
            : <h1 className='text-4xl font-medium'>No posts written yet!</h1>
        }
    </section>
    )
}