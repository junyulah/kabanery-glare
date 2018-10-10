/**
 * define the default style for kabanery-glare
 */

module.exports = (basics = {
  box: {
    margin: 0
  },

  font: {
    size: {
      normal: '1rem',
      small: '0.75rem'
    },
    color: {
      placeholder: 'rgba(0, 0, 0, 0.54)'
    }
  },

  line: {
    color: {
      normal: 'rgba(0, 0, 0, 0.42)',
      hover: 'rgb(31,31,31)',
      light: '#1976d2'
    }
  }
}) => {
  return {
    TextField: {
      box: {
        display: 'inline-flex',
        position: 'relative',
        width: 200,
        height: 48,
        cursor: 'text',
        margin: basics.box.margin,
        padding: 0,
        boxSizing: 'border-box'
      },

      placeholder: {
        place: {
          position: 'absolute',
          left: 0,
          fontSize: basics.font.size.normal,
          color: basics.font.color.placeholder,
          cursor: 'text',
          transform: 'translate(0, 24px) scale(1)',
          transition: 'color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
        },

        active: {
          position: 'absolute',
          top: 0,
          left: 0,
          fontSize: basics.font.size.normal,
          color: basics.line.color.light,
          transform: 'translate(0, 1.5px) scale(0.75)',
          transition: 'color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
        },

        placeContent: {
          position: 'absolute',
          top: 0,
          left: 0,
          transform: 'translate(0, 1.5px) scale(0.75)',
          fontSize: basics.font.size.normal,
          color: basics.font.color.placeholder,
          cursor: 'text'
        }
      },

      input: {
        width: '100%',
        height: 30,
        position: 'absolute',
        bottom: 0,
        left: 0,
        margin: 0,
        padding: '0 6px 0 6px',
        border: 'none',
        borderBottom: `1px solid ${basics.line.color.normal}`,
        fontSize: basics.font.size.normal,
        outline: 'none',
        boxSizing: 'border-box'
      },

      hover: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderBottom: `2px solid ${basics.line.color.hover}`,
      },

      focus: {
        active: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderBottom: `2px solid ${basics.line.color.light}`,
          transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
        },
        unactive: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderBottom: `2px solid ${basics.line.color.light}`,
          transform: 'scaleX(0)',
          transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
        }
      }
    },

    Button: {
      box: {
        normal: {
          margin: basics.box.margin,
          boxSizing: 'border-box',
          padding: '8px 16px',
          minWidth: 64,
          minHeight: 36,
          fontSize: '0.875rem',
          cursor: 'pointer',
          letterSpacing: '0.02857em',
          fontWeight: '500',
          borderRadius: 4,
          textTransform: 'uppercase',
          lineHeight: '1.5',
          color: 'rgba(0, 0, 0, 0.87)',
          border: 0,
          outline: 0
        },

        hover: {
          margin: basics.box.margin,
          boxSizing: 'border-box',
          padding: '8px 16px',
          minWidth: 64,
          minHeight: 36,
          fontSize: '0.875rem',
          cursor: 'pointer',
          letterSpacing: '0.02857em',
          fontWeight: '500',
          borderRadius: 4,
          textTransform: 'uppercase',
          lineHeight: '1.5',
          color: 'rgba(0, 0, 0, 0.87)',
          border: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.08)',
          textDecoration: 'none',
          outline: 0
        }
      }
    }
  };
};
