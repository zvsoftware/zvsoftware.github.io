export default function GridSection(props) {
    return (
        <section className={`grid lg:grid-cols-2 gap-16 max-w-screen-xl ${ props.className }`}>
            { props.children }
        </section>
    );
}