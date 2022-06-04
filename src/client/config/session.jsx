import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { webAuth } from '@/client/context';
import { useLogin } from "@/client/api";
import { Toast } from '@/client/components';

export const Session = () => {
  const location = useLocation()
  const navigate = useNavigate();

  useEffect(() => {
    webAuth.parseHash({ hash: location.hash }, function (error, response) {
      if (error) {
        <Toast success={false} message={error.error_description} />
        return
      }
      webAuth.client.userInfo(response.accessToken, function (err, user) {
        useLogin(response.accessToken, user)
        navigate("../dashboard", { replace: true });
      });
    })
  })

  return <div>AUTHHHHH</div>
}