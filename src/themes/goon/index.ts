import { buildCustomColorScheme } from 'themes/utils';

/** The "Goon" color scheme: neon pink on near-black. */
const theme = buildCustomColorScheme({
    palette: {
        background: {
            default: '#0a0008',
            paper: '#160012'
        },
        primary: {
            main: '#ff2a9d',
            contrastText: '#fff'
        },
        secondary: {
            main: '#8a2be2'
        },
        text: {
            primary: '#fff',
            secondary: 'rgba(255, 220, 240, 0.72)'
        },
        action: {
            focus: 'rgba(255, 42, 157, 0.25)',
            hover: 'rgba(255, 42, 157, 0.12)'
        },
        divider: 'rgba(255, 42, 157, 0.25)',
        AppBar: {
            defaultBg: '#0a0008'
        },
        Button: {
            inheritContainedBg: 'rgba(255, 42, 157, 0.15)',
            inheritContainedHoverBg: 'rgba(255, 42, 157, 0.35)'
        },
        FilledInput: {
            bg: 'rgba(255, 42, 157, 0.08)'
        },
        SnackbarContent: {
            bg: '#2a0020',
            color: '#fff'
        }
    }
});

export default theme;
