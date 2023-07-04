import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
   *{
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      font-family: 'Lato', sans-serif;
      text-decoration: none;            
      outline: none;
   }   

   body {
      background-color: ${({ theme }) => theme.colors.primaryColor};
      min-height: 100vh;
      display: flex;
      flex-direction: column;
   }

   #root{
      flex:1;
      display: flex;
      flex-direction: column;
   }
`;
