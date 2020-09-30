const colors = {
    primary: '#047cdc',
    secondary: '#44b3ff',
    warning: '#f6a623',
    warningDark: '#e29414',
    danger: '#ff4c2a',
    dangerDark: '#d12100',
    success: '#1ab365',
    successDark: '#0d9a52',
    light: '#e2f3ff',
    dark: '#2c4051',
    white: '#ffffff',
    borderLight: 'rgba(0, 0, 0, 0.1)',
    borderDark: 'rgba(0, 0, 0, 0.5)',
    bodyColor: '#363b42',
    bodyLightColor: '#5b626c',
}


export const theme = {

    // fonts property
    fonts: {
        family: {
            primary: '\'Source Sans Pro\', sans-serif',
            secondary: '\'Raleway\', serif;'
        },
        size: {
            xxs: '14px',
            xs: '16px',
            sm: '18px',
            md: '20px',
            lg: '22px',
            xl: '24px',
        },
        weight: {
            regular: '400',
            semibold: '600',
            bold: '700',
        },
        color: {
            primary: '#363b42',
            primaryLight: '#5b626c',
            white: '#ffffff',
        }
    },

    // body default style
    body: {
        primary: '#363b42',
        primaryLight: '#5b626c',
        fontSize: '14px',
        fontWeight: '400',
        font: {
            primary: '\'Source Sans Pro\', sans-serif',
            secondary: '\'Raleway\', serif;'
        }
    },

    // heading styled property
    heading: {
        color: '#363b42',
        h2: {
            fontSize: '22px',
            fontWeight: '700',
        },
        h3: {
            fontSize: '20px',
            fontWeight: '700',
        },
        h4: {
            fontSize: '18px',
            fontWeight: '700',
        },
        h5: {
            fontSize: '16px',
            fontWeight: '700',
        },
        h6: {
            fontSize: '14px',
            fontWeight: '700',
        }
    },

    // input field style property
    inputField: {
        color: {
            primary: '#363b42',
            primaryLight: '#5b626c',
        },
        fontSize: '14px',
    },

    // Common style property
    common: {
        boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        gradientColor: 'linear-gradient(to top, #4fb6fc, #027adb)'
    },

    // Header style property
    header: {
        padding: '10px',
        background: '#f2f2f2',
        color: '#a2a2a2',
        fontSize: '16px',
        stiky: false
    },

    // user style property
    user: {
        iconSize: '18px',
        color: {
            primary: '#363b42',
            primaryLight: '#5b626c',
        },
        arrowSize: '12px',
        dropdownWrapper: {
            top: '17px',
            background: '#ffffff',
            radius: '0 0 4px 4px',
            minWidth: '120px'
        },
        link:{
            fontSize: '14px',
            padding: '7px 15px',
            hoverBg: '#f2f2f2',
            border: '#ededed'
        }
    },

    // Nav style property
    nav: {
        fontSize: '16px',
        color: 'white',
    },

    // Side nav style property
    sideNav: {
        background: colors.light,
        color: colors.dark,
        hoverColor: colors.light,
        linkHoverBg: colors.dark,
    },

    // Title style property
    title: {
        fontSize: '24px',
        textDark: colors.dark,
        textLight: 'white',
        titleBg: colors.secondary,
    },

    // Timer style property
    timer: {
        color: '#1ab365',
        padding: '8px 15px',
        background: 'white',
        border: colors.borderLight
    },

    // Button style property
    button: {
        btnRadius: '10px',
        padding: '10px 30px',
        fontSize: '18px',
        background: colors.primary,
        hoverBackground: colors.secondary,
        color: colors.white
    },

    // Radio option property
    radio: {
        defaultBorder: colors.bodyLightColor,
        hoverBorder: colors.bodyColor,
        color: colors.bodyColor
    },

    // Checkbox option property
    check: {
        size: '10px',
        defaultBorder: colors.bodyLightColor,
        hoverBorder: colors.bodyColor,
        color: colors.bodyColor,
        fontSize: '14px',
        iconSize: '10px'
    }

}