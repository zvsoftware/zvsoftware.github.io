export default function Blur(props) {
    return <div className={`${ props.className } rounded-full aspect-square absolute`} style={{ filter: `blur(${ props.blur || 100 }px)` }}></div>
}