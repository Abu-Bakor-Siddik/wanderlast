"use client";
import { authClient } from "@/lib/auth-client";
import { Button, DateField, Label } from "@heroui/react";
import { Card } from "@heroui/react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const BookingCard = ({ destination }) => {
    
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);
  const [departureDate, setDepartureDate] = useState(null);
  const { _id,price, country , destinationName,imageUrl } = destination;
  
  const handleBooking = async() =>{
      const bookingData = {
          userId: user?.id,
          userImage: user?.image,
          userName: user?.name,
          destinationId: _id,
          destinationName,
          price,
          imageUrl,
          country,
          departureDate: new Date(departureDate)
        }
        const res = await fetch (`http://localhost:5001/booking`,{
            method: "POST",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(bookingData)
        })

        const data = await res.json();
        
        toast.success("Your Booked successfull ")
    }
    
  return (
    <Card className="rounded-none border mt-5">
      <p className="text-sm text-muted">Satrting from</p>
      <h2 className="text-3xl text-cyan-500 font-bold">${price}</h2>
      <p className="text-sm text-muted">Per person</p>

      <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
        <Label>Departure Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      <Button onClick={handleBooking} className={"w-full rounded-none bg-cyan-500"}>Book Now</Button>
    </Card>
  );
};

export default BookingCard;
