import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Input,
  Textarea,
  Select,
  Option
} from "@material-tailwind/react";
import { useAuthContext } from "../context/authContext";



const ReportLocationForm = ({ open, onClose, onSubmit, position }) => {
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [intensity, setIntensity] = useState("");
    const {authUser} = useAuthContext();

    const name = authUser ? authUser.firstName +' ' + authUser.lastName : "";


    const handleSubmit = () => {
      if (description && name && type && intensity) {
        onSubmit({
          lat: position.lat,
          lng: position.lng,
          description,
          name,
          type,
          intensity: parseFloat(intensity),
        });
        onClose();
      }
    };
  
    return (
      <Dialog open={open} className="w-16 mb-5" handler={onClose}>
        <Card className=" ">
          <CardBody className="flex flex-col gap-3">
            <Input
              label="Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="Enter location type"
            />
            <Select
              label="Intensity"
              value={intensity}
              onChange={(e) => setIntensity(e)}
            >
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
            </Select>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
            />
          </CardBody>
          <CardFooter className="pt-0 ">
            <Button color="green" className="mr-2"  onClick={handleSubmit}>
              Submit
            </Button>
            <Button color="red" onClick={onClose}>
              Cancel
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    );
  };
  
export default ReportLocationForm;
