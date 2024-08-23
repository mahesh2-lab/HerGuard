import { useAuthContext } from "../context/authContext";
import { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const Signup = async ({firstName, lastName, email, password, confirmPassword, gender}) => {

    const success = handleInputsErros({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;
  
    
    setLoading(true);
    
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
    
      localStorage.setItem("Secret", JSON.stringify(data));

      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, Signup };
};

export default useSignup;

function handleInputsErros({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  gender,
}) {
  if (!firstName || !lastName || !email || !password || !confirmPassword || !gender) {
    toast.error("Please fill all the fileds");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Password and Confirm Password should be same");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password should be atleast 6 characters long");
    return false;
  }
  return true;
}
