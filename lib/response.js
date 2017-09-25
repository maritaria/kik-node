'use strict';

class Response {

    static text(body, metadata) {
        return {
            type: 'text',
            body: '' + body,
            metadata: metadata
        };
    }

    static friendPicker(body, min, max, preselected, metadata) {
        const response = {
            type: 'friend-picker'
        };
        if (body) {
            response.body = '' + body;
        }

        if (!isNaN(min) && min !== null) {
            response.min = min;
        }

        if (!isNaN(max) && max !== null) {
            response.max = max;
        }

        if (preselected) {
            response.preselected = preselected;
        }

        if (metadata) {
            response.metadata = metadata;
        }

        return response;
    }

    static picture(picUrl, metadata) {
        return {
            type: 'picture',
            picUrl: picUrl,
            metadata: metadata
        };
    }

}

module.exports = Response;
