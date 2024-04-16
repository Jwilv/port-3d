import Image from "next/image"
import { Button } from "../ui/button"
import { BlackBg } from "@/assets"
import { handleDescargarCV } from "@/lib/download-cv"


export const About = () => {
    return (
        <div className="w-screen h-screen md:flex" id="about">
            <div className="md:w-1/2 w-auto mr-10 flex flex-col justify-center md:items-start items-center">
                <div className="md:ml-[180px] ml-10 items-center justify-center flex-wrap">
                    <span className="text-xl">Sobre mi</span>
                    <p className="font-semibold md:text-3xl text-2xl md:w-[580px] mt-10">
                    Soy un desarrollador Front-End con tres años de experiencia especializado en la creación y ejecución de proyectos tecnológicos innovadores. Mi pasión radica en desarrollar soluciones eficientes y vanguardistas, respaldadas por mi expertise en tecnologías como React, React Native, Nest, TypeScript y Node.js.
                    </p>
                    <p className="font-semibold md:text-3xl text-2xl md:w-[580px] mt-10">
                    Mi destreza se refleja en mi capacidad para abordar desafíos complejos y convertir los requisitos comerciales en código funcional de alta calidad. Disfruto enfrentando problemas difíciles y colaborando estrechamente con equipos multidisciplinarios para lograr resultados sobresalientes.
                    </p>
                    <Button
                        className="mt-10 w-[200px] h-[50px]"
                        onClick={handleDescargarCV}
                    >
                    Descargar Cv
                    </Button>
                </div>
            </div>

            <div className="md:w-1/2 w-full mt-10 flex justify-center items-center invisible lg:visible">
                <div className="h-[474px] w-[530px] bg-black flex justify-center items-center rounded-2xl">
                    <Image
                        src={BlackBg}
                        alt="Picture of the author"
                    />
                </div>
            </div>
        </div>
    )
}
