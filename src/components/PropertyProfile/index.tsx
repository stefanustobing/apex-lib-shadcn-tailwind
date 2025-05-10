import { FunctionComponent, JSX, CSSProperties } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../@/components/ui/avatar";
import { Badge } from "../../../@/components/ui/badge";
import { Home } from "react-feather";

type PropertyProfileProps = {
  address: string;
  avatarUrl?: string;
  detailInfoUrl?: string;
  infoText?: string;
  badge?: { text: string; color: string }[];
};

const PropertyProfile: FunctionComponent<PropertyProfileProps> = ({
  address,
  avatarUrl,
  detailInfoUrl,
  infoText,
  badge,
}: PropertyProfileProps): JSX.Element => {
  return (
    <div className="flex flex-wrap flex-col items-center md:flex-row">
      <div>
        <Avatar className="w-15 h-15 md:w-18 md:h-18">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback className="bg-teal-800">
            <Home size="35px" color="white" />
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="ml-2 w-[80%] mt-4 md:mt-0">
        <div className="mb-1 flex justify-center md:justify-start">
          <a href={detailInfoUrl ? detailInfoUrl : "#"}>
            <h6 className="text-sm md:text-base text-center text-teal-500 font-poppins md:text-base">
              {address}
            </h6>
          </a>
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <p className="text-xs md:text-sm text-center font-poppins text-gray-500">
            {infoText}
          </p>
        </div>
        {badge ? (
          <div className="flex flex-wrap mt-1 justify-center md:justify-start">
            {badge.map((item) => {
              const colorHash = (color: string) => {
                if (color === "red") return "#FF0000";
                else if (color === "yellow") return "#FFF000";
                else if (color === "green") return "#008000";
                return "#FF5500";
              };
              return (
                <Badge
                  variant="outline"
                  className={`bg-[var(--colorHash)] rounded-full text-white px-[14px] py-[6px] mt-1 mr-1 border-0`}
                  style={
                    {
                      "--colorHash": `${colorHash(item.color)}`,
                    } as CSSProperties
                  }
                >
                  {item.text}
                </Badge>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PropertyProfile;
