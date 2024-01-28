import { KEY } from "../config";

const naverAuthorize = (ref) => {
  ref.current.children[0].click();

  localStorage.setItem("accessFrom", "naver");
};

const naverButtonInit = () => {
  const naverLogin = new window.naver.LoginWithNaverId({
    clientId: KEY.NAVER_ID,
    callbackUrl: URL.AUTH_REDIRECT_URL,
    isPopup: false,
    loginButton: { color: "green", type: 3, height: 58 },
    callbackHandle: true,
  });

  naverLogin.init();
};

const auth = {
  naverButtonInit,
  naverAuthorize,
};

export default auth;