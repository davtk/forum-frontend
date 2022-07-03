/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Comment_Create } from '../models/Comment_Create';
import type { Thread_Create } from '../models/Thread_Create';
import type { Thread_Detail } from '../models/Thread_Detail';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ThreadsService {

    /**
     * Get single thread
     * @param uuid 
     * @returns Thread_Detail List of threads
     * @throws ApiError
     */
    public static getThread(
uuid: string,
): CancelablePromise<Array<Thread_Detail>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/threads/{uuid}',
            path: {
                'uuid': uuid,
            },
        });
    }

    /**
     * Comment on thread
     * @param uuid 
     * @param requestBody 
     * @returns Thread_Detail Created thread
     * @throws ApiError
     */
    public static commentThread(
uuid: string,
requestBody: Comment_Create,
): CancelablePromise<Thread_Detail> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/threads/{uuid}',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns Thread_Detail List of threads
     * @throws ApiError
     */
    public static getThreads(): CancelablePromise<Array<Thread_Detail>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/threads',
        });
    }

    /**
     * @param requestBody 
     * @returns Thread_Detail Created thread
     * @throws ApiError
     */
    public static createThread(
requestBody: Thread_Create,
): CancelablePromise<Thread_Detail> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/threads',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
