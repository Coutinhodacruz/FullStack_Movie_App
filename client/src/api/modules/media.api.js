import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const  mediaEndpoint = {
    list: ({ mediaType, mediaCategory, page}) => `${mediaType}/${mediaCategory}?pages=${page}`,
    detail: ({ mediaType, mediaId}) => `${mediaType}/${mediaId}`,
    search: ({ mediaType, query, page}) => `${mediaType}/search?query${query}?pages=${page}`,
};

const mediaApi = {
    getList: async({ mediaType, mediaCategory, page }) => {
        try{
            const response = await publicClient.get(
                mediaEndpoint.list({ mediaType, mediaCategory, page })
            )
            return { response };
        }catch (err) { return { err}; }
    },
    getDetail: async({ mediaType, mediaId }) => {
        try{
            const response = await publicClient.get(
                mediaEndpoint.list({ mediaType, mediaId })
            )
            return { response };
        }catch (err) { return { err}; }
    },
    search: async({ mediaType, query, page }) => {
        try{
            const response = await publicClient.get(
                mediaEndpoint.list({ mediaType, query, page })
            )
            return { response };
        }catch (err) { return { err}; }
    },
}