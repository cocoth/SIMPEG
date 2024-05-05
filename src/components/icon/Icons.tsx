import { IoIosPeople } from "react-icons/io";
import { AiFillDashboard } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegMoneyBillAlt } from "react-icons/fa";

interface IconProps {
  name: string;
  className?: string;
}

const Icons: React.FC<IconProps> = ({ name, className }) => {
  switch (name) {
    case "Logo":
      return <IoIosPeople className={className} />;
    case "Dashboard":
      return <AiFillDashboard className={className} />;
    case "Groups":
      return <MdGroups className={className} />;
    case "Checkout":
      return <IoMdCheckmarkCircleOutline className={className} />;
    case "Money":
      return <FaRegMoneyBillAlt className={className} />;
    default:
      return null;
  }
};

export default Icons;
