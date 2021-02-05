// NOTE: Coldbox 4 rest api is configured to return this type of data.

import { User } from './user';

// When CB is upgraded to CB6, api responses
export interface ApiResponse {
    data?: User;
    status?: string;
    detail?: string;
    message?: string;
    event?: Record<string, unknown>;
}
