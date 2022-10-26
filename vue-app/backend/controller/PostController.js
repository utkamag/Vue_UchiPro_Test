import Service from "../Service/Service.js";

class PostController {
    async createCrypto(req, res) {
        try {
            const post = await Service.createCrypto(req.body, id)
            res.json(post)
        }catch (e) {
            res.status(500).json(e)
        }
    }
    async create(req, res) {
        try {
            const post = await Service.create(req.body)
            res.json(post)
        }catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try{
            const posts = await Service.getAll()
            return res.json(posts)

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const post = await Service.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const updatePost = await Service.update(req.body)
            return res.json(updatePost)

        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const deletePost = await Service.delete(req.params.id)
            return res.json(deletePost)

        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController()