import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: 'https://ghost.ykaseng.com',
    key: 'ea783748885243171810c82af2',
    version: "v3"
})

export async function getPosts(o) {
    return await api.posts
        .browse(o)
        .catch((err) => {
            console.error(err);
        })
}

export async function getSinglePost(postSlug) {
    return await api.posts
        .read({
            slug: postSlug
        })
        .catch((err) => {
            console.error(err)
            throw new Error({ status: 404, message: err.message })
        })
}