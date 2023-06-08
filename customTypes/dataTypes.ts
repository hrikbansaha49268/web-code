interface Service {
    "theTag": string;
    "theDesc": string;
    "theFromC": string;
    "theToC": string;
};

const user: Service = {
    "theTag": "string;",
    "theDesc": "string;",
    "theFromC": "string;",
    "theToC": "string;"
};

export type ServiceType = typeof user;
