import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { webAuth } from '@/client/context';
import { useLogin } from "@/client/api";
import { Toast } from '@/client/components';
import { Loading } from "@/client/layout";

export const Session = () => {
  const location = useLocation()
  const navigate = useNavigate();

  useEffect(() => {
    webAuth.parseHash({ hash: location.hash }, function (error, response) {
      if (error) {
        <Toast success={false} message={error.error_description} />
        return
      }
      webAuth.client.userInfo(response?.accessToken, function (err, user) {
        if (err) {
          <Toast success={false} message={error.error_description} />
          return
        }
        useLogin(response.accessToken, user)
        setTimeout(() => {
          navigate("/", { replace: true });

          window.location.reload(false);
        }, 2500);
      });
    })
  }, [])

  return <Loading />
}