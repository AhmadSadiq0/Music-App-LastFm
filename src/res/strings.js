import * as RNLocalize from "react-native-localize";
import { getCode, getName } from 'country-list';

export const API_KEY = "";
export const COUNTRY = getName(RNLocalize.getCountry());

export const HEADING_TEXT = 'last.fm';
export const ERR_MSG_TEXT = 'Failed\nPlease check internet connectivity!';

export const COLOR_RED = '#FF0000';
export const COLOR_WHITE = '#FFFFFF';