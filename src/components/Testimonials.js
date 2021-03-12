import "./Testimonials.scss";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
    return (
        <section className="testimonials">
            <TestimonialCard image="https://picsum.photos/700?random=1" copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit maiores culpa repudiandae facilis porro sint ducimus in praesentium? Amet officia nostrum deserunt labore delectus minima blanditiis repudiandae" />
            <TestimonialCard image="https://picsum.photos/700?random=2" copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit maiores culpa repudiandae facilis porro sint ducimus in ilis porro sint ducimus in praesentium? Amet officia" />
            <TestimonialCard image="https://picsum.photos/700?random=3" copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit maiores culpa repudiandae facilis porro sint ducimus in praesentiu" />
        </section>
    )
}
