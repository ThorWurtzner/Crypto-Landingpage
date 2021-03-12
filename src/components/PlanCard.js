import "./PlanCard.scss";

export default function PlanCard(props) {
    return(
        <article className="planCard">
            <section className="planCard__title">
                <h1 className="planCard__title__heading">{props.heading}</h1>
                <p className="planCard__title__summary">{props.summary}</p>
                <p className="planCard__title__price">{props.price}</p>
                <p className="planCard__title__conditions">/user/month*<br/>(billed annually)</p>
                <a href={props.link}>Try for free &gt;</a>
            </section>

            <section className="planCard__features">
                { 
                    props.getfrom ? 
                    <> 
                        <p className="features__getfrom">Get all {props.getfrom} features</p>
                        <h2 className="features__heading">Plus</h2> 
                    </>
                    : <h2 className="features__heading">Features</h2> 
                }

                <ul className="features__list">
                    { props.features.map(feature => <li className="list__item">{feature}</li>) }
                </ul>

            </section>
        </article>
    )
}