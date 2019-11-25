import {library, dom} from '@fortawesome/fontawesome-svg-core';
import {
  faQuoteLeft, faQuoteRight, faMinus
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitterSquare, faFacebookSquare, faGithubSquare, faLinkedin
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faQuoteLeft, faQuoteRight,faMinus,
  faTwitterSquare, faFacebookSquare, faGithubSquare, faLinkedin
);
dom.watch();