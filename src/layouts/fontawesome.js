import {library} from "@fortawesome/fontawesome";

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

export function initIcons() {
  const solids = [faChevronDown, faArrowDown, faSquare, faLanguage, faArrowLeft, faArrowRight, faSearch, faMinus, faPlus, faArrowUp];
  const regulars = [faCheckSquare];
  
  library.add(brands, ...solids, ...regulars);
}
