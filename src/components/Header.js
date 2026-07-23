import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { APP_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { setGptToggling } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {})
            .catch((error) => {
                navigate("/error");
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // console.log("Header user: ", user);
            if (user) {
                // User is signed up or signed in
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    }),
                );
                navigate("/browse");
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });
        // Unsubscribe when component unmounts
        return () => unsubscribe();
    }, []);

     const handleNetflixGPT = () => {
        dispatch(setGptToggling());
    }

    const handleLanguageChange = (e) => {
        console.log(e.target.value);
        dispatch(changeLanguage(e.target.value));
    }

    return (
        <div className="absolute w-screen top-0 left-0 right-0 z-10 flex justify-between items-center px-[40px] py-4 bg-gradient-to-b from-black">
            <img className="m-2 w-40" src={APP_LOGO} alt="logo" />
            <div className="flex items-center">
                {user && ( <>
                    {/* (config.lang!='en') && */}
                    {showGptSearch && (<select className="text-white px-4 rounded-md h-8 bg-gray-700 bg-opacity-30 mx-2" onChange={handleLanguageChange}>
                        {SUPPORTED_LANGUAGES.map((SUPPORTED_LANGUAGE) => <option className=" bg-gray-700 bg-opacity-30" key={SUPPORTED_LANGUAGE.identifier} value={SUPPORTED_LANGUAGE.identifier}>{SUPPORTED_LANGUAGE.value}</option>)}
                    </select>) }
                    <button className="text-white bg-gray-700 bg-opacity-30 cursor-pointer w-18 px-4 rounded-md h-8"
                        onClick={() => handleNetflixGPT()}> 
                        {!showGptSearch ? "Netflix GPT" : "Home"} 
                        {/* Netflix GPT */}
                        </button>
                    <img
                        className="w-16 h-16 p-2"
                        // src="https://occ-0-4857-3662.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABS8sWFjSyj1zyfgcnGamqyJ1E2ZubZGo8dndCM_ipf_5UpmVlkuf8IXzQlmPZQqTMWNjWukESRdLkFGHnf7zbY3MJCO3r4s.png?r=229"
                        src={user.photoURL}
                        alt="userLogo"
                    />
                </>
                )}
                {user && (
                    <button
                        className="text-white bg-red-700 w-18 px-4 rounded-md h-8 cursor-pointer"
                        onClick={() => handleSignOut()}
                    >
                        Sign Out
                    </button>
                )}
            </div>
        </div>
    );
};

export default Header;
