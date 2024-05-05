import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
    audience: 'http://localhost:6969',
    issuerBaseURL: 'https://dev-iu1wvgmq6kxkcr3c.us.auth0.com',
    tokenSigningAlg: 'RS256'
});

export default jwtCheck;
