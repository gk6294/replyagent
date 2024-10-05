import Image from "next/image";
import TryItFreeButton from "./TryItFreeButton";
export default function Hero() {
  return (
    <>
      <div className="grid grid-cols-4 w-full align-middle h-full overflow-hidden space-x-[2rem]">
        <div className="left_column | col-span-2 flex flex-col gap-8 align-middle justify-self-center p-[6rem]">
          <p className="text-[4rem] font-bold tracking-tight leading-none text-center ">
            The Chatbot, Automation and CRM platform built for Agencies
          </p>
          <p className="text-[1.125rem]">
            If you&apos;re a professional offering Chatbots, Automation, and CRM
            services, ReplyAgent is the ultimate platform you&apos;ve been
            searching for. Elevate your business with the dream toolkit designed
            to streamline and supercharge your client solutions.
          </p>
          <div className="relative flex justify-between space-x-12 w-[100%] h-[150px] max-h-[48px] px-2">
            {[
              "/images/icons/whatsapp.svg",
              "/images/icons/ig.svg",
              "/images/icons/messenger.svg",
              "/images/icons/telegram.svg",
              "/images/icons/call.svg",
              "/images/icons/sms.svg",
            ].map((path, index) => (
              <div key={index} className="relative w-[100%] h-[100%] ">
                <Image src={path} alt={`Icon ${index + 1}`} fill />
              </div>
            ))}
          </div>
          <TryItFreeButton />
        </div>
        <div className="right_column_col_1 | col-span-1">
          {[
            "/images/message/telegram yoga message.svg",
            "/images/message/whatsapp birthday messages.svg",
            "/images/message/messenger delivery tracking.svg",
            "/images/message/telegram bike shop.svg",
            "/images/message/instagram chat agent.svg",
            "/images/message/messenger chat agent.svg",
          ].map((path, index) => (
            <div
              key={index}
              className=" wrapper | relative inline-bloc my-6 h-[50%] max-h-[70%] min-w-0 bottom-[30%]"
            >
              <Image
                src={path}
                alt={`Image ${index + 1}`}
                className="inset-0"
                fill
                style={{
                  objectFit: "fill",
                  inset: "0",
                  position: "absolute",
                }}
              />
            </div>
          ))}
        </div>
        <div className="right_column_col_2 | col-span-1 flex-col inline-block">
          {[
            "/images/message/dbf_converter.svg",
            "/images/message/telegram bike shop.svg",
            "/images/message/instagram chat agent.svg",
            "/images/message/whatsapp reich message.svg",
            "/images/message/telegram pizza message.svg",
            "/images/message/instagram chat agent.svg",
          ].map((path, index) => (
            <div
              key={index}
              className=" wrapper | relative inline-bloc my-6 h-[50%] max-h-[70%] min-w-0"
            >
              <Image
                src={path}
                alt={`Image ${index + 1}`}
                className="inset-0"
                fill
                style={{
                  objectFit: "fill",
                  position: "absolute",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}