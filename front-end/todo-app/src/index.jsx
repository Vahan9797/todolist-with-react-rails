import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes/index";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "antd/dist/antd.css";

const client = new ApolloClient({
    uri: "http://localhost:3000/api",
    cache: new InMemoryCache()
});


ReactDOM.render(
    <ApolloProvider client={client} >
        <>{Routes}</>
    </ApolloProvider>,

    document.getElementById('root')
);