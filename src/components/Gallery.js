import Carousel from "react-grid-carousel";
import CarouselItem from "./CarouselItem";

export default function Gallery() {
    return (
        <Carousel cols={1} rows={1} gap={10} autoplay={3000} loop>
            <Carousel.Item>
                <CarouselItem 
                    image="https://picsum.photos/2000?random=1"
                    copy="Vær med fra starten!"
                    ctaLink="/founders"
                    ctaCopy="Klik her, hvis du vil være med"
                />
            </Carousel.Item>

            <Carousel.Item>
                <CarouselItem 
                    image="https://picsum.photos/2000?random=2"
                    copy="Vil du gerne blive klogere?"
                    ctaLink="/news-letter"
                    ctaCopy="Få gratis nyheder"
                />
            </Carousel.Item>

            <Carousel.Item>
                <CarouselItem 
                    image="https://picsum.photos/2000?random=3"
                    copy="Kontakt os for mere"
                    ctaLink="/kontakt"
                    ctaCopy="kontakt"
                />
            </Carousel.Item>
        </Carousel>
    )
}