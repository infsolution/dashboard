import { Config } from "../types/system";

const prod = {
    url: {
        API_URL: `https://api-raffle.clsdev.com.br/api/v1/`,
        URL_WS: `wss://api-raffle.clsdev.com.br`
    }
};

const hml = {
    url: {
        API_URL: `https://api-raffle-hml.clsdev.com.br/api/v1/`,
        URL_WS: `wss://api-raffle-hml.clsdev.com.br`
    }
};
const dev = {
    url: {
        API_URL: `http://localhost/api/v1/`,
        URL_WS: `ws://localhost:3333`
    }
};

const setEnviroment = () => {
    let env: Config;
    switch (process.env.NODE_ENV) {
        case 'development':
            env = dev
            break
        case 'production':
            env = prod
            break
        case 'test':
            env = hml
            break

    }

    return env
}
export const config = setEnviroment();