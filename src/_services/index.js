export * from './user.service';
export * from './location.service';
export * from './task.service';

export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                //window.location.reload(true);
            }

            const error = (data && data.details) || response.statusText;
            return Promise.reject(error);
        }
        else if(!data.success){
            return Promise.reject(data.messages)
        }

        return data.messages;
    });
}