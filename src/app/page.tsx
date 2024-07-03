import { Divider } from "@/components/Divider";
import { SectionContainer } from "@/components/SectionContainer";
import {
  GearSix,
  Lock,
  Medal,
  PencilSimple,
  Play,
  ShieldCheck,
  Star,
  ThumbsUp,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import cards from "../assets/cards.svg";
import clienteDepoiment1 from "../assets/depoiment-client-01.svg";
import clienteDepoiment2 from "../assets/depoiment-client-02.svg";
import clienteDepoiment3 from "../assets/depoiment-client-03.svg";
import diagonalNotebook from "../assets/diagonal-notebook.svg";
import reportanaLogo from "../assets/reportana.svg";
import shopifyLogo from "../assets/shopify.svg";
import transfeeraLogo from "../assets/transfeera.svg";
import person from "../assets/welcome-photo.png";
import zemoLogo from "../assets/zemo.svg";

export default function Home() {
  return (
    <>
      <SectionContainer
        additionalSectionClass="min-h-[29.875rem] md:min-h-80 lg:max-h-[29.875rem] bg-gray-white md:bg-gradient-linear md:border-b-4 md:border-green-primary"
        additionalContainerClass="md:relative md:flex-row "
      >
        <article className="flex flex-col gap-[1.875rem] px-[1.375rem] pb-[1.625rem] lg:pt-10 bg-gradient-linear border-b-4 border-green-primary md:px-0 md:bg-gradient-to-r md:from-inherit md:to-inherit md:border-0">
          <h1 className="max-w-[21.5625rem] lg:max-w-[28.125rem] font-jakarta font-bold text-blue-text text-3xl lg:text-5xl">
            Gateway de pagamentos mais completo e{" "}
            <span className="text-3xl lg:text-5xl font-jakarta font-bold text-green-primary">
              seguro do mercado
            </span>
          </h1>

          <div className="flex items-center justify-between w-[20.5rem] h-[4.375rem] lg:w-[32rem] lg:h-[6.25rem]">
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-3xl lg:text-5xl font-jakarta font-bold text-blue-text">
                90
                <span className="text-3xl lg:text-5xl font-jakarta font-bold text-green-primary">
                  +
                </span>
              </h2>
              <span className="text-xs lg:text-xl font-jakarta font-bold text-gray-border">
                Parceiras
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-3xl lg:text-5xl font-jakarta font-bold text-blue-text">
                310
                <span className="text-3xl lg:text-5xl font-jakarta font-bold text-green-primary">
                  +
                </span>
              </h2>
              <span className="text-xs lg:text-xl font-jakarta font-bold text-gray-border">
                Usuários ativos
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-3xl lg:text-5xl font-jakarta font-bold text-blue-text">
                952k
                <span className="text-3xl lg:text-5xl font-jakarta font-bold text-green-primary">
                  +
                </span>
              </h2>
              <span className="text-xs lg:text-xl font-jakarta font-bold text-gray-border">
                Em trasações por ano
              </span>
            </div>
          </div>
        </article>

        <article className="flex items-end justify-end py-5 px-0 h-72 md:absolute md:bottom-[-6rem] lg:bottom-[-3rem] md:right-[-1.375rem]">
          <div className="flex items-center justify-end pr-6 rounded-s-[1.875rem] w-96 h-32 lg:w-[40rem] lg:h-40 bg-gray-black relative">
            <div className="flex flex-col gap-1 absolute top-[-6rem] right-[6.625rem] md:top-[-9rem] md:right-[5.625rem] lg:right-[8rem] lg:top-[-14rem] z-10">
              <div className="flex items-center gap-3 lg:gap-6 min-w-32 lg:min-w-72 h-10 lg:h-16 px-3 lg:px-5 rounded-[.625rem] lg:rounded-[1.25rem] bg-green-secondary relative left-24 md:left-16">
                <div className="flex items-center justify-center h-7 lg:h-10 w-7 lg:w-10 rounded-md bg-green-primary">
                  <PencilSimple className="w-3 lg:w-5 h-auto text-gray-white" />
                </div>

                <h4 className="font-ibmPlex font-semibold text-xs lg:text-xl text-black">
                  Personalizar
                </h4>
              </div>
              <div className="flex items-center gap-3 lg:gap-6 min-w-32 lg:min-w-72 h-10 lg:h-16 px-3 lg:px-5 rounded-[.625rem] lg:rounded-[1.25rem] bg-green-secondary relative left-12 md:left-8">
                <div className="flex items-center justify-center h-7 lg:h-10 w-7 lg:w-10 rounded-md bg-green-primary">
                  <GearSix className="w-3 lg:w-5 h-auto text-gray-white" />
                </div>

                <h4 className="font-ibmPlex font-semibold text-xs lg:text-xl text-black">
                  Controle total
                </h4>
              </div>
              <div className="flex items-center gap-3 lg:gap-6 min-w-32 lg:min-w-72 h-10 lg:h-16 px-3 lg:px-5 rounded-[.625rem] lg:rounded-[1.25rem] bg-green-secondary">
                <div className="flex items-center justify-center h-7 lg:h-10 w-7 lg:w-10 rounded-md bg-green-primary">
                  <Lock className="w-3 lg:w-5 h-auto text-gray-white" />
                </div>

                <h4 className="font-ibmPlex font-semibold text-xs lg:text-xl text-black">
                  Segurança
                </h4>
              </div>
            </div>

            <Image
              src={person}
              alt="Pessoa segurando notebook"
              sizes="100vw"
              className="w-44 md:w-60 lg:w-80 h-auto absolute bottom-0 left-0"
              priority
            />

            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-9 w-9 lg:w-20 lg:h-20 rounded-md lg:rounded-[.625rem] bg-[#124734]">
                <Play
                  className="w-3 h-auto lg:w-8 text-green-secondary"
                  weight="fill"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="text-base lg:text-2xl font-jakarta font-bold text-green-primary">
                  Saiba mais...
                </h4>
                <span className="text-xs lg:text-xl font-jakarta font-medium text-gray-white">
                  Sobre o seu gateway
                </span>
              </div>
            </div>
          </div>
        </article>
      </SectionContainer>

      <Divider optionalClass="md:hidden" />

      <section className="flex justify-center w-full h-auto pt-14 md:px-[1.375rem]">
        <div className="flex flex-col w-full md:max-w-7xl h-full gap-14">
          <h3 className="font-jakarta font-bold text-4xl">
            Escale o gerenciamento de seus pagamentos
          </h3>

          <div className="flex gap-20">
            <Image
              src={diagonalNotebook}
              alt="Notebook na diagonal"
              sizes="100vw"
              className="w-80 lg:w-[40rem] h-auto"
              priority
            />

            <article className="flex flex-col h-full gap-6">
              <h5 className="font-poppins font-bold text-2xl text-green-primary">
                Quem não cobra, não recebe!
              </h5>

              <h3 className="font-jakarta font-bold text-5xl text-blue-text">
                Automatize as cobranças da sua empresa!
              </h3>

              <p className="font-jakarta font-medium text-lg text-gray-text">
                Descubra como modernizar e simplificar a gestão de cobranças do
                seu negócio com nossa Régua de Cobrança Inteligente, ferramenta
                revolucionária projetada para otimizar o processo de contas a
                receber.
              </p>
              <p className="font-jakarta font-medium text-lg text-gray-text">
                Através desta solução integrada ao nosso sistema de cobrança,
                você terá acesso a uma cadência de cobrança dinâmica, ágil e
                personalizada ao perfil e comportamento de pagamento de cada
                cliente, para atingi-los através de múltiplos canais,
                maximizando pagamentos e minimizando a inadimplência.
              </p>

              <button className="w-60 h-12 px-7 py-2 rounded-xl font-poppins font-medium text-base bg-green-primary text-white hover:brightness-90 hover:border hover:border-green-secondary transition whitespace-nowrap flex items-center justify-center">
                Conheça essa solução
              </button>

              <p className="font-jakarta font-regular text-2xl text-gray-text">
                A{" "}
                <span className="font-extrabold text-green-primary">BSPAY</span>{" "}
                oferece uma solução completa para seu negócio, cobre e recebe
                pagamentos de forma ágil
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="flex justify-center w-full h-auto pt-14 md:px-[1.375rem]">
        <div className="flex flex-col w-full md:max-w-7xl h-full gap-14">
          <h3 className="font-jakarta font-bold text-5xl text-blue-text text-center">
            Por que trazer sua operação para BSPAY
          </h3>

          <div className="flex items-center justify-center w-full h-auto gap-6">
            <div className="flex flex-col p-8 w-[25.25rem] h-[22.5rem] gap-8 rounded-[1.875rem] border-2 border-green-primary">
              <ShieldCheck
                className="w-14 h-auto text-green-primary"
                weight="duotone"
              />

              <div className="flex flex-col gap-6 w-full">
                <h5 className="font-jakarta font-bold text-4xl text-gray-black">
                  Segurança
                </h5>

                <p className="font-jakarta font-regular text-xl text-gray-text">
                  Atuamos seguindo as principais recomendações dos órgãos
                  reguladores do mercado financeiro.
                </p>
              </div>
            </div>

            <div className="flex flex-col p-8 w-[25.25rem] h-[22.5rem] gap-8 rounded-[1.875rem] border-2 border-green-primary">
              <ThumbsUp
                className="w-14 h-auto text-green-primary"
                weight="duotone"
              />

              <div className="flex flex-col gap-6 w-full">
                <h5 className="font-jakarta font-bold text-4xl text-gray-black">
                  Confiabilidade
                </h5>

                <p className="font-jakarta font-regular text-xl text-gray-text">
                  Usamos verificação de duas etapas para proteger a sua conta.
                  Sendo assim, apenas você tem acesso ao seu dinheiro.
                </p>
              </div>
            </div>

            <div className="flex flex-col p-8 w-[25.25rem] h-[22.5rem] gap-8 rounded-[1.875rem] border-2 border-green-primary">
              <Medal
                className="w-14 h-auto text-green-primary"
                weight="duotone"
              />

              <div className="flex flex-col gap-6 w-full">
                <h5 className="font-jakarta font-bold text-4xl text-gray-black">
                  Credibilidade
                </h5>

                <p className="font-jakarta font-regular text-xl text-gray-text">
                  Somos licenciados pelo Banco Central do Brasil a operar como
                  facilitadora de pagamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionContainer additionalContainerClass="gap-14 pt-14">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-14 max-w-[50rem]">
            <div className="flex flex-col gap-6">
              <h3 className="font-jakarta font-bold text-5xl text-gray-black">
                Obtenha todas funcionalidades de gestão financeira.
              </h3>
              <p className="font-jakarta font-regular text-xl text-gray-black max-w-[23.25rem]">
                Lorem ipsum dolor sit amet consectetur. Blandit vitae sociis
                odio nunc ullamcorper mauris commodo.
              </p>
            </div>

            <h5 className="font-jakarta font-bold text-2xl text-blue-text max-w-36">
              <span className="text-green-primary">Integrações</span> e
              Parcerias
            </h5>
          </div>

          <div className="flex items-end justify-end">
            <Image
              src={cards}
              alt="Balões com valores em dinheiro"
              sizes="100vw"
              className="w-[30rem] h-auto"
              priority
            />
          </div>
        </div>

        <div className="flex items-center justify-between w-full gap-36">
          <Image
            src={reportanaLogo}
            alt="Logo da Reportana"
            sizes="100vw"
            className="w-[12.5rem] h-auto max-h-14"
            priority
          />
          <Image
            src={shopifyLogo}
            alt="Logo do Shopify"
            sizes="100vw"
            className="w-[12.5rem] h-auto max-h-14"
            priority
          />
          <Image
            src={zemoLogo}
            alt="Logo da Zemo"
            sizes="100vw"
            className="w-[12.5rem] h-auto max-h-14"
            priority
          />
          <Image
            src={transfeeraLogo}
            alt="Logo da Transfeera"
            sizes="100vw"
            className="w-[12.5rem] h-auto max-h-14"
            priority
          />
        </div>
      </SectionContainer>

      <Divider optionalClass="pt-6 pb-14" />

      <SectionContainer
        additionalSectionClass="bg-gradient-radial w-full h-[48.5rem]"
        additionalContainerClass="items-center justify-center gap-14 py-14"
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-6">
            <h3 className="font-ibmPlex font-semibold text-6xl text-gray-white">
              Feedbacks e reviews de clientes
            </h3>
            <p className="font-franklin font-medium text-lg text-gray-border max-w-[40.75rem]">
              Da nossa experiência de mais de 10 anos no desenvolvimento de
              soluções em diversos setores.
            </p>
          </div>

          <div className="flex flex-col gap-3 max-w-[20rem]">
            <div className="flex gap-4">
              <div className="flex flex-col gap-3">
                <h5 className="font-ibmPlex font-semibold text-2xl text-gray-white">
                  Excelente
                </h5>
                <p className="font-franklin font-medium text-base text-gray-white">
                  <span className="text-green-primary">4.5</span> de 5
                </p>
              </div>

              <div className="flex justify-between pt-1 gap-4">
                <Star className="w-6 h-6 text-green-primary" weight="fill" />
                <Star className="w-6 h-6 text-green-primary" weight="fill" />
                <Star className="w-6 h-6 text-green-primary" weight="fill" />
                <Star className="w-6 h-6 text-green-primary" weight="fill" />
                <Star className="w-6 h-6 text-green-primary" weight="fill" />
              </div>
            </div>
            <div className="flex items-center justify-end w-full">
              <p className="font-franklin font-medium text-base text-gray-white">
                Total de <span className="text-green-primary">562</span> reviews
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full h-auto">
          <Image
            src={clienteDepoiment1}
            alt="Depoimento 1"
            sizes="100vw"
            className="w-96 h-auto"
            priority
          />
          <Image
            src={clienteDepoiment2}
            alt="Depoimento 1"
            sizes="100vw"
            className="w-96 h-auto"
            priority
          />
          <Image
            src={clienteDepoiment3}
            alt="Depoimento 1"
            sizes="100vw"
            className="w-96 h-auto"
            priority
          />
        </div>
      </SectionContainer>
    </>
  );
}
