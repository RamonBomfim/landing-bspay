"use client";

import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";
import { Footer } from "@/components/Footer";
import { SectionContainer } from "@/components/SectionContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Envelope,
  GearSix,
  Headset,
  Link,
  Lock,
  LockKey,
  Medal,
  PaintBrush,
  PencilSimple,
  Play,
  Quotes,
  ShieldCheck,
  Star,
  StarHalf,
  ThumbsUp,
  TipJar,
  Users,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import bancoCentralLogo from "../assets/banco-central-logo.svg";
import cards from "../assets/cards.svg";
import cash from "../assets/cash.svg";
import certificacaoPciLogo from "../assets/certificacao-pci-logo.svg";
import coffer from "../assets/coffer.svg";
import diagonalNotebook from "../assets/diagonal-notebook.svg";
import dot from "../assets/dot.svg";
import person1 from "../assets/person01.png";
import person2 from "../assets/person02.png";
import person3 from "../assets/person03.png";
import reclameAquiLogo from "../assets/reclame-aqui-logo.svg";
import reportanaLogo from "../assets/reportana.svg";
import sale from "../assets/sale.svg";
import shield from "../assets/shield.svg";
import shopifyLogo from "../assets/shopify.svg";
import targetArrow from "../assets/target-arrow.svg";
import transfeeraLogo from "../assets/transfeera.svg";
import person from "../assets/welcome-photo.png";
import zemoLogo from "../assets/zemo.svg";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Seu nome deve conter pelo menos 2 letras.",
  }),
  lastName: z.string().min(2, {
    message: "Seu sobrenome deve conter pelo menos 2 letras.",
  }),
  companyName: z.string().min(2, {
    message: "O nome da sua empresa deve conter pelo menos 2 letras.",
  }),
  email: z.string().email({ message: "Email inválido." }),
  phone: z.string(),
});

