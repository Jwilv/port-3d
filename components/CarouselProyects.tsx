
import { Proyects } from '@/data/localData'
import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious
} from './ui/carousel'
import { ProyectItem } from './components/ProyectItem'
import Autoplay from "embla-carousel-autoplay"

const colors = ['violet', 'skyblue', 'velo', 'green', 'blue', 'radial', 'grey']

export const CarouselProyects = () => {
    return (
        <Carousel
            orientation='horizontal'
            plugins={[
                Autoplay({
                    delay: 15000,
                }),
            ]}
            opts={{
                align: "start",
                loop: true,
            }}
        >
            <CarouselContent className="h-[800px] 2xl:w-[1600px] w-[400px] md:w-[800px] xl:w-[1200px]">
                {
                    Proyects.map((proyect, index) => (
                        <ProyectItem
                            key={index}
                            Proyect={proyect}
                            color={colors[index]}
                        />
                    ))
                }
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
