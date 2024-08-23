import React from "react";
import { useMap } from "react-leaflet";
import { IconButton, Button } from "@material-tailwind/react";

function CenterButton({ center, zoom, tooglereport, bgColor }) {
  const map = useMap();

  const handleClick = () => {
    map.flyTo(center, zoom);
  };

  return (
    <>
      <div className="absolute top-[53%] gap-y-3 mb-[31px] mr-[31px] right-0 flex items-end flex-col  p-2 z-[2000]">
        <IconButton
          onClick={handleClick}
          className="bg-[#E5E4E4] text-black border border-[#FAF7F7]"
        >
          <i className="fa-regular fa-lg fa-life-ring"></i>
        </IconButton>
        {bgColor ? (
          <Button
            onClick={tooglereport}
            className="bg-[#E5E4E4] text-black border border-[#FAF7F7]"
          >
            Close Report
          </Button>
        ) : (
          <Button
            onClick={tooglereport}
            className="bg-[#E5E4E4] text-black border border-[#FAF7F7]"
          >
            Report Location
          </Button>
        )}
      </div>
    </>
  );
}

export default CenterButton;
