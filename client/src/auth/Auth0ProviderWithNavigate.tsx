import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface Auth0ProviderWithNavigateProps {
  children: ReactNode;
}

const Auth0ProviderWithNavigate = ({
  children,
}: Auth0ProviderWithNavigateProps) => {
  const navigate = useNavigate();

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URI;

  if (!domain || !clientId || !redirectUri)
    throw new Error("Unable to initialize AUTH!");

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log(appState, user);
    navigate("/auth-callback");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri }}
      onRedirectCallback={onRedirectCallback}>
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
