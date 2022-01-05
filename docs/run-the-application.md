# How to run the application

There are default settings for the application. If custom settings are not provided, the application will run on default settings only

<h2 id="server">Server</h2>

```sh
# if using npm
npm i
npm start

# in yarn
yarn add
yarn start
```

You can set a custom port for the server say 8000 by make a `.env` file in the root of the [server](server) with PORT as the variable

```python
# in .env
PORT=8000
```

The default port for the server is 3456