import type {JwtUserPay} from '.auth';

declare global {
    namespace Express{
        interface Request{
            user: JwtUserPayload;
        }
    }
}

export{};
