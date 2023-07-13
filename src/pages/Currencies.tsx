import React from "react";
import CurrenciesOrg from "../components/organisms/CurrenciesOrg";
import { StyledMain, StyledSection, StyledSectionContent } from "./styles";
import { IPageProps } from "./types";

const Currencies = ({ theme, layoutbreakpoint }: IPageProps) => {
  return (
    <StyledMain layoutbreakpoint={layoutbreakpoint}>
      <StyledSection>
        <StyledSectionContent theme={theme}>
          <CurrenciesOrg theme={theme} />
        </StyledSectionContent>
      </StyledSection>
    </StyledMain>
  );
};

export default Currencies;
