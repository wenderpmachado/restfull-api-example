export class DotEnv {
    static config(node_env: string) {
        switch (node_env) {
            case 'production':
                require('dotenv').config({path: './api/core/config/env/production.env'});
                break;

            case 'development':
                require('dotenv').config({path: './api/core/config/env/development.env'});
                break;

            case 'test':
            default:
                require('dotenv').config({path: './api/core/config/env/test.env'});
                break;
        }
    }
}