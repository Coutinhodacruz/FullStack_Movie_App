import privateClient from "../client/private.client";

const reviewEndpoint = {
    list: "reviews",
    add: "reviews",
    remove: ({ reviewId }) => `reviews/${reviewId}`
}

const reviewApi = {
    add: async ({
        mediaId,
        mediaType,
        mediaTitle,
        mediaPoster,
        content
    }) => {
       try {
           const response = await privateClient.post(
               reviewEndpoint.add,
               {
                   mediaId,
                   mediaType,
                   mediaTitle,
                   mediaPoster,
                   content
               }
           );

           return { response };
       } catch (err) { return  { err }; }
    },
    remove: async ({ reviewId }) => {
       try {
           const response = await privateClient.delete(reviewEndpoint.remove({
               reviewId}));

           return { response };
       } catch (err) { return  { err }; }
    },
    getList: async () => {
        try {
            const response = await privateClient.get(reviewEndpoint.list);
 
            return { response };
        } catch (err) { return  { err }; }
     }
};

export default reviewApi