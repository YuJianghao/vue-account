import { App, InjectionKey, ComputedRef } from "vue";
import { AxiosInstance, AxiosRequestConfig } from "axios";
interface IConfig {
    baseURL: string;
    authBaseURL?: string;
    onTokenExpire: () => void;
    prefix?: string;
    getAxiosInstance?: (config?: AxiosRequestConfig) => AxiosInstance;
    injectionKey?: string;
}
interface IUserInfo {
    username: string;
}
interface IAccount {
    readonly defaults: {
        baseURL: string;
        headers: {
            ["Content-Type"]: "application/json";
        };
    };
    readonly isSignedIn: boolean;
    origin: AxiosInstance;
    access: AxiosInstance;
    refresh: AxiosInstance;
    user: ComputedRef<IUserInfo | undefined>;
    signin(username: string, password: string): void;
    info(): void;
    signout(): void;
    changeInfo(info?: IUserInfo): void;
    install(app: App): void;
}
export declare function createAccount(config: IConfig): IAccount;
export declare function useAccount(key?: InjectionKey<IAccount> | string | null): IAccount;
export {};
