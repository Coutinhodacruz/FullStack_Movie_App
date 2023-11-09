import publicClient from "../client/public.client";

const personEndPoint = {
    detail: ({personId}) => `person/${personId}`,
    medias: ({personId}) => `person/${personId}/medias`
}

const personApi = {
    detail: async ({ personId }) => {
        try {
            const response = await publicClient.get(personEndPoint.detail({
                personId}));

            return { response };
        } catch (err) { return {err}; }
    },medias: async ({ personId }) => {
        try {
            const response = await publicClient.get(personEndPoint.medias({
                personId}));

            return { response };
        } catch (err) { return {err}; }
    },
}

export default personApi;