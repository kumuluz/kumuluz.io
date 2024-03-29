/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import 'prismjs/themes/prism-okaidia.css';
import 'animate.css';
import {initIcons} from "./src/layouts/fontawesome";
import {doPolyfills} from "./src/layouts/polyfills";

doPolyfills();
initIcons();
