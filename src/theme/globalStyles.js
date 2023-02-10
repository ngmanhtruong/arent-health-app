import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.font[0]};
    font-weight: 400;
  }

  :root {
    --light-color: ${({ theme }) => theme.colors.light};
    --mine-shaft-color: ${({ theme }) => theme.colors.mineShaft};
    --tundora-color: ${({ theme }) => theme.colors.tundora};
    --boulder-color: ${({ theme }) => theme.colors.boulder};
    --lightning-yellow-color: ${({ theme }) => theme.colors.lightningYellow};
    --neon-carrot-color: ${({ theme }) => theme.colors.neonCarrot};
    --clementine-color: ${({ theme }) => theme.colors.clementine};
    --riptide-color: ${({ theme }) => theme.colors.riptide};
  }
`