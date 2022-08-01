//React librairies
import React from "react";
import styled from "styled-components";

//Components
import Section from "./Section";

function Home() {

  const sections = [
    {id: 1, title: "Model S", description: "Plaid", backgroundImg: "model-s.jpg", leftBtnText: "Configuration personalisée", rightBtnText: "En savoir plus"},
    {id: 2, title: "Model Y", description: "Plaid", backgroundImg: "model-y.jpg", leftBtnText: "Configuration personalisée", rightBtnText: "En savoir plus"},
    {id: 3, title: "Model 3", description: "Plaid", backgroundImg: "model-3.jpg", leftBtnText: "Configuration personalisée", rightBtnText: "En savoir plus"},
    {id: 4, title: "Model X", description: "Plaid", backgroundImg: "model-x.jpg", leftBtnText: "Configuration personalisée", rightBtnText: "En savoir plus"},
    {id: 5, title: "Systèmes d'énergie solaire et Powerwalls", description: "De l'énergie pour tous vos besoins", backgroundImg: "solar-panel.jpg", leftBtnText: "En savoir plus"},
    {id: 6, title: "Accessoires", description: "", backgroundImg: "accessories.jpg", leftBtnText: "Configuration personalisée"},
  ];

  return (
    <Container>
      {sections.map(section => {
        return(
          <Section key={section.id} title={section.title} description={section.description} backgroundImg={section.backgroundImg} leftBtnText={section.leftBtnText} rightBtnText={section.rightBtnText}/>
        );
      })}
    </Container>
  );
}

export default Home;

const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    overflow-x: hidden;
`;