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
import { Envelope, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import bancoCentralLogo from "../assets/banco-central-logo.svg";
import cash from "../assets/cash.svg";
import certificacaoPciLogo from "../assets/certificacao-pci-logo.svg";
import coffer from "../assets/coffer.svg";
import dot from "../assets/dot.svg";
import reclameAquiLogo from "../assets/reclame-aqui-logo.svg";
import sale from "../assets/sale.svg";
import shield from "../assets/shield.svg";
import targetArrow from "../assets/target-arrow.svg";
import { ClientsFeedbacks } from "./sections/ClientsFeedbacks";
import { ManagmentFeatures } from "./sections/ManagmentFeatures";
import { ReasonsForUse } from "./sections/ReasonsForUse";
import { ScalePayments } from "./sections/ScalePayments";
import { Welcome } from "./sections/Welcome";
import { WhyChoose } from "./sections/WhyChoose";

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
      <Welcome />

      <Divider optionalClass="md:hidden" />

      <ScalePayments />

      <ReasonsForUse />

      <ManagmentFeatures />

      <Divider optionalClass="py-7 md:pt-7 md:pb-14" />

      <ClientsFeedbacks />

      <WhyChoose />

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
