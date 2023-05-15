import { useState } from "react";

import TokenService from "../../token-service/token";
import { useLogOutAccount } from "../../Api/authAPI";

import { Button, Avatar, Box } from "@mui/material";
import image from "../../../assets/Image.svg";
import power from "../../../assets/power.svg";

const Navbar = ({ onCheckLogin }: { onCheckLogin: VoidFunction }) => {
  const [hidden, setHidden] = useState(false);
  const { displayName } = TokenService.getUser();

  const { mutateAsync } = useLogOutAccount();
  const handleLogOut = () => {
    mutateAsync(null)
      .then(() => TokenService.removeUser())
      .then(() => onCheckLogin());
  };

  return (
    <div className="flex justify-end p-2 h-16  text-slate-400">
      <div className="block mr-24">
        <span className="text-bold text-xl text-slate-700">{displayName}</span>
        <p className="text-sm">avalible</p>
      </div>
      <div className="w-12 h-12 mx-8 absolute ">
        <Avatar src={image} onClick={() => setHidden(!hidden)}></Avatar>
        <p className="block border-2 rounded-full w-3 h-3 bg-green-500 relative bottom-4 left-9 m-0"></p>
        {hidden && (
          <div className="relative bottom-2 -left-24 h-10 w-36 drop-shadow-md hover:bg-slate-100">
            <Button
              sx={{
                backgroundColor: "white",
                color: "rgb(148 163 184)",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  background: "rgb(231 229 228)",
                },
              }}
              onClick={handleLogOut}
            >
              <p className="inline-block px-6">logout</p>
              <img
                src={power}
                className="w-4 h-4 inline-block"
                alt="React logo"
              />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
