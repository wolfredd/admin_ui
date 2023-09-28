
const production = {
    production: true,
    baseUrl: "[LIVE_URL]/api/v1"
}

const development = {
    production: false,
    baseUrl: "http://localhost:8080/api/v1"
}

const testing = {
    production: false,
    baseUrl: "http://localhost:8080/api/v1"
}

export class Env {
    private static config = development;

    public static get baseUrl() : string {
        return Env.config.baseUrl;
    }

    public static get production() : Boolean {
        return Env.config.production;
    }
    
}