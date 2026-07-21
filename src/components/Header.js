import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen top-0 left-0 right-0 z-10 flex justify-between items-center px-[148px] py-4 bg-gradient-to-b from-black">
      <img
        className="p-4 m-2 w-40 bg-gradient-to-b from-black"
        src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAUkLCBtHBbguPPqzaFOzEv4Pw_eS79j0y7ADR4hkB30-HkahpsUb5yvfzgKsfU2oNda-7hpkfYLnXhjc23JVT07PHsGgfsaHAB7qOhy2_5gn-nuKOVSUSBzn-i-O3ea2QQaXx3PYkHes.svg"
        alt="logo"
      />
      <div className="flex items-center">
        { user && <img
          className="w-16 h-16 p-2"
          // src="https://occ-0-4857-3662.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABS8sWFjSyj1zyfgcnGamqyJ1E2ZubZGo8dndCM_ipf_5UpmVlkuf8IXzQlmPZQqTMWNjWukESRdLkFGHnf7zbY3MJCO3r4s.png?r=229"
          src={user.photoURL}
          alt="userLogo"
        /> }
        <button
          className="text-white bg-red-700 w-16 rounded-md h-8"
          onClick={() => handleSignOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
