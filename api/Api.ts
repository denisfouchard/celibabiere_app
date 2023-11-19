import { DummyApi } from "./DummyApi";
import { ApiInterface } from "./types";

// En fonction de la configuration, la classe Api est fake (pour les tests) ou réelle (utilise le serveur)
export const ApiClass = DummyApi;
export const Api: ApiInterface = new ApiClass();

// TODO : remove (debug)
//@ts-ignore
window.Api = Api;
