export default function Blur(props) {
    return <div className={`${ props.className } rounded-full aspect-square`} style={{ filter: `blur(${ props.blur || 100 }px)` }}></div>
}