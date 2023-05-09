import ReactMarkdown from 'react-markdown';

export function PostLink({ post }) {
    const postLink = `/blog/${ post.slug }`;
    const truncatedBody = post.body.substring(0, 100) + `...`;
    return ( 
        <section className='p-8 flex gap-8 items-center border-t border-gray-300'>
            <div>
                <img src="/img/code.webp" class='w-60 aspect-square rounded object-cover' alt="" />
            </div>
            <div>
                <h2 className='text-3xl font-medium'>
                    <a class='hover:underline' href={ postLink }>{ post.data.title }</a>
                </h2>
                <small className='text-sm font-light'>{ post.data.description }</small>

                <article>
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
        { props.posts.map(post => <PostLink post={ post }/> )}
    </section>
    )
}