// TODO: Overview do que precisa ser componentizado
export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastName: "",
      companyName: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

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

      <SectionContainer
        additionalSectionClass="h-auto pt-14"
        additionalContainerClass="gap-14"
      >
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
              Através desta solução integrada ao nosso sistema de cobrança, você
              terá acesso a uma cadência de cobrança dinâmica, ágil e
              personalizada ao perfil e comportamento de pagamento de cada
              cliente, para atingi-los através de múltiplos canais, maximizando
              pagamentos e minimizando a inadimplência.
            </p>

            <button className="w-60 h-12 px-7 py-2 rounded-xl font-poppins font-medium text-base bg-green-primary text-white hover:brightness-90 hover:border hover:border-green-secondary transition whitespace-nowrap flex items-center justify-center">
              Conheça essa solução
            </button>

            <p className="font-jakarta font-regular text-2xl text-gray-text">
              A <span className="font-extrabold text-green-primary">BSPAY</span>{" "}
              oferece uma solução completa para seu negócio, cobre e recebe
              pagamentos de forma ágil
            </p>
          </article>
        </div>
      </SectionContainer>

      <SectionContainer
        additionalSectionClass="h-auto pt-14"
        additionalContainerClass="gap-14"
      >
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
      </SectionContainer>

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
          <div className="flex flex-col h-auto w-96 gap-14 bg-gray-white rounded-[1.25rem] border-[.375rem] border-green-primary p-9">
            <p className="relative font-franklin font-medium text-lg text-blue-text">
              <Quotes
                className="absolute top-[-.5rem] left-[-1.5rem] w-4 h-4 text-gray-border rotate-180"
                weight="fill"
              />
              Vocês são a parceira ideal para nossos negócios online. O serviço
              de vocês é essencial para garantir a segurança e a eficiência das
              transações.
            </p>

            <div className="flex flex-col gap-4 w-full">
              <div className="flex justify-between gap-[.375rem] max-w-24">
                <Star className="w-5 h-5 text-green-primary" weight="fill" />
                <Star className="w-5 h-5 text-green-primary" weight="fill" />
                <Star className="w-5 h-5 text-green-primary" weight="fill" />
                <Star className="w-5 h-5 text-green-primary" weight="fill" />
                <Star className="w-5 h-5 text-green-primary" weight="fill" />
              </div>
              <div className="flex items-center gap-5 w-full">
                <Image
                  src={person1}
                  alt="Pessoa"
                  sizes="100vw"
                  className="w-14 h-14 rounded-full"
                  priority
                />

                <div className="flex flex-col gap-1">
                  <h5 className="font-ibmPlex font-semibold text-xl text-blue-text">
                    Maria Silva
                  </h5>
                  <span className="font-franklin font-medium text-base text-gray-border">
                    Gerente de E-commerce
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-auto w-96 gap-14 bg-gray-white rounded-[1.25rem] border-[.375rem] border-green-primary p-9">
            <p className="relative font-franklin font-medium text-lg text-blue-text">
              <Quotes
                className="absolute top-[-.5rem] left-[-1.5rem] w-4 h-4 text-gray-border rotate-180"
                weight="fill"
              />
              Estamos muito satisfeitos com a qualidade do serviço. Vocês são
              extremamente profissionais e eficientes!
            </p>

            <div className="flex flex-col gap-4 w-full">
              <div className="flex justify-between gap-[.375rem] max-w-24">
                <Star className="w-5 h-5 text-green-primary" weight="fill" />
                <Star className="w-5 h-5 text-green-primary" weight="fill" />
                <Star className="w-5 h-5 text-green-primary" weight="fill" />
                <Star className="w-5 h-5 text-green-primary" weight="fill" />
                <StarHalf
                  className="w-5 h-5 text-green-primary"
                  weight="fill"
                />
              </div>
              <div className="flex items-center gap-5 w-full">
                <Image
                  src={person3}
                  alt="Pessoa"
                  sizes="100vw"
                  className="w-14 h-14 rounded-full"
                  priority
                />

                <div className="flex flex-col gap-1">
                  <h5 className="font-ibmPlex font-semibold text-xl text-blue-text">
                    João Oliveira
                  </h5>
                  <span className="font-franklin font-medium text-base text-gray-border">
                    CEO
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-auto w-96 gap-14 bg-gray-white rounded-[1.25rem] border-[.375rem] border-green-primary p-9">
            <p className="relative font-franklin font-medium text-lg text-blue-text">
              <Quotes
                className="absolute top-[-.5rem] left-[-1.5rem] w-4 h-4 text-gray-border rotate-180"
                weight="fill"
              />
              Os devs gostaram bastante de documentação que vocês montaram, a
              integração foi fácil e rápida! E suporte também tirou várias
              dúvidas.
            </p>

            <div className="flex flex-col gap-4 w-full">
              <div className="flex justify-between gap-[.375rem] max-w-24">
                <Star className="w-5 h-5 text-green-primary" weight="fill" />
                <Star className="w-5 h-5 text-green-primary" weight="fill" />
                <Star className="w-5 h-5 text-green-primary" weight="fill" />
                <Star className="w-5 h-5 text-green-primary" weight="fill" />
                <StarHalf
                  className="w-5 h-5 text-green-primary"
                  weight="fill"
                />
              </div>
              <div className="flex items-center gap-5 w-full">
                <Image
                  src={person2}
                  alt="Pessoa"
                  sizes="100vw"
                  className="w-14 h-14 rounded-full"
                  priority
                />

                <div className="flex flex-col gap-1">
                  <h5 className="font-ibmPlex font-semibold text-xl text-blue-text">
                    Pedro Santos
                  </h5>
                  <span className="font-franklin font-medium text-base text-gray-border">
                    Diretor Financeiro
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer
        additionalSectionClass="w-full"
        additionalContainerClass="items-center pt-14 gap-10"
      >
        <h3 className="font-jakarta font-bold text-5xl text-blue-text text-center max-w-[29.375rem]">
          Por Que Escolher a BSPAY?
        </h3>

        <div className="flex justify-between w-full pt-16 bg-notebook-bg bg-contain bg-no-repeat bg-center">
          <div className="flex flex-col gap-3 max-w-60">
            <div className="flex flex-col gap-3 p-3">
              <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-green-primary">
                <Users className="w-10 h-auto text-white" />
              </div>

              <h4 className="font-ibmPlex font-semibold text-2xl text-blue-text">
                Experiência Comprovada
              </h4>

              <p className="font-franklin font-medium text-lg text-gray-border">
                Confie em uma empresa com histórico de sucesso comprovado em
                soluções de pagamento.
              </p>
            </div>

            <div className="flex flex-col gap-3 p-3">
              <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-green-primary">
                <PaintBrush className="w-10 h-auto text-white" />
              </div>

              <h4 className="font-ibmPlex font-semibold text-2xl text-blue-text">
                Experiência Comprovada
              </h4>

              <p className="font-franklin font-medium text-lg text-gray-border">
                Confie em uma empresa com histórico de sucesso comprovado em
                soluções de pagamento.
              </p>
            </div>

            <div className="flex flex-col gap-3 p-3">
              <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-green-primary">
                <Headset className="w-10 h-auto text-white" />
              </div>

              <h4 className="font-ibmPlex font-semibold text-2xl text-blue-text">
                Experiência Comprovada
              </h4>

              <p className="font-franklin font-medium text-lg text-gray-border">
                Confie em uma empresa com histórico de sucesso comprovado em
                soluções de pagamento.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 max-w-60">
            <div className="flex flex-col gap-3 p-3">
              <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-green-primary">
                <LockKey className="w-10 h-auto text-white" />
              </div>

              <h4 className="font-ibmPlex font-semibold text-2xl text-blue-text">
                Experiência Comprovada
              </h4>

              <p className="font-franklin font-medium text-lg text-gray-border">
                Confie em uma empresa com histórico de sucesso comprovado em
                soluções de pagamento.
              </p>
            </div>

            <div className="flex flex-col gap-3 p-3">
              <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-green-primary">
                <Link className="w-10 h-auto text-white" />
              </div>

              <h4 className="font-ibmPlex font-semibold text-2xl text-blue-text">
                Experiência Comprovada
              </h4>

              <p className="font-franklin font-medium text-lg text-gray-border">
                Confie em uma empresa com histórico de sucesso comprovado em
                soluções de pagamento.
              </p>
            </div>

            <div className="flex flex-col gap-3 p-3">
              <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-green-primary">
                <TipJar className="w-10 h-auto text-white" />
              </div>

              <h4 className="font-ibmPlex font-semibold text-2xl text-blue-text">
                Experiência Comprovada
              </h4>

              <p className="font-franklin font-medium text-lg text-gray-border">
                Confie em uma empresa com histórico de sucesso comprovado em
                soluções de pagamento.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer additionalContainerClass="bg-coins-bg bg-auto bg-no-repeat bg-left pt-14">
        <div className="flex justify-center gap-14 w-full h-[115rem]">
          <div className="flex flex-col items-center gap-14">
            <div className="flex flex-col gap-8 w-[31.25rem] h-[38.75rem] p-10 rounded-[2.5rem] bg-gray-black">
              <div className="flex justify-between w-full max-h-36">
                <div className="flex flex-col gap-3 max-w-[20rem]">
                  <h4 className="font-jakarta font-bold text-4xl text-white">
                    Bspay Bank
                  </h4>

                  <p className="font-jakarta font-regular text-base text-white w-full">
                    A única plataforma especializada para negócios digitais com
                    Internet Banking integrado, tudo na palma da sua mão.
                  </p>
                </div>

                <div className="flex justify-center w-[5.625rem] h-full">
                  <Image
                    src={coffer}
                    alt="Imagem de moedas"
                    sizes="100vw"
                    className="w-[5.625rem] h-[5.625rem]"
                    priority
                  />
                </div>
              </div>

              <div className="flex flex-col gap-7 w-full">
                <div className="flex gap-2">
                  <Image
                    src={dot}
                    alt="Circulo verde"
                    sizes="100vw"
                    className="w-6 h-6"
                    priority
                  />

                  <p className="font-jakarta font-regular text-lg text-white max-w-[22.125rem]">
                    Controle completo desde o checkout até as transações;
                  </p>
                </div>

                <div className="flex gap-2">
                  <Image
                    src={dot}
                    alt="Circulo verde"
                    sizes="100vw"
                    className="w-6 h-6"
                    priority
                  />

                  <p className="font-jakarta font-regular text-lg text-white max-w-[22.125rem]">
                    Controle completo desde o checkout até as transações;
                  </p>
                </div>

                <div className="flex gap-2">
                  <Image
                    src={dot}
                    alt="Circulo verde"
                    sizes="100vw"
                    className="w-6 h-6"
                    priority
                  />

                  <p className="font-jakarta font-regular text-lg text-white max-w-[22.125rem]">
                    Controle completo desde o checkout até as transações;
                  </p>
                </div>

                <div className="flex gap-2">
                  <Image
                    src={dot}
                    alt="Circulo verde"
                    sizes="100vw"
                    className="w-6 h-6"
                    priority
                  />

                  <p className="font-jakarta font-regular text-lg text-white max-w-[22.125rem]">
                    Controle completo desde o checkout até as transações;
                  </p>
                </div>

                <button className="flex items-center justify-center w-36 h-10 rounded-[1.25rem] border-2 border-green-secondary bg-green-primary font-jakarta font-semibold text-base text-white">
                  Veja mais
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-8 w-[31.25rem] h-[38.75rem] p-10 rounded-[2.5rem] bg-gray-black">
              <div className="flex justify-between w-full max-h-36">
                <div className="flex flex-col gap-3 max-w-[20rem]">
                  <h4 className="font-jakarta font-bold text-4xl text-white">
                    Bspay Bank
                  </h4>

                  <p className="font-jakarta font-regular text-base text-white w-full">
                    A única plataforma especializada para negócios digitais com
                    Internet Banking integrado, tudo na palma da sua mão.
                  </p>
                </div>

                <div className="flex justify-center w-[5.625rem] h-full">
                  <Image
                    src={shield}
                    alt="Imagem de escudo"
                    sizes="100vw"
                    className="w-[5.625rem] h-[5.625rem]"
                    priority
                  />
                </div>
              </div>

              <div className="flex flex-col gap-7 w-full">
                <div className="flex gap-2">
                  <Image
                    src={dot}
                    alt="Circulo verde"
                    sizes="100vw"
                    className="w-6 h-6"
                    priority
                  />

                  <p className="font-jakarta font-regular text-lg text-white max-w-[22.125rem]">
                    Controle completo desde o checkout até as transações;
                  </p>
                </div>

                <div className="flex gap-2">
                  <Image
                    src={dot}
                    alt="Circulo verde"
                    sizes="100vw"
                    className="w-6 h-6"
                    priority
                  />

                  <p className="font-jakarta font-regular text-lg text-white max-w-[22.125rem]">
                    Controle completo desde o checkout até as transações;
                  </p>
                </div>

                <div className="flex gap-2">
                  <Image
                    src={dot}
                    alt="Circulo verde"
                    sizes="100vw"
                    className="w-6 h-6"
                    priority
                  />

                  <p className="font-jakarta font-regular text-lg text-white max-w-[22.125rem]">
                    Controle completo desde o checkout até as transações;
                  </p>
                </div>

                <div className="flex gap-2">
                  <Image
                    src={dot}
                    alt="Circulo verde"
                    sizes="100vw"
                    className="w-6 h-6"
                    priority
                  />

                  <p className="font-jakarta font-regular text-lg text-white max-w-[22.125rem]">
                    Controle completo desde o checkout até as transações;
                  </p>
                </div>

                <button className="flex items-center justify-center w-36 h-10 rounded-[1.25rem] border-2 border-green-secondary bg-green-primary font-jakarta font-semibold text-base text-white">
                  Veja mais
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-14 pt-[19.125rem]">
            <div className="flex flex-col gap-8 w-[31.25rem] h-[38.75rem] p-10 rounded-[2.5rem] bg-gray-black">
              <div className="flex justify-between w-full max-h-36">
                <div className="flex flex-col gap-3 max-w-[20rem]">
                  <h4 className="font-jakarta font-bold text-4xl text-white">
                    Bspay Bank
                  </h4>

                  <p className="font-jakarta font-regular text-base text-white w-full">
                    A única plataforma especializada para negócios digitais com
                    Internet Banking integrado, tudo na palma da sua mão.
                  </p>
                </div>

                <div className="flex justify-center w-[5.625rem] h-full">
                  <Image
                    src={coffer}
                    alt="Imagem de moedas"
                    sizes="100vw"
                    className="w-[5.625rem] h-[5.625rem]"
                    priority
                  />
                </div>
              </div>

              <div className="flex flex-col gap-7 w-full">
                <div className="flex gap-2">
                  <Image
                    src={dot}
                    alt="Circulo verde"
                    sizes="100vw"
                    className="w-6 h-6"
                    priority
                  />

                  <p className="font-jakarta font-regular text-lg text-white max-w-[22.125rem]">
                    Controle completo desde o checkout até as transações;
                  </p>
                </div>

                <div className="flex gap-2">
                  <Image
                    src={dot}
                    alt="Circulo verde"
                    sizes="100vw"
                    className="w-6 h-6"
                    priority
                  />

                  <p className="font-jakarta font-regular text-lg text-white max-w-[22.125rem]">
                    Controle completo desde o checkout até as transações;
                  </p>
                </div>

                <div className="flex gap-2">
                  <Image
                    src={dot}
                    alt="Circulo verde"
                    sizes="100vw"
                    className="w-6 h-6"
                    priority
                  />

                  <p className="font-jakarta font-regular text-lg text-white max-w-[22.125rem]">
                    Controle completo desde o checkout até as transações;
                  </p>
                </div>

                <div className="flex gap-2">
                  <Image
                    src={dot}
                    alt="Circulo verde"
                    sizes="100vw"
                    className="w-6 h-6"
                    priority
                  />

                  <p className="font-jakarta font-regular text-lg text-white max-w-[22.125rem]">
                    Controle completo desde o checkout até as transações;
                  </p>
                </div>

                <button className="flex items-center justify-center w-36 h-10 rounded-[1.25rem] border-2 border-green-secondary bg-green-primary font-jakarta font-semibold text-base text-white">
                  Veja mais
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-8 w-[31.25rem] h-[38.75rem] p-10 rounded-[2.5rem] bg-gray-black">
              <div className="flex justify-between w-full max-h-36">
                <div className="flex flex-col gap-3 max-w-[20rem]">
                  <h4 className="font-jakarta font-bold text-4xl text-white">
                    Bspay Bank
                  </h4>

                  <p className="font-jakarta font-regular text-base text-white w-full">
                    A única plataforma especializada para negócios digitais com
                    Internet Banking integrado, tudo na palma da sua mão.
                  </p>
                </div>

                <div className="flex justify-center w-[5.625rem] h-full">
                  <Image
                    src={shield}
                    alt="Imagem de escudo"
                    sizes="100vw"
                    className="w-[5.625rem] h-[5.625rem]"
                    priority
                  />
                </div>
              </div>

              <div className="flex flex-col gap-7 w-full">
                <div className="flex gap-2">
                  <Image
                    src={dot}
                    alt="Circulo verde"
                    sizes="100vw"
                    className="w-6 h-6"
                    priority
                  />

                  <p className="font-jakarta font-regular text-lg text-white max-w-[22.125rem]">
                    Controle completo desde o checkout até as transações;
                  </p>
                </div>

                <div className="flex gap-2">
                  <Image
                    src={dot}
                    alt="Circulo verde"
                    sizes="100vw"
                    className="w-6 h-6"
                    priority
                  />

                  <p className="font-jakarta font-regular text-lg text-white max-w-[22.125rem]">
                    Controle completo desde o checkout até as transações;
                  </p>
                </div>

                <div className="flex gap-2">
                  <Image
                    src={dot}
                    alt="Circulo verde"
                    sizes="100vw"
                    className="w-6 h-6"
                    priority
                  />

                  <p className="font-jakarta font-regular text-lg text-white max-w-[22.125rem]">
                    Controle completo desde o checkout até as transações;
                  </p>
                </div>

                <div className="flex gap-2">
                  <Image
                    src={dot}
                    alt="Circulo verde"
                    sizes="100vw"
                    className="w-6 h-6"
                    priority
                  />

                  <p className="font-jakarta font-regular text-lg text-white max-w-[22.125rem]">
                    Controle completo desde o checkout até as transações;
                  </p>
                </div>

                <button className="flex items-center justify-center w-36 h-10 rounded-[1.25rem] border-2 border-green-secondary bg-green-primary font-jakarta font-semibold text-base text-white">
                  Veja mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer additionalContainerClass="items-center pt-14 pb-24">
        <div className="flex flex-col items-center relative gap-14 w-[52rem]">
          <Image
            src={targetArrow}
            alt="Divisão"
            sizes="100vw"
            className="w-[14.375rem] h-auto absolute top-[-5rem] left-[-10rem]"
            priority
          />

          <h4 className="font-jakarta font-bold text-5xl text-blue-text">
            Dúvidas frequentes
          </h4>

          <div className="flex flex-col w-full px-8 gap-4">
            <Accordion
              type="single"
              collapsible
              className="border-b-1 border-gray-border"
            >
              <AccordionItem value="pergunta-1">
                <AccordionTrigger className="font-jakarta font-medium text-2xl text-blue-text pb-2 hover:no-underline">
                  Lorem Ipsum dolor?
                </AccordionTrigger>
                <AccordionContent className="font-jakarta font-regular text-base text-gray-text max-w-[45rem] pb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  ultricies quam quis ex rutrum, et pellentesque ex fermentum.
                  Fusce id eros velit.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion
              type="single"
              collapsible
              className="border-b-1 border-gray-border"
            >
              <AccordionItem value="pergunta-1">
                <AccordionTrigger className="font-jakarta font-medium text-2xl text-blue-text pb-2 hover:no-underline">
                  Lorem Ipsum dolor?
                </AccordionTrigger>
                <AccordionContent className="font-jakarta font-regular text-base text-gray-text max-w-[45rem] pb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  ultricies quam quis ex rutrum, et pellentesque ex fermentum.
                  Fusce id eros velit.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion
              type="single"
              collapsible
              className="border-b-1 border-gray-border"
            >
              <AccordionItem value="pergunta-1">
                <AccordionTrigger className="font-jakarta font-medium text-2xl text-blue-text pb-2 hover:no-underline">
                  Lorem Ipsum dolor?
                </AccordionTrigger>
                <AccordionContent className="font-jakarta font-regular text-base text-gray-text max-w-[45rem] pb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  ultricies quam quis ex rutrum, et pellentesque ex fermentum.
                  Fusce id eros velit.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion
              type="single"
              collapsible
              className="border-b-1 border-gray-border"
            >
              <AccordionItem value="pergunta-1">
                <AccordionTrigger className="font-jakarta font-medium text-2xl text-blue-text pb-2 hover:no-underline">
                  Lorem Ipsum dolor?
                </AccordionTrigger>
                <AccordionContent className="font-jakarta font-regular text-base text-gray-text max-w-[45rem] pb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  ultricies quam quis ex rutrum, et pellentesque ex fermentum.
                  Fusce id eros velit.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer
        additionalContainerClass="items-center gap-16 py-[4.375rem] relative"
        additionalSectionClass="bg-gray-black max-h-[395rem]"
      >
        <Image
          src={cash}
          alt="Imagem de bolo de dinherio 3D"
          sizes="100vw"
          className="w-[10.75rem] h-auto absolute bottom-[-7.0625rem] left-[-5.3rem]"
          priority
        />

        <h4 className="font-jakarta font-bold text-5xl text-gray-white">
          Escale seu negócio com a BsPay.
        </h4>

        <div className="flex items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center w-[27.25rem] h-32 gap-2 bg-green-primary rounded-[1.875rem]">
            <h5 className="font-jakarta font-bold text-4xl text-gray-white">
              + R$ 2 bilhões
            </h5>
            <span className="font-jakarta font-medium text-base text-gray-white">
              movimentados anualmente
            </span>
          </div>
          <div className="flex flex-col items-center justify-center w-[27.25rem] h-32 gap-2 bg-green-primary rounded-[1.875rem]">
            <h5 className="font-jakarta font-bold text-4xl text-gray-white">
              + 900 milhões
            </h5>
            <span className="font-jakarta font-medium text-base text-gray-white">
              movimentados anualmente
            </span>
          </div>
        </div>

        <Image
          src={sale}
          alt="Imagem de selo de liquidação"
          sizes="100vw"
          className="w-[10.75rem] h-auto absolute top-[-8.625rem] right-[-5.3rem]"
          priority
        />
      </SectionContainer>

      <SectionContainer additionalSectionClass="pt-[8.75rem] pb-14 ">
        <div className="flex justify-between w-full h-full">
          <article className="flex flex-col gap-7 w-[29.375rem]">
            <h4 className="font-jakarta font-bold text-5xl text-gray-black">
              Agende uma demonstração agora mesmo!
            </h4>

            <p className="font-jakarta font-medium text-base text-blue-text">
              Através desta solução integrada ao nosso sistema de cobrança, você
              terá acesso a uma cadência de cobrança dinâmica, ágil e
              personalizada ao perfil e comportamento de pagamento de cada
              cliente, para atingi-los através de múltiplos canais, maximizando
              pagamentos e minimizando a inadimplência.
            </p>

            <p className="font-jakarta font-medium text-base text-blue-text">
              Entre em contato agora mesmo e agende sua demonstração para
              otimizar e descomplicar a gestão de cobranças da sua empresa!
            </p>

            <div className="flex flex-col gap-5 max-w-[13rem]">
              <div className="flex gap-1">
                <WhatsappLogo className="w-8 h-8 text-green-primary" />

                <div className="flex flex-col gap-1 max-w-[11rem]">
                  <h6 className="font-jakarta font-bold text-base text-gray-black">
                    Fale pelo WhatsApp:
                  </h6>
                  <span className="font-jakarta font-regular text-base text-gray-black font-regular">
                    (11)9 9999-9999
                  </span>
                </div>
              </div>

              <div className="flex gap-1">
                <Envelope className="w-8 h-8 text-green-primary" />

                <div className="flex flex-col gap-1 max-w-[11rem]">
                  <h6 className="font-jakarta font-bold text-base text-gray-black">
                    Envie um e-mail:
                  </h6>
                  <span className="font-jakarta font-regular text-base text-gray-black font-regular">
                    bspay@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </article>

          <Divider type="vertical" />

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-7 pt-10 w-[29.375rem]"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-jakarta font-medium text-base text-black">
                      Nome
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-jakarta font-medium text-base text-black">
                      Sobrenome
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-jakarta font-medium text-base text-black">
                      Nome da empresa
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-jakarta font-medium text-base text-black">
                      E-mail
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-jakarta font-medium text-base text-black">
                      Telefone
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                text="Enviar"
                variant="fill"
                optionalClass="w-[9.375rem] h-[3.125rem]"
                type="submit"
              />
            </form>
          </Form>
        </div>
      </SectionContainer>

      <SectionContainer
        additionalSectionClass="pt-14 pb-[11.25rem]"
        additionalContainerClass="items-center gap-[5.625rem]"
      >
        <h4 className="font-jakarta font-medium text-3xl text-blue-text text-center max-w-[47.5rem]">
          Sabemos o valor do seu esforço e zelamos pela integridade e{" "}
          <span className="text-green-primary">
            segurança em todos os níveis da nossa operação
          </span>
        </h4>

        <div className="flex items-center justify-center gap-6 w-full">
          <div className="flex flex-col items-center gap-2 w-[19.75rem] min-h-[14.0625rem] max-h-[15.5rem]">
            <Image
              src={certificacaoPciLogo}
              alt="Logo da certificação PCI DSS"
              sizes="100vw"
              className="w-24 h-auto"
              priority
            />

            <div className="flex flex-col items-center gap-4 max-w-[14rem]">
              <span className="jakarta font-bold text-base text-gray-black text-center">
                PCI DSS COMPLIANT
              </span>

              <p className="font-jakarta font-medium text-base text-gray-black text-center">
                Certificação PCI Compliance para Transações Seguras
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 w-[19.75rem] min-h-[14.0625rem] max-h-[15.5rem]">
            <Image
              src={bancoCentralLogo}
              alt="Logo do banco central"
              sizes="100vw"
              className="w-60 h-auto"
              priority
            />

            <div className="flex flex-col items-center gap-4 max-w-[14rem]">
              <span className="jakarta font-bold text-base text-gray-black text-center">
                BANCO CENTRAL DO BRASIL
              </span>

              <p className="font-jakarta font-medium text-base text-gray-black text-center">
                Licenciado pelo Banco Central do Brasil{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 w-[19.75rem] min-h-[14.0625rem] max-h-[15.5rem]">
            <Image
              src={reclameAquiLogo}
              alt="Logo da certificação PCI DSS"
              sizes="100vw"
              className="w-[11.375rem] h-auto"
              priority
            />

            <div className="flex flex-col items-center gap-4 max-w-[14rem]">
              <span className="jakarta font-bold text-base text-gray-black text-center">
                PRÊMIO RA {new Date().getFullYear() - 1}
              </span>

              <p className="font-jakarta font-medium text-base text-gray-black text-center">
                Indicado ao Prêmio RA{new Date().getFullYear() - 1} na Categoria
                Bancos e Cartões Digitais
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      <Footer />
    </>
  );
}
