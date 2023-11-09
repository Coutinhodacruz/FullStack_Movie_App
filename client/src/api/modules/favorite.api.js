import privateClient from "../client/private.client";


const favoriteEndPoint = {
    list: "user/favoites",
    add: "user/favorites",
    remove: ({ favoriteId }) => `user/favorites/${favoriteId}`
};

const favoriteApi = {
    getList: async () => {
        try{
            const response = await privateClient.get(favoriteEndPoint.list);

            return { response };
        }catch (err) { return { err}; }
    },
    add: async ({
        mediaId,
        mediaType,
        mediaTitle,
        mediaPoster,
        mediaRate
    }) => {
        try{
            const response = await privateClient.post(
                favioriteEndPoint.add,
                {
                    mediaId,
                    mediaType,
                    mediaTitle,
                    mediaPoster,
                    mediaRate
                }
            );

            return { response };
        }catch (err) { return { err}; }
    },
    remove: async ({ favoriteId }) => {
        try{
            const response = await privateClient.delete(favoriteEndPoint.remove({
                favoriteId}));

            return { response };
        }catch (err) { return { err}; }
    },
}

export default favoriteApi;