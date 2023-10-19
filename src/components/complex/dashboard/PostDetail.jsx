import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState, useLayoutEffect } from "react";
import { posts } from "../../../utils/constants";
import {
  GripHorizontal,
  Share2,
  PenLine,
  Trash2,
  Heart,
  MessageCircle,
} from "lucide-react";
import SocialShare from "../../simple/dashboard/SocialShare";
import Comments from "../../simple/dashboard/Comments";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const PostDetail = () => {
  gsap.registerPlugin(ScrollToPlugin);
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const comments = queryParams.get("comments");
  const [isOptionsClicked, setIsOptionsClicked] = useState(false);
  const [isShareCliked, setIsShareClicked] = useState(false);
  const [fill, setFill] = useState("none");
  const [textAreaFocus, setTextAreaFocus] = useState(false);
  const currentUrl = window.location.origin + window.location.pathname;

  const handleOptionsClicked = () => {
    setIsOptionsClicked((prev) => !prev);
  };
  const handleShare = () => {
    setIsShareClicked((prev) => !prev);
  };
  const focusOnTextArea = () => {
    setTextAreaFocus(true);
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (comments == "true")
        gsap.to(window, {
          scrollTo: "#comments",
          duration: 0.8,
          ease: "power1.out",
        });
      gsap.to(window, {
        scrollTo: "#post-detail-top",
        duration: 0.1,
        ease: "power1.out",
      });
    }, window);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (comments == "true") focusOnTextArea();
  }, []);

  const post = posts.filter((post) => post.id == id);

  return (
    <div id="post-detail-top">
      <div
        key={post[0].id}
        className="w-full lg:w-[70%]  border-[1px] rounded-md border-lemon bg-lightGreen shadow-md py-6 px-4 lg:px-8 relative"
      >
        {/* social share tab */}
        {isShareCliked && <SocialShare currentUrl={currentUrl} />}

        {/* options tab */}
        <div
          className={`bg-white rounded-md py-4 px-6 absolute top-[7%] sm:top-[10%] right-[5%] ${
            isOptionsClicked ? "block" : "hidden"
          }`}
        >
          <button className="flex gap-4 cursor-pointer hover:text-lemon">
            <PenLine />
            <p>Edit Post</p>
          </button>
          <button className="flex gap-4 mt-4 cursor-pointer hover:text-lemon">
            <Trash2 />
            <p>Delete Post</p>
          </button>
        </div>

        <div className="flex justify-between">
          <h2 className="font-bold text-lg lg:text-xl">{post[0].title}</h2>
          <button
            aria-label="view-options"
            role="button"
            onClick={handleOptionsClicked}
            className={`hover:bg-lemon hover:rounded-full w-[40px] h-[40px] flex justify-center items-center p-1 lg:p-2 ${
              isOptionsClicked ? "bg-lemon rounded-full" : ""
            }`}
          >
            <GripHorizontal />
          </button>
        </div>

        <div className="mt-8 flex gap-4">
          <img
            src={post[0].profilePic}
            alt="profile pic"
            className="w-[40px]  h-[40px] rounded-full border-[1px] border-lemon"
          />
          <div>
            <p className="text-green font-bold">{post[0].author}</p>
            <p>published {post[0].date}</p>
          </div>
        </div>

        <div className="mt-4 w-[95%]">
          <p>{post[0].content}</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            voluptates dolorum blanditiis dolores assumenda quisquam
            perspiciatis nisi voluptas maiores at magni perferendis, aliquid
            dolorem impedit aut saepe officiis adipisci nostrum suscipit ipsa
            molestiae itaque. Autem, corporis beatae eos fugiat tempore nostrum
            ullam accusantium nulla? Perferendis quae nobis labore error fuga
            optio delectus hic explicabo soluta tempora consectetur minus nam
            ipsa totam itaque assumenda, aliquid odio cupiditate illum at ex
            dolore quasi iure. Voluptates explicabo praesentium exercitationem
            ipsa beatae nemo voluptatum!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            aliquid culpa quae eius facere velit quod a delectus? Modi
            architecto repellat accusantium ex cum laborum nemo vero ut,
            perferendis fugiat libero facilis vitae? Possimus quo quaerat qui
            quisquam repellat provident quos adipisci dolor reiciendis nobis hic
            numquam iure porro expedita, deleniti esse distinctio culpa facere
            facilis! Laboriosam exercitationem praesentium ad!
          </p>
          <p className="hidden xl:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            ratione, ullam alias delectus pariatur, necessitatibus laudantium
            dolorem saepe facilis consectetur inventore, sapiente corporis?
            Itaque, molestiae quam illo distinctio qui nisi eveniet atque
            doloribus porro voluptatum voluptatibus suscipit numquam. Dolorem
            blanditiis quisquam adipisci totam voluptatem iste quia, commodi
            atque eos tenetur rerum ipsum facilis eveniet magnam mollitia
            molestiae quos id asperiores vel omnis sit repellendus quas
            voluptates optio! Est nesciunt voluptatum sunt consectetur quibusdam
            possimus facilis a at atque dicta fugiat tempore officia eum sit
            perspiciatis cumque iure corporis eos necessitatibus, ipsa sapiente.
            Eum ex recusandae consequuntur inventore cum hic minus
            exercitationem nulla illo architecto praesentium laboriosam maxime,
            dolores unde iusto mollitia numquam aut. Ducimus harum sint neque
            distinctio incidunt ratione at amet voluptates nihil praesentium
            officiis minus molestias velit nesciunt placeat exercitationem
            laborum tempore porro dicta, corrupti facere sapiente numquam odio
            quod. Deserunt aliquam molestiae dicta animi accusantium. Pariatur
            dolorum illum sapiente quidem quae libero nesciunt? Accusantium illo
            blanditiis cumque. Praesentium impedit sint necessitatibus, aliquam
            fuga eum voluptatum iure ipsum explicabo recusandae delectus labore?
            Suscipit delectus molestias quo soluta iusto odit veritatis incidunt
            odio ad sapiente similique doloribus, magni aliquid eum facere
            assumenda harum nostrum nam ea repudiandae nisi debitis enim
            distinctio dicta? Voluptatibus, velit unde! Sequi sint corrupti
            dolorum ipsam, consequuntur accusantium vitae. Similique expedita
            aliquid rem maiores commodi, ut molestias vitae doloribus quo nobis
            dolorum aliquam dignissimos consequatur possimus reiciendis minima
            illo? Fugiat itaque ratione odit facilis totam veritatis maxime
            repellendus reprehenderit quasi magnam reiciendis dolor, iure,
            tenetur nihil ipsam ipsum voluptatem rem mollitia delectus
            perspiciatis? Esse, et consectetur accusantium dolorem modi placeat
            perferendis temporibus. Laborum, iure? Iusto error esse autem,
            facilis quod impedit quam dolores fugiat obcaecati non! Cumque,
            sapiente! Rerum harum, doloribus, nesciunt veritatis soluta corporis
            nihil veniam, deserunt repudiandae itaque facere quia quae inventore
            minus!
          </p>
        </div>

        <div className="mt-4 flex gap-4 text-green">
          <button
            onClick={focusOnTextArea}
            aria-label="make a comment"
            role="button"
          >
            <MessageCircle />
          </button>
          <button
            aria-label="like"
            role="button"
            onClick={() => {
              fill == "none" ? setFill("green") : setFill("none");
            }}
          >
            <Heart fill={fill} />
          </button>
          <button aria-label="Share" role="button" onClick={handleShare}>
            <Share2 />
          </button>
        </div>
      </div>

      <div id="comments">
        <Comments textAreaFocus={textAreaFocus} />
      </div>
    </div>
  );
};

export default PostDetail;
