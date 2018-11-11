import CMS from "netlify-cms";
import AddressWidget from './AddressWidgetControl.js';
import Preview from './Preview';

CMS.registerWidget('address', AddressWidgetControl, Preview);
