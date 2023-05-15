import Mail from "../../../../assets/Mail.svg";
import Facebook from "../../../../assets/Facebook.svg";
import Twitter from "../../../../assets/Twitter.svg";
import Git from "../../../../assets/Git.svg";

const FooterForm = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-2 w-full">
        <p className="inline-block border flex-1 border-slate-200 h-0"></p>
        <p className="pb-1 flex-none">or</p>
        <p className="inline-block border flex-1 border-slate-200 h-0"></p>
      </div>
      <div className="flex justify-center gap-4">
        <a href="">
          <img src={Mail} className="w-10 h-10" alt="React logo" />
        </a>
        <a href="">
          <img src={Facebook} className="w-10 h-10" alt="React logo" />
        </a>
        <a href="">
          <img src={Twitter} className="w-10 h-10" alt="React logo" />
        </a>
        <a href="">
          <img src={Git} className="w-10 h-10" alt="React logo" />
        </a>
      </div>
    </>
  );
};

export default FooterForm;
