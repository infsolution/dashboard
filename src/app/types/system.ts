
export type url = {
    API_URL: string;
    URL_WS: string;
}
export type Config = {
    url: url;
}

export type RFOptions = {
    method: string;
    headers?: any;
    body?: string;
}
export type RFFetch = {
    url: string;
    options: RFOptions;
}

export type RFLogin = {
    username: string;
    password: string;
}

export type RFComponentProps = {
    style: string;
    name?: string;
    children: string
}