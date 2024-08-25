import { useState } from "react";
import toast from "react-hot-toast";

const usereport = () => {
  const [load, setLoad] = useState(false);

  const SendReport = async (report) => {
    setLoad(true);

    try {
      const res = await fetch("/api/reportloc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(report),
      });

      const data = res.json();

      if (data.error) {
        throw new Error(data.error);
      } else {
        toast.success("Report Sent Successfully");
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoad(false);
    }
  };
  return { load, SendReport };
};
export default usereport;
