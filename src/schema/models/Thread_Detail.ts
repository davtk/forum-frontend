/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Comment_Detail } from './Comment_Detail';

export type Thread_Detail = {
    uuid?: string;
    topic?: string;
    created?: string;
    comments?: Array<Comment_Detail>;
};
