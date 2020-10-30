// @ts-nocheck

import { css } from "styled-components";
import BREAKPOINT from "./breakpoint";
import SPACING from "./spacing";

export const remCalc = (value: string | number) => {
  if (typeof value === "number") return `${value / 16}rem`;
  const index = value.search("px");

  if (index !== -1) {
    value = value.slice(0, index);
  }

  return `${parseInt(value) / 16}rem`;
};

export const mediaQuery = Object.keys(BREAKPOINT).reduce(
  (accumulator: { [key: string]: any }, device: string) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize: number = BREAKPOINT[device] / 16;

    accumulator[device] = (...args) => {
      return css`
        @media screen and (min-width: ${emSize}em) {
          ${css(...args)};
        }
      `;
    };
    return accumulator;
  },
  {}
);

/**
 * Generates responsive styles from an array
 * @param {String} property The CSS property
 * @param {Array} values List of CSS property values
 */
export const generateResponsiveStyles = (property: string, values: any) => {
  if (!values) return;

  switch (property) {
    case "span":
      if (Array.isArray(values)) {
        return values.reduce((acc, val, index) => {
          const device = Object.keys(mediaQuery)[index];
          return (
            acc +
            mediaQuery[device]`
              width: ${(val / 12) * 100}%;
            `.join("")
          );
        }, ``);
      } else {
        return `width: ${(values / 12) * 100}%;`;
      }

    case "padding":
      if (Array.isArray(values)) {
        return values.reduce((acc, val, index) => {
          const device = Object.keys(mediaQuery)[index];
          return (
            acc +
            mediaQuery[device]`
              ${property}: ${SPACING[val]};
            `.join("")
          );
        }, ``);
      } else {
        return `${property}: ${SPACING[values]};`;
      }

    case "margin":
      if (Array.isArray(values)) {
        return values.reduce((acc, val, index) => {
          const device = Object.keys(mediaQuery)[index];
          return (
            acc +
            mediaQuery[device]`
              ${property}: ${SPACING[val]};
            `.join("")
          );
        }, ``);
      } else {
        return `${property}: ${SPACING[values]};`;
      }

    default:
      if (property.includes("padding-") || property.includes("margin-")) {
        if (Array.isArray(values)) {
          return values.reduce((acc, val, index) => {
            const device = Object.keys(mediaQuery)[index];
            return (
              acc +
              mediaQuery[device]`
                ${property}: ${SPACING[val]};
              `.join("")
            );
          }, ``);
        } else {
          return `${property}: ${SPACING[values]};`;
        }
      }

      if (Array.isArray(values)) {
        return values.reduce((acc, val, index) => {
          const device = Object.keys(mediaQuery)[index];
          return (
            acc +
            mediaQuery[device]`
              ${property}: ${val};
              `.join("")
          );
        }, ``);
      } else {
        return `${property}: ${values};`;
      }
  }
};
