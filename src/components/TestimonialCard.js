import "./TestimonialCard.scss";

export default function TestimonialCard(props) {
    return (
        <article className="testimonialCard">
            <img src={props.image} />
            <p>{props.copy}</p>
        </article>
    )
}