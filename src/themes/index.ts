import { createTheme } from '@mui/material/styles';

import { DEFAULT_THEME_OPTIONS } from './_base/theme';
import appletv from './appletv';
import blueradiance from './blueradiance';
import dark from './dark';
import goon from './goon';
import light from './light';
import purplehaze from './purplehaze';
import wmc from './wmc';

/** The default theme containing all color scheme variants. */
const DEFAULT_THEME = createTheme({
    cssVariables: {
        cssVarPrefix: 'jf',
        colorSchemeSelector: '[data-theme="%s"]',
        disableCssColorScheme: true
    },
    defaultColorScheme: 'goon',
    ...DEFAULT_THEME_OPTIONS,
    colorSchemes: {
        appletv,
        blueradiance,
        dark,
        goon,
        light,
        purplehaze,
        wmc
    }
});

export default DEFAULT_THEME;
