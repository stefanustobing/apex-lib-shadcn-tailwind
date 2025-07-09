import { FunctionComponent, ReactElement } from "react";
import { Calendar, Briefcase, User } from "react-feather";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../@/components/ui/avatar";

interface PropertyInfoProps {
  leaseDate?: string;
  account?: { avatarUrl?: string; accountName: string };
  manager?: { avatarUrl?: string; managerName: string };
  tenant?: { avatarUrl?: string; tenantName: string };
}

const PropertyInfo: FunctionComponent<PropertyInfoProps> = ({
  leaseDate,
  account,
  manager,
  tenant,
}): ReactElement => {
  return (
    <div className="w-full -mx-3">
      <div className="flex mb-2">
        <div className="w-1/4 px-3 flex items-center px-3">
          <div>
            <Calendar width="1rem" height="1rem" color="gray" />
          </div>
          <div className="ml-1 font-poppins font-normal text-xs md:text-sm text-gray-500">
            Lease:
          </div>
        </div>
        <div className="w-3/4 px-3 font-poppins font-normal text-xs md:text-sm text-gray-500">
          {leaseDate}
        </div>
      </div>
      <div className="flex mb-2 items-center">
        <div className="w-1/4 px-3 flex items-center">
          <div>
            <Briefcase width="1rem" height="1rem" color="gray" />
          </div>
          <div className="ml-1 font-poppins font-normal text-xs md:text-sm text-gray-500">
            Account:
          </div>
        </div>
        <div className="w-3/4 px-3 mr-4 flex items-center font-poppins font-normal text-xs md:text-sm text-gray-500">
          <Avatar className="w-5 h-5 mr-1">
            <AvatarImage src={account?.avatarUrl} />
            <AvatarFallback className="bg-teal-800">
              <User size="10px" color="white" />
            </AvatarFallback>
          </Avatar>
          {account?.accountName}
        </div>
      </div>
      <div className="flex mb-2">
        <div className="w-1/4 px-3 flex items-center">
          <div>
            <User width="1rem" height="1rem" color="gray" />
          </div>
          <div className="ml-1 font-poppins font-normal text-xs md:text-sm text-gray-500">
            Manager:
          </div>
        </div>
        <div className="w-3/4 px-3 mr-4 flex items-center font-poppins font-normal text-xs md:text-sm text-gray-500">
          <Avatar className="w-5 h-5 mr-1">
            <AvatarImage src={manager?.avatarUrl} />
            <AvatarFallback className="bg-teal-800">
              <User size="10px" color="white" />
            </AvatarFallback>
          </Avatar>
          {manager?.managerName}
        </div>
      </div>
      <div className="flex mb-2">
        <div className="w-1/4 px-3 flex">
          <div>
            <User width="1rem" widths="1rem" color="gray" />
          </div>
          <div className="ml-1 font-poppins font-normal text-xs md:text-sm text-gray-500">
            Tenant:
          </div>
        </div>
        <div className="w-3/4 px-3 mr-4 flex items-center font-poppins font-normal text-xs md:text-sm text-gray-500">
          <Avatar className="w-5 h-5 mr-1">
            <AvatarImage src={tenant?.avatarUrl} />
            <AvatarFallback className="bg-teal-800">
              <User size="10px" color="white" />
            </AvatarFallback>
          </Avatar>
          {tenant?.tenantName}
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;
