import { UserConfig } from '../models/user.config';

// Mock data is only for development environment
// Will not be included in prod build(compiled code)
// because of angular.json replacements rule.
export const sampleConfig: UserConfig = {
    _GLOBALSITEBASEURL: '',
    _GLOBALAPIBASEURL: '',
    _LOGGEDINUSER: 0,
    _SECURITYLEVEL: 0,
    _MODULEACCESS: false,
    _MODULEADMIN: false,
    _USERFULLNAME: ''
};
