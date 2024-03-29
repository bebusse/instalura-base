import breakpointsMedia from './breakpointsMedia';

export default function propToStyle(propName) {
  return (props) => {
    const propValue = props[propName];

    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        [propName]: props[propName],
      };
    }

    if (typeof propValue === 'object') {
      const propStyledObject = {
        xs: {
          [propName]: propValue.xs,
        },
        sm: {
          [propName]: propValue.sm,
        },
        md: {
          [propName]: propValue.md,
        },
        lg: {
          [propName]: propValue.lg,
        },
        xl: {
          [propName]: propValue.xl,
        },
      };
      return breakpointsMedia(propStyledObject);
    }
    return '';
  };
}
