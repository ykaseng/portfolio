import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: 'http://ghost.localhost',
    key: 'ea783748885243171810c82af2',
    version: "v3"
})

export async function getPage(o) {
    return await api.pages
        .read(o)
        .catch((err) => {
            console.error(err);
        })
}