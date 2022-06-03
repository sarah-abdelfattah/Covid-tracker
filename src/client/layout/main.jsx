import React, { Suspense, useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useLogin, useUpdateUser } from "@/client/api"
import { Header, HeaderLoading, Sidebar } from '@/client/components';

export const Main = ({ children }) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { mutate: updateUser, isSuccess: updatedUser } = useUpdateUser()

  useEffect(() => {
    setToken()
  }, [isAuthenticated])


  // useEffect(() => {
  //   const getUserMetadata = async () => {
  //     const domain = "dev-9r9paw-9.us.auth0.com";

  //     try {
  //       const accessToken = await getAccessTokenSilently({
  //         audience: `https://${domain}/api/v2/`,
  //         scope: "read:current_user",
  //       });

  //       const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

  //       const metadataResponse = await fetch(userDetailsByIdUrl, {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       });

  //       const { user_metadata } = await metadataResponse.json();

  //       setUserMetadata(user_metadata);
  //     } catch (e) {
  //       console.log(e.message);
  //     }
  //   };

  //   getUserMetadata();
  // }, [getAccessTokenSilently, user?.sub]);

  const setToken = async () => {
    if (isAuthenticated) {
      let token = await getAccessTokenSilently() //access token
      updateUser(
        {
          id: 'auth0|6286076853955b006708ccfd', //user_id
          data: {
            user_metadata: { name: 'Sarah', location: 'Cairo', gender: 'female' },
          }
        }
      )
      useLogin(token, user)
    }
  }

  return (
    <div className="mainLayoutContainer">
      <Sidebar />

      <section>
        <Suspense fallback={<HeaderLoading />}>
          <Header />
        </Suspense>

        <main>
          {children}
        </main>
      </section>
    </div>
  )
}