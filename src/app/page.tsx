"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="largeSizeMediumTitles"
        background="noise"
        cardStyle="gradient-bordered"
        primaryButtonStyle="flat"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Início",
          id: "hero",
        },
        {
          name: "Sobre",
          id: "about",
        },
        {
          name: "Serviços",
          id: "services",
        },
        {
          name: "Contato",
          id: "contact",
        },
      ]}
      brandName="Contador Bruno Santos"
      button={{
        text: "WhatsApp",
        href: "https://wa.me/5511978260194",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars",
      }}
      title="Contabilidade de confiança para você e sua empresa"
      description="Com 15 anos de experiência e agilidade comprovada, ajudo você a organizar suas finanças e crescer com segurança. Especialista em MEI, Simples Nacional e Pessoa Física."
      kpis={[
        {
          value: "15+",
          label: "Anos de Experiência",
        },
        {
          value: "5.0",
          label: "Avaliação no Google",
        },
        {
          value: "100%",
          label: "Agilidade no Atendimento",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Fale agora pelo WhatsApp",
          href: "https://wa.me/5511978260194",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/financial-charts-kpi-metrics-displays-office_482257-126638.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-pleased-proud-handsome-africanamerican-man-cross-arms-chest-confident-contemplating-something-pleasant-smiling-delighted-look-left-satisfied-white-background_176420-52691.jpg",
          alt: "Cliente 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/middle-age-woman-business-worker-smiling-confident-standing-with-arms-crossed-gesture-office_839833-20646.jpg",
          alt: "Cliente 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/businessman-with-hand-reaching-out_23-2148308600.jpg",
          alt: "Cliente 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/closeup-happy-middle-aged-business-leader_1262-4823.jpg",
          alt: "Cliente 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/professional-broker_1098-14468.jpg",
          alt: "Cliente 5",
        },
      ]}
      avatarText="Junte-se a mais de 100 clientes satisfeitos"
      marqueeItems={[
        {
          type: "text",
          text: "Especialista em MEI",
        },
        {
          type: "text",
          text: "Simples Nacional",
        },
        {
          type: "text",
          text: "Imposto de Renda PF",
        },
        {
          type: "text",
          text: "Regularização de CPF",
        },
        {
          type: "text",
          text: "Consultoria Financeira",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Compromisso com o seu sucesso financeiro"
      description={[
        "Sou Bruno Santos, contador com CRC ativo há 9 anos e mais de 15 anos de atuação no mercado contábil.",
        "Meu objetivo é descomplicar a contabilidade para pequenas empresas e pessoas físicas, oferecendo um atendimento personalizado, transparente e ágil.",
        "Localizado no Jardim Catanduva em São Paulo, transformo números em clareza para que você foque no que realmente importa: o crescimento do seu negócio.",
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Serviços Especializados"
      description="Soluções completas para regularização, conformidade e gestão contábil inteligente."
      accordionItems={[
        {
          id: "s1",
          title: "Abertura, Regularização e Encerramento",
          content: "Suporte completo desde a formalização até a baixa da empresa.",
        },
        {
          id: "s2",
          title: "Imposto de Renda (Pessoa Física)",
          content: "Declaração correta e otimizada para evitar problemas com a Receita.",
        },
        {
          id: "s3",
          title: "Contabilidade MEI e Simples Nacional",
          content: "Gestão tributária eficiente para o seu negócio pagar apenas o justo.",
        },
        {
          id: "s4",
          title: "Regularização de CPF",
          content: "Limpeza do seu nome e regularização perante os órgãos federais.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/professional-broker_1098-14468.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Ana Souza",
          role: "Empreendedora",
          company: "MEI",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-pleased-proud-handsome-africanamerican-man-cross-arms-chest-confident-contemplating-something-pleasant-smiling-delighted-look-left-satisfied-white-background_176420-52691.jpg",
        },
        {
          id: "t2",
          name: "Carlos Lima",
          role: "Diretor",
          company: "Comércio Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/middle-age-woman-business-worker-smiling-confident-standing-with-arms-crossed-gesture-office_839833-20646.jpg",
        },
        {
          id: "t3",
          name: "Maria Oliveira",
          role: "Autônoma",
          company: "Pessoa Física",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-with-hand-reaching-out_23-2148308600.jpg",
        },
        {
          id: "t4",
          name: "Roberto Silva",
          role: "Sócio",
          company: "Simples Nacional",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-happy-middle-aged-business-leader_1262-4823.jpg",
        },
        {
          id: "t5",
          name: "Fernanda Lima",
          role: "Empresária",
          company: "MEI",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-pleased-proud-handsome-africanamerican-man-cross-arms-chest-confident-contemplating-something-pleasant-smiling-delighted-look-left-satisfied-white-background_176420-52691.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "5.0",
          label: "Nota média",
        },
        {
          value: "16",
          label: "Reviews no Google",
        },
        {
          value: "100%",
          label: "Satisfação",
        },
      ]}
      title="Clientes que confiam no nosso trabalho"
      description="Avaliações reais de quem já resolveu sua contabilidade conosco."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Contato"
      title="Fale agora e resolva sua contabilidade"
      description="Estamos prontos para atender você com segurança e agilidade. Entre em contato e tire suas dúvidas."
      imageSrc="http://img.b2bpic.net/free-photo/financial-charts-kpi-metrics-displays-office_482257-126638.jpg"
      buttonText="Enviar mensagem"
      termsText="Ao clicar, você concorda com nossos termos de serviço."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Contador Bruno Santos",
          items: [
            {
              label: "R. Nestor Homem de Melo, 211",
              href: "#",
            },
            {
              label: "Jardim Catanduva, São Paulo - SP",
              href: "#",
            },
          ],
        },
        {
          title: "Contato",
          items: [
            {
              label: "(11) 97826-0194",
              href: "https://wa.me/5511978260194",
            },
            {
              label: "Atendimento via WhatsApp",
              href: "https://wa.me/5511978260194",
            },
          ],
        },
        {
          title: "Links Rápidos",
          items: [
            {
              label: "Serviços",
              href: "#services",
            },
            {
              label: "Avaliações",
              href: "#testimonials",
            },
          ],
        },
      ]}
      logoText="Bruno Santos"
      copyrightText="© 2025 | Contador Bruno Santos"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
