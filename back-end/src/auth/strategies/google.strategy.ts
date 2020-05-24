import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";
import { CLIENT_ID, CLIENT_SECRET } from "src/utils/global.constants";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor() {
        super({
            clientID: CLIENT_ID, // <- Replace this with your client id 
            clientSecret: CLIENT_SECRET, // <- Replace this with your client secret 
            callbackURL: 'http://localhost:3000/auth/google/callback',
            passReqToCallback: true,
            scope: ['profile', 'admin']
        })
    }
    async validate(request: any, accessToken: string, refreshToken: string, profile, done: Function) {
        try {
            console.log('Google profile:', profile);
            const jwt: string = 'placeholderJWT'
            const user = { jwt }
            done(null, user);
        } catch (err) {
            done(err, false);
        }
    }
}
