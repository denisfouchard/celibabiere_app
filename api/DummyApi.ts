import { User, ApiInterface} from "./types";
import {getAppState, updateAppState} from "./AppState";

export class DummyApi implements ApiInterface {
   
    async logout(): Promise<void> {
        updateAppState({logged: false, user: null, token: ""});
    }

    async login(): Promise<void> {
        updateAppState({logged: true, user: await this.fetchMe(), token: "token-keycloak-dummy"});
    }

    refreshState(): void {
    }

    
    async fetchMe(): Promise<User> {
        return {
            id: 7897,
            name: "Denis Fouchard",
            pseudo: "df",
            promo: "2025",
            balance: 10
        };
    }

   
}
