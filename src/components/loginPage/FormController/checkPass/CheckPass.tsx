const Checkpassword = ({ password }: { password: string }) => {
  function speciChar(str: string) {
    var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    return regex.test(str);
  }
  function uppercas(str: string) {
    var regex = /[A-Z]/;
    return regex.test(str);
  }
  if (password.length > 18) {
    return <p></p>;
  }
  return (
    <div className="text-sm w-full">
      {password.length <= 7 && password.length >= 6 && (
        <p className="text-red-300">passwordworld is week</p>
      )}
      {password.length > 7 && !speciChar(password) && !uppercas(password) && (
        <p className="text-amber-300">passwordworld is fair</p>
      )}
      {password.length > 7 && !speciChar(password) && uppercas(password) && (
        <p className="text-sky-400">passwordworld is good</p>
      )}
      {password.length > 7 && speciChar(password) && !uppercas(password) && (
        <p className="text-sky-400">passwordworld is good</p>
      )}
      {password.length > 7 && speciChar(password) && uppercas(password) && (
        <p className="text-green-400">passwordworld is strong</p>
      )}
    </div>
  );
};

export default Checkpassword;
