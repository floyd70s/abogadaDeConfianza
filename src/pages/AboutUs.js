import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import Cercania from 'images/cercania.png'
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <MainFeature1
        subheading={<Subheading>Abogada de Confianza</Subheading>}
        heading="Un concepto moderno y cercano"
        buttonRounded={false}
        primaryButtonText="Ver Portfolio"
        imageSrc={Cercania}
      />
      <Features
        subheading={<Subheading>Mis Valores</Subheading>}
        heading="Confianza, cercanía y confidencialidad."
        description="Confianza es un valor que se construye día a día, acompañandote en solucionar tus problemas."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Escucha activa",
            description: "Una escucha real y efectiva me permite desarrollar un alto grado de atención y entendimiento de cualquier problema del tipo legal."
          },
          {
            imageSrc: ShieldIconImage,
            title: "Fuertes conocimientos",
            description: "Mis habilidades técnicas en el derecho me permiten posicionarme a un nivel de excelencia profesional."
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Clientes felices",
            description: "El mejor reflejo de un trabajo bien hecho son clientes felices."
          },
        ]}
        linkText=""
      />
     
      {/* <Footer /> */}
    </AnimationRevealPage>
  );
};
