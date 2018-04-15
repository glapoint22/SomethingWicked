const PROXY_CONFIG = [
    {
        context: [
            "/api",
            "/assets"
        ],
        target: "http://localhost:49329/",
        secure: false
    }
]
module.exports = PROXY_CONFIG;