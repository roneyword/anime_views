import {
  fontSizes as variableFontSizes,
  fontWeights as variableFontWeights,
} from "./variables"

/**
 * @Description <br/>
 * FontSizes: _Define o tamanho da fonte._
 * 
 * @Available <br/>
 * _xs: 0.625rem | sl: 0.75rem| sm: 0.875rem | md: 1rem | ml: 1.125rem | lg: 1.5rem | xl: 2rem | xx: 3rem_
 * @Example <br/>
 * _Use _fontSizes.md_ para size = 1rem._
 */


export const fontSizes = {
  xs: variableFontSizes.s0625,   // 10px - Extra Small    // ${fontSizes.xs}
  sl: variableFontSizes.s0750,   // 12px - small          // ${fontSizes.sl}
  sm: variableFontSizes.s0875,   // 14px - Small Middle   // ${fontSizes.sm}
  md: variableFontSizes.s1000,   // 16px - Middle         // ${fontSizes.md}
  ml: variableFontSizes.s1125,   // 18px - Middle Large   // ${fontSizes.ml}
  ls: variableFontSizes.s1250,   // 20px - Large Small    // ${fontSizes.ls}
  lg: variableFontSizes.s1500,   // 24px - Large          // ${fontSizes.lg}
  xl: variableFontSizes.s2000,   // 32px - Extra Large    // ${fontSizes.xl}
  xx: variableFontSizes.s3000,   // 48px - Extra Big      // ${fontSizes.xx}
  x3: variableFontSizes.s9000,   // 144px - Big           // ${fontSizes.x3}
  x4: variableFontSizes.s20000,  // 320px - Extra Big     // ${fontSizes.x4}
}


/**
 * @Description <br/>
 * FontWeights: _Define a densidade da fonte._
 * 
 * @Available <br/>
 * _w500: 500 | w700: 700_
 * @Example <br/>
 * _Use _fontWeights.w500_ para weight = 500._
 */

export const fontWeights = {
  w100: variableFontWeights.w100, // ${fontWeights.w100}
  w200: variableFontWeights.w200, // ${fontWeights.w200}
  w300: variableFontWeights.w300, // ${fontWeights.w300}
  w400: variableFontWeights.w400, // ${fontWeights.w400}
  w500: variableFontWeights.w500, // ${fontWeights.w500}
  w600: variableFontWeights.w600, // ${fontWeights.w600}
  w700: variableFontWeights.w700, // ${fontWeights.w700}
  w800: variableFontWeights.w800, // ${fontWeights.w800}
  w900: variableFontWeights.w900, // ${fontWeights.w900}
}

/**
 * @Description <br/>
 * FontFamily: _Define as familia das fontes._
 * 
 * @Available <br/>
 * DMsans, Gelica
 * @Example <br/>
 * _Use _gelica_nomedafont
 */

export const fontFamily = {
  nunito: "Nunito",
}

