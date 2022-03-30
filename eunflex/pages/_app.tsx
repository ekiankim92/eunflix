import Layout from "../src/commons/layout";
import "../styles/globals.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { AppProps } from "next/dist/shared/lib/router/router";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { Global } from "@emotion/react";
import { createUploadLink } from "apollo-upload-client";
import { Dispatch, SetStateAction, useState, createContext } from "react";

interface IGlobalConText {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
}

export const GlobalConText = createContext<IGlobalConText>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [myAccessToken, setMyAccessToken] = useState<string>("");
  const myValue = {
    accessToken: myAccessToken,
    setAccessToken: setMyAccessToken,
  };

  const uploadLink = createUploadLink({
    uri: "https://backend05.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${myAccessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalConText.Provider value={myValue}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalConText.Provider>
  );
}

export default MyApp;
