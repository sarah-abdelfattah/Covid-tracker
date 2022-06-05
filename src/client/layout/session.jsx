import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { webAuth } from '@/context';
import { useLogin } from "@/api";
import { Toast } from '@/components';
import { Loading } from "@/layout";

export const Session = () => {
  const location = useLocation()
  const navigate = useNavigate();

  useEffect(() => {
    webAuth.parseHash({ hash: location.hash }, function (error, response) {
      if (error) {
        <Toast status={'failed'} message={error.error_description} />
        return
      }
      webAuth.client.userInfo(response?.accessToken, function (err, user) {
        if (err) {
          <Toast status={'failed'} message={error.error_description} />
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