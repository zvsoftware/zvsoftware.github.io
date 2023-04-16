export default function GridSection(props) {
    const _class = props.className ? ' ' + props.className: '';
    return (
        <section className={`grid gap-16 max-w-screen-xl${ _class }`}>
            { props.children }
        </section>
    );
}