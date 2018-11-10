import CMS from "netlify-cms";
import AddressWidget from './AddressWidgetControl.js';
import Preview from './Preview';

console.log('YOOO')

CMS.registerWidget('address', AddressWidgetControl, Preview);
