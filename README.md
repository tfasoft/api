# Telegram Factor Authentication - API

Telegram Factor Authentication server.

## How does it works?

The API service gets 2 params.

- Admin access token
- User generated token

When you or SDK pass these params, if they be ok, you get the user data and 200 http code. In the other hand, if not, you will get 401 and you should check body response for error that check what is the error.

You don't need use this API manualy. Use our SDKs to make fast, clean and betther apps.

## SDKs

Our SDKs are availiable for Python and Node.