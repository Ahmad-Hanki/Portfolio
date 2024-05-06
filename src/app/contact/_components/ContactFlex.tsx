import MotionDiv from "@/components/ui/MotionDiv";
import Image from "next/image";
import Me from '@/assets/Me3.jpeg'
import ContactForm from "./ContactForm";
const ContactFlex = () => {
    return (
        <div className="space-y-7">
          <div className="flex flex-col gap-5 lg:flex-row h-full">
            <ContactForm />
    
            <MotionDiv
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 min-w-[400px] min-h-[70vh] px-3 relative overflow-hidden aspect-[0.9/1] "
            >
              <Image
                src={Me}
                alt="formIamge"
                fill
                className="object-contain object-center"
                priority
              />
            </MotionDiv>
          </div>
        </div>
      );
}

export default ContactFlex