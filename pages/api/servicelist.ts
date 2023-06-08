import type { NextApiRequest, NextApiResponse } from 'next';
import { ServiceType } from '../../customTypes/dataTypes';


export default function handler(req: NextApiRequest, res: NextApiResponse<ServiceType[]>) {
  res.status(200).send(
    [
      {
        theTag: "UI/UX Design",
        theDesc: "For Static Websites",
        theFromC: "from-[#0081C9]",
        theToC: "to-[#FFC93C]"
      },
      {
        theTag: "Website Design with Blog",
        theDesc: "For Basic E-Comm Purposes",
        theFromC: "from-[#1C315E]",
        theToC: "to-[#E6E2C3]"
      },
      {
        theTag: "E-Commerce Website",
        theDesc: "For Static Websites",
        theFromC: "from-[#056676]",
        theToC: "to-[#142850]"
      },
      {
        theTag: "Custom Theme",
        theDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        theFromC: "from-[#406882]",
        theToC: "to-[#7DE5ED]"
      },
      {
        theTag: "LOGO Design",
        theDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        theFromC: "from-[#0081C9]",
        theToC: "to-[#B1D0E0]"
      },
      {
        theTag: "Website Maintenance",
        theDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        theFromC: "from-[#444941]",
        theToC: "to-[#D5EEBB]"
      },
      {
        theTag: "Website Design with Backend",
        theDesc: "For Basic Operational Backends",
        theFromC: "from-[#16C79A]",
        theToC: "to-[#1D2D50]"
      },
    ]
  );
}
