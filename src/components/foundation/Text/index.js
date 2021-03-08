import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import propToStyle from '../../../theme/utils/propToStyle';

function TextCss(theme, variant) {
  return css`    
        font-size: ${get(theme, `typographyVariants.${variant}.fontSize`)};
        font-weight: ${get(theme, `typographyVariants.${variant}.fontWeight`)};
        line-height: ${get(theme, `typographyVariants.${variant}.lineHeight`)};
    `;
}

export const TextStyleVariantsMap = {
  title: css`${({ theme }) => TextCss(theme, 'title')}`,
  titleXS: css`${({ theme }) => TextCss(theme, 'titleXS')}`,
  subTitle: css`${({ theme }) => TextCss(theme, 'subTitle')}`,
  paragraph1: css`${({ theme }) => TextCss(theme, 'paragraph1')}`,
  paragraph2: css`${({ theme }) => TextCss(theme, 'paragraph2')}`,
  smallestException: css`${({ theme }) => TextCss(theme, 'smallestException')}`,
};

const TextBase = styled.span`
    ${({ variant }) => TextStyleVariantsMap[variant]};
    color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
    ${propToStyle('textAlign')}
    ${propToStyle('marginBottom')}
    ${({ theme, as }) => {
    if (as === 'a') {
      return css`    
                text-align: center;
                display: block;
                text-decoration: none;
                color: ${get(theme, 'colors.tertiary.light.color')};
                &:hover {
                    color: ${get(theme, 'colors.tertiary.light.contrastText')}
                }
            `;
    }
    return false;
  }};
`;

export default function Text({
  tag, variant, children, ...props
}) {
  // href = href != null ? href={}:'';
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};
