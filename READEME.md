# vue-simple-account

## Why?

Sometimes I just need a simple account system, and this is the implementation.

## How to use?

First you need to install [@winwin/koa-simple-account](https://github.com/YuJianghao/koa-simple-account) to your koa server.

```ts
// account.ts
import { createAccount } from "@winwin/vue-simple-account";

export default createAccount({
  baseURL: "http://localhost:5777",
  onTokenExpire: () => {
    console.log("token expired");
    // then force reload window
    window.onbeforeunload = () => {};
    window.location.reload();
  },
  // authBaseURL: "/", // the route where koa-simple-account was mounted, defaults to `/`
});

// router.ts

router.beforeEach(/** You need to implement router guard yourself. */);

// main.ts
app.use(account);

// inside components setup script(or function)
const account = useAccount();

account.origin; // AxiosInstance without token
account.access; // AxiosInstance with access token
account.refresh; // AxiosInstance with refresh token
account.signin("username", "password");
account.signout();
account.info();
account.changeInfo({ usename, password });

// Note: you don't have to refresh tokens, it's automatic.
```
