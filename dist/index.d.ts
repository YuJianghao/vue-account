import { App, InjectionKey } from "vue";
import { AxiosInstance } from "axios";
interface IConfig {
    baseURL: string;
    authBaseURL?: string;
    onTokenExpire: () => void;
    prefix?: string;
}
interface IUserInfo {
    username: string;
}
declare class Account {
    private baseURL;
    private authBaseURL;
    private onTokenExpire;
    private storage;
    origin: AxiosInstance;
    access: AxiosInstance;
    refresh: AxiosInstance;
    constructor(config: IConfig);
    install(vue: App, injectKey?: InjectionKey<Account> | string): void;
    get defaults(): {
        baseURL: string;
        headers: {
            "Content-Type": string;
        };
    };
    private withAuthBase;
    private setupAccess;
    private setupRequest;
    get isSignedIn(): boolean;
    signin(username: string, password: string): Promise<any>;
    signout(): Promise<void>;
    info(): Promise<IUserInfo>;
    changeInfo(info?: {
        username?: string;
        password?: string;
    }): Promise<void>;
}
export declare function createAccount(config: IConfig): Account;
export declare function useAccount(key?: InjectionKey<Account> | string | null): Account | undefined;
export {};
