import "./CarouselItem.scss";

export default function CarouselItem(props) {
    return (
        <div className="carouselItem">
            <img src={props.image} alt="" />
            <div>
                <p>{props.copy}</p>
                <a href={props.ctaLink}>{props.ctaCopy}</a>
            </div>
        </div>
    )
}