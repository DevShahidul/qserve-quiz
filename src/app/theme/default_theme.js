const colors = {
    primary: '#363b42',
    primaryLight: '#5b626c',
    primaryBlue: '#047cdc',
    secondary: '#44b3ff',
    warning: '#f6a623',
    warningDark: '#e29414',
    danger: '#ff4c2a',
    dangerDark: '#d12100',
    success: '#1ab365',
    successDark: '#0d9a52',
    light: '#e2f3ff',
    dark: '#2c4051',
    darkGray: '#a2a2a2',
    white: '#ffffff',
    whiteSmoke: '#f2f2f2',
    darkWhiteSmoke: '#ededed',
    borderLight: 'rgba(0, 0, 0, 0.1)',
    borderDark: 'rgba(0, 0, 0, 0.5)',
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
            primary: colors.primary,
            primaryLight: colors.primaryLight,
            white: '#ffffff',
        }
    },

    // body default style
    body: {
        primary: colors.primary,
        primaryLight: colors.primaryLight,
        fontSize: '14px',
        fontWeight: '400',
        font: {
            primary: '\'Source Sans Pro\', sans-serif',
            secondary: '\'Raleway\', serif;'
        }
    },

    // heading styled property
    heading: {
        color: colors.primary,
        fontWeight: '700',
        h1: {
            fontSize: '32px',
        },
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
            primary: colors.primary,
            primaryLight: colors.primaryLight,
        },
        fontSize: '14px',
    },

    // Common style property
    common: {
        containerWidth: '1270px',
        boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        gradientColor: 'linear-gradient(to top, #4fb6fc, #027adb)',
        borderColor: 'rgba(102, 102, 102, .3)'
    },

    // Header style property
    header: {
        padding: '10px',
        background: colors.whiteSmoke,
        color: colors.darkGray,
        fontSize: '16px',
        stiky: false
    },

    // user style property
    user: {
        iconSize: '18px',
        color: {
            primary: colors.primary,
            primaryLight: colors.primaryLight,
        },
        arrowSize: '12px',
        dropdownWrapper: {
            top: '17px',
            background: colors.white,
            radius: '0 0 4px 4px',
            minWidth: '120px'
        },
        link:{
            fontSize: '14px',
            padding: '7px 15px',
            hoverBg: colors.whiteSmoke,
            border: colors.darkWhiteSmoke
        }
    },

    // Question controller style property
    qzcontrols: {
        togglerWidth: '27px',
        togglerHeight: '25px',
        iconSize: '16px',
        togglerBg: colors.secondary,
        togglerColor: colors.white,
        iconColor: colors.primary,
        background: colors.white,
        link: {
            color: colors.primary,
            background: colors.whiteSmoke,
            hoverBackground: colors.darkWhiteSmoke,
            padding: '10px 0',
            fontSize: '14px'
        },
        icon: {
            color: colors.primaryBlue,
            background: colors.whiteSmoke,
            defaultSize: '24px',
            expandSize: '16px'
        }
    },

    // question nav style property
    questionnav: {
        width: '320px',
        background: colors.white,
        heading: {
            color: colors.primary,
            background: colors.darkWhiteSmoke,
            fontSize: '',
            fontWeight: '700'
        },
        link: {
            size: '31px',
            color: colors.primary,
            activeClolor: colors.darkWhiteSmoke,
            fontSize: '12',
            fontWeight: '400',
            background: colors.whiteSmoke,
            hoverBackground: colors.darkWhiteSmoke,
        }
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
        padding: '10px 15px',
        fontSize: '16px',
        background: colors.primary,
        hoverBackground: colors.secondary,
        color: colors.white
    },

    // Radio style property
    radio: {
        defaultBorder: colors.bodyLightColor,
        hoverBorder: colors.bodyColor,
        color: colors.bodyColor
    },

    // Checkbox style property
    check: {
        size: '10px',
        defaultBorder: colors.bodyLightColor,
        hoverBorder: colors.bodyColor,
        color: colors.bodyColor,
        fontSize: '14px',
        iconSize: '10px'
    },

    // Home page style property
    home: {
        startBtnBg: colors.success,
        playIconSize: '20px'
    }

}