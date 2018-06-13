module.exports = {
    getPlanes: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { num } = req.params

        dbInstance.get_planes([num])
            .then(planes => res.status(200).send(planes))
            .catch(error => res.status(500).send(error))
    }
}