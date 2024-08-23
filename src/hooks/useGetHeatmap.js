import React, { useEffect, useState } from "react";

const useGetHeatmap = () => {
  const [loading, setLoading] = useState(false);
  const [heatdata, setHeatData] = useState({});

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/reportloc/getheatmap");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setHeatData(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return { loading, heatdata };
};

export default useGetHeatmap;

