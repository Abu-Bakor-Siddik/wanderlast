import { Button } from "@heroui/react";
import { Span } from "next/dist/trace";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";

const DestinationCard = ({ destination }) => {
  const {_id, imageUrl, price, destinationName, duration, country } = destination;
  return (
    <div className="border p-5">
      <div>
        <Image
          src={imageUrl}
          alt={destinationName}
          height={400}
          width={400}></Image>
      </div>
      <div>
        <div className="flex justify-between">

            <div>
            <div className="flex items-center gap-1">
                <LuMapPin></LuMapPin>
                <span>{country}</span>
            </div>
            <div>
                <h2 className="text-xl font-bold">{destinationName}</h2>
            </div>
            <div className="flex gap-1 items-center">
                <FaRegCalendar></FaRegCalendar> {duration}
            </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold">$ {price}</h3>
            </div>
        </div>
        <Link href={`/destinations/${_id}`}><Button variant="ghost" className={'mt-1 text-cyan-500'}><FiExternalLink></FiExternalLink> Book Now</Button></Link>
      </div>
    </div>
  );
};

export default DestinationCard;
