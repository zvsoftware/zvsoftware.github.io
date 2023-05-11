import ReactMarkdown from 'react-markdown';

export function PostLink({ post }) {
    const postLink = `/blog/${ post.slug }`;
    let hasTruncated = false;
    if (post.body.length > 280) {
        post.body = post.body.substring(0, 280) + `...`;
        hasTruncated = true;
    }
    
    return ( 
        <section className='py-4 flex gap-8 border-t border-gray-300'>
            {
                post.data.image 
                ? <img src={ post.data.image } class='hidden md:block [grid-column:1] min-w-[7rem] w-60 aspect-square rounded object-cover' alt="" />
                : ''
            }
            
            <div className='md:[grid-column:2/-1] [grid-column:1/-1]'>
                <h2 className='text-3xl font-medium'>
                    <a class='hover:underline' href={ postLink }>{ post.data.title }</a>
                </h2>
                <small className='text-sm font-light'>{ post.data.description }</small>

                <article className='w-100%'>
                    <ReactMarkdown className='inline-block mb-4'>
                        { post.body }
                    </ReactMarkdown>

                    { 
                        hasTruncated
                        ? <a href={ postLink } className='block w-fit p-2 border bg-slate-100 hover:bg-slate-50'>Read More</a>
                        : ''
                    }

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