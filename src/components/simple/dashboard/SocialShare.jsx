import { InstagramIcon } from "lucide-react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterIcon,
  InstapaperShareButton,
  PinterestIcon,
  LinkedinIcon,
  FacebookIcon,
} from "react-share";
const SocialShare = ({ currentUrl }) => {
  return (
    <div
      className={`bg-white rounded-md py-4 px-6 absolute bottom-5 right-[5%] grid grid-cols-3 gap-2`}
    >
      <WhatsappShareButton url={currentUrl}>
        <WhatsappIcon size={25} />
      </WhatsappShareButton>
      <TwitterShareButton url={currentUrl}>
        <TwitterIcon size={25} />
      </TwitterShareButton>
      <InstapaperShareButton url={currentUrl}>
        <InstagramIcon size={25} />
      </InstapaperShareButton>
      <PinterestShareButton url={currentUrl}>
        <PinterestIcon size={25} />
      </PinterestShareButton>
      <LinkedinShareButton url={currentUrl}>
        <LinkedinIcon size={25} />
      </LinkedinShareButton>
      <FacebookShareButton url={currentUrl}>
        <FacebookIcon size={25} />
      </FacebookShareButton>
    </div>
  );
};

export default SocialShare;
