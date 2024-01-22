import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StripeProvider } from 'react-stripe-elements';
import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faIgloo,
  faSync,
  faSpinner,
  faPaperPlane,
  faHome,
  faTh,
  faRoute,
  faChartBar,
  faUsers,
  faSignOutAlt,
  faPowerOff,
  faSearch,
  faTape,
  faTimes,
  faCaretLeft,
  faArchive,
  faCheck,
  faArrowCircleLeft,
  faInfoCircle,
  faCogs,
  faUpload,
  faTerminal,
  faExclamationCircle,
  faShippingFast,
  faDatabase,
  faShieldAlt,
  faFolderOpen,
  faPlug,
  faNetworkWired,
  faHeartbeat,
  faGlobe,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeartFar } from '@fortawesome/free-regular-svg-icons';

library.add(
  faIgloo as IconDefinition,
  faSync as IconDefinition,
  faExclamationCircle as IconDefinition,
  faTape as IconDefinition,
  faHeartbeat as IconDefinition,
  faPowerOff as IconDefinition,
  faChartBar as IconDefinition,
  faCaretLeft as IconDefinition,
  faInfoCircle as IconDefinition,
  faArrowCircleLeft as IconDefinition,
  faSpinner as IconDefinition,
  faShippingFast as IconDefinition,
  faPaperPlane as IconDefinition,
  faCheck as IconDefinition,
  faArchive as IconDefinition,
  faTimes as IconDefinition,
  farHeartFar as IconDefinition,
  faHome as IconDefinition,
  faTerminal as IconDefinition,
  faTh as IconDefinition,
  faRoute as IconDefinition,
  faShippingFast as IconDefinition,
  faUsers as IconDefinition,
  faDatabase as IconDefinition,
  faShieldAlt as IconDefinition,
  faFolderOpen as IconDefinition,
  faChartLine as IconDefinition,
  faTerminal as IconDefinition,
  faPlug as IconDefinition,
  faNetworkWired as IconDefinition,
  faGlobe as IconDefinition,
  faCogs as IconDefinition,
  faSignOutAlt as IconDefinition,
  faSearch as IconDefinition,
  faUpload as IconDefinition
);

const render = () => {
  ReactDOM.render(
    <StripeProvider apiKey='pk_test_tbzPQH0dOO05i8FOcf7nveCf00eG0yQADe'>
      <App />
    </StripeProvider>,
    document.getElementById('root')
  );
};

render();
