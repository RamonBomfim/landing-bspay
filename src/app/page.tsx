import { Divider } from "@/components/Divider";
import {
  GearSix,
  Lock,
  PencilSimple,
  Play,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import person from "../assets/welcome-photo.png";

export default function Home() {
  return (
    <>
      <section className="flex justify-center w-full min-h-[29.875rem] md:px-[1.375rem] bg-gray-white md:bg-gradient-linear md:border-b-4 md:border-green-primary">
        <div className="flex flex-col w-full h-full md:relative md:flex-row md:max-w-7xl">
          <article className="flex flex-col gap-[1.875rem] px-[1.375rem] pb-[1.625rem] bg-gradient-linear border-b-4 border-green-primary md:px-0 md:bg-gradient-to-r md:from-inherit md:to-inherit md:border-0">
            <h1 className="max-w-[21.5625rem] font-jakarta font-bold text-blue-text text-3xl">
              Gateway de pagamentos mais completo e{" "}
              <span className="text-3xl font-jakarta font-bold text-green-primary">
                seguro do mercado
              </span>
            </h1>

            <div className="flex items-center justify-between w-[20.5rem] h-[4.375rem]">
              <div className="flex flex-col items-center gap-3">
                <h2 className="text-3xl font-jakarta font-bold text-blue-text">
                  90
                  <span className="text-3xl font-jakarta font-bold text-green-primary">
                    +
                  </span>
                </h2>
                <span className="text-xs font-jakarta font-bold text-gray-border">
                  Parceiras
                </span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <h2 className="text-3xl font-jakarta font-bold text-blue-text">
                  310
                  <span className="text-3xl font-jakarta font-bold text-green-primary">
                    +
                  </span>
                </h2>
                <span className="text-xs font-jakarta font-bold text-gray-border">
                  Usuários ativos
                </span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <h2 className="text-3xl font-jakarta font-bold text-blue-text">
                  952k
                  <span className="text-3xl font-jakarta font-bold text-green-primary">
                    +
                  </span>
                </h2>
                <span className="text-xs font-jakarta font-bold text-gray-border">
                  Em trasações por ano
                </span>
              </div>
            </div>
          </article>

          <article className="flex items-end justify-end py-5 px-0 h-72">
            <div className="flex items-center justify-end pr-6 rounded-s-[1.875rem] w-96 h-32 bg-gray-black relative">
              <div className="flex flex-col gap-1 absolute top-[-6rem] right-[6.625rem] z-10">
                <div className="flex items-center gap-3 min-w-32 h-10 px-3 rounded-[.625rem] bg-green-secondary relative left-24">
                  <div className="flex items-center justify-center h-7 w-7 rounded-md bg-green-primary">
                    <PencilSimple className="w-3 h-auto text-gray-white" />
                  </div>

                  <h4 className="font-ibmPlex font-semibold text-xs text-black">
                    Personalizar
                  </h4>
                </div>
                <div className="flex items-center gap-3 min-w-32 h-10 px-3 rounded-[.625rem] bg-green-secondary relative left-12">
                  <div className="flex items-center justify-center h-7 w-7 rounded-md bg-green-primary">
                    <GearSix className="w-3 h-auto text-gray-white" />
                  </div>

                  <h4 className="font-ibmPlex font-semibold text-xs text-black">
                    Controle total
                  </h4>
                </div>
                <div className="flex items-center gap-3 min-w-32 h-10 px-3 rounded-[.625rem] bg-green-secondary">
                  <div className="flex items-center justify-center h-7 w-7 rounded-md bg-green-primary">
                    <Lock className="w-3 h-auto text-gray-white" />
                  </div>

                  <h4 className="font-ibmPlex font-semibold text-xs text-black">
                    Segurança
                  </h4>
                </div>
              </div>
              <Image
                src={person}
                alt="Pessoa segurando notebook"
                sizes="100vw"
                className="w-44 md:w-36 h-auto absolute bottom-0 left-0"
                priority
              />

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-9 w-9 rounded-md bg-[#124734]">
                  <Play
                    className="w-3 h-auto text-green-secondary"
                    weight="fill"
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-base font-jakarta font-bold text-green-primary">
                    Saiba mais...
                  </h4>
                  <span className="text-xs font-jakarta font-medium text-gray-white">
                    Sobre o seu gateway
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Divider optionalClass="md:hidden" />
    </>
  );
}
