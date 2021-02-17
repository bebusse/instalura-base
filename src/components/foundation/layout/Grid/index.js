import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { breakpoints } from '../../../../theme/index'

const Container = styled.div`

    width: 100%;
    padding-right: 28px;
    padding-left: 28px;
    margin-right: auto;
    margin-left: auto;
    ${breakpointsMedia({
    xs: css`
        max-width: initial;
    `,
    sm: css`
        max-width: 576px; 
    `,
    md: css`
        max-width: 768px;
        padding-right: 16px;
        padding-left: 16px; 
    `,
    lg: css`
        max-width: 1160px; 
    `,
    xl: css`
        max-width: 1222px;
    `,
    })}
`;

const Row = styled.div`
display: flex;
flex-wrap: wrap;
margin-right: -16px;
margin-left: -16px;
`;

function colValuesCss(value) {
    return css`
        flex: 0 0 ${(100 * value) / 12}%;
        max-width: ${(100 * value) / 12}%;
    `;
}

function colOffsetCss(value) {
    return css`
        margin-left: ${(100 * value) / 12}%;
    `;
}

function colBreakpoints(value,cssFunction) {
    const breakpointsNames = Object.keys(breakpoints);
    let colValuesBreakpointsObj = {};
    breakpointsNames.map((breakpointName) => {
        if (value[breakpointName] != null) {
            colValuesBreakpointsObj[breakpointName] = cssFunction(value[breakpointName]);
        }
    });
    return colValuesBreakpointsObj;
}

const Col = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  ${({ value }) => {
    if (typeof value === 'number') {
      return colValuesCss(value);
    }
    return breakpointsMedia(colBreakpoints(value,colValuesCss));
  }}
  ${({ offset }) => {
    if (typeof offset === 'number') {
      return colOffsetCss(offset);
    }
    return breakpointsMedia(colBreakpoints(offset,colOffsetCss));
  }}
`;

Col.defaultProps = {
    value: {},
    offset: {},
  };

export const Grid = {
    Container,
    Row,
    Col
}