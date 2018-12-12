import fontawesome from '@fortawesome/fontawesome';

import brands from '@fortawesome/fontawesome-free-brands';
import {
  faArrowDown,
  faChevronDown,
  faSquare,
  faLanguage,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faSearch,
  faMinus,
  faPlus
} from '@fortawesome/fontawesome-free-solid';
import { faCheckSquare } from '@fortawesome/fontawesome-free-regular';

const solids = [faChevronDown, faArrowDown, faSquare, faLanguage, faArrowLeft, faArrowRight, faSearch, faMinus, faPlus, faArrowUp];
const regulars = [faCheckSquare];

fontawesome.library.add(brands, ...solids, ...regulars);

export default fontawesome;
