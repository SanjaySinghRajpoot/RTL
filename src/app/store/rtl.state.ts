import { ApiCallsListRoot } from '../shared/models/apiCallsPayload';
import { APICallStatusEnum } from '../shared/services/consts-enums-functions';
import { RTLConfiguration, ConfigSettingsNode, GetInfoRoot } from '../shared/models/RTLconfig';

import { LNDState } from '../lnd/store/lnd.state';
import { CLState } from '../clightning/store/cl.state';
import { ECLState } from '../eclair/store/ecl.state';

export interface RootState {
  apiURL: string;
  apisCallStatus: ApiCallsListRoot;
  selNode: ConfigSettingsNode;
  appConfig: RTLConfiguration;
  nodeData: GetInfoRoot;
}

const initNodeSettings = { userPersona: 'OPERATOR', themeMode: 'DAY', themeColor: 'PURPLE', channelBackupPath: '', selCurrencyUnit: 'USD', fiatConversion: false, currencyUnits: ['Sats', 'BTC', 'USD'], bitcoindConfigPath: '' };
const initNodeAuthentication = { configPath: '', swapMacaroonPath: '', boltzMacaroonPath: '' };

export const initRootState: RootState = {
  apiURL: '',
  apisCallStatus: { Login: { status: APICallStatusEnum.UN_INITIATED }, IsAuthorized: { status: APICallStatusEnum.UN_INITIATED } },
  selNode: { settings: initNodeSettings, authentication: initNodeAuthentication, lnImplementation: 'LND' },
  appConfig: {
    defaultNodeIndex: -1,
    selectedNodeIndex: -1,
    sso: { rtlSSO: 0, logoutRedirectLink: '' },
    enable2FA: false,
    nodes: [{ settings: initNodeSettings, authentication: initNodeAuthentication }]
  },
  nodeData: {}
};

export interface RTLState {
  root: RootState;
  lnd: LNDState;
  cl: CLState;
  ecl: ECLState;
}
