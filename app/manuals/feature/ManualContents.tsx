"use client";

import RightSide from "./RightSide";
import ImageCatalog from "./ImageCatalog";
import { ArticleImageCatalogs } from "@/types/manuals";
import parse, { domToReact } from "html-react-parser";
import { useUserStore } from "@/app/store/store";
import { useEffect, useState } from "react";
import RP from "@/components/feature/RP";
import Formmanager from "@/components/feature/forms/Formatmanager";
import ConvertDate from "@/components/feature/date";

export default function ManualContents({ article }: { article: any }) {
  const { userStatus } = useUserStore();
  const addrole = userStatus.role;

  // a link 文字のスタイルを変更
  const replace = (node: any) => {
    if (node.name === "a") {
      let attribs = { ...node.attribs };

      // もし`style`が文字列として存在するなら、それをオブジェクトに変換
      if (typeof attribs.style === "string") {
        const styleObject = attribs.style
          .split(";")
          .reduce((acc: any, item: any) => {
            const [key, value] = item.split(":");
            if (key && value) {
              acc[key.trim()] = value.trim();
            }
            return acc;
          }, {});
        attribs.style = styleObject;
      }

      return (
        <a {...attribs} className="underline text-blue-700 hover:text-cyan-800">
          {domToReact(node.children)}
        </a>
      );
    }
  };

  const [parmission, setParmission] = useState(false);

  const {
    title,
    body,
    addImages,
    body2,
    addImages2,
    body3,
    addImages3,
    connectionPosts,
    addFiles,
    addlinks,
    publishedAt,
    updatedAt,
    role,
    author,
    spreadsheet,
    id,
    video,
    formmanager,
  } = article;
  const iCD: ArticleImageCatalogs[] = addImages;
  const iCD2: ArticleImageCatalogs[] = addImages2;
  const iCD3: ArticleImageCatalogs[] = addImages3;

  let articlerole = role;

  useEffect(() => {
    if (articlerole.includes(addrole)) {
      setParmission(true);
    }
    if (addrole == "admin") setParmission(true);
  }, [addrole]);

  // if (parmission || addrole === "admin") {
  return (
    <div className="max-w-[85rem] px-3 sm:px-3 lg:px-3 mx-auto py-10">
      <div className="grid lg:grid-cols-12 gap-y-3 lg:gap-y-0 lg:gap-x-3">
        {/* <!-- Content --> */}
        <div className="lg:col-span-9 grow w-full">
          <div className="py-3 lg:pr-4">
            <div className="space-y-5 lg:space-y-5">
              <h2 className="text-2xl font-bold lg:text-3xl dark:text-white">
                {title}
              </h2>

              <div className="flex items-center gap-x-5">
                <div className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                  投稿日：
                  <ConvertDate dateString={publishedAt} />
                </div>
                <div className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                  更新日：
                  <ConvertDate dateString={updatedAt} />
                </div>
              </div>

              <div className="text-lg text-gray-800 dark:text-gray-200 ">
                {parse(body, { replace })}
              </div>

              {video && <RP video={video} />}

              <div
                className="col-12"
                dangerouslySetInnerHTML={{ __html: spreadsheet }}
              ></div>

              <div className="text-center -ml-10">
                {iCD.length !== 0 && <ImageCatalog images={iCD} />}
              </div>

              <div className="text-lg text-gray-800 dark:text-gray-200">
                {body2 && parse(body2)}
              </div>

              {/* {formmanager && <Formmanager id={formmanager} />} */}

              <div className="text-center -ml-10">
                {iCD2.length !== 0 && <ImageCatalog images={iCD2} />}
              </div>

              <div className="text-lg text-gray-800 dark:text-gray-200">
                {body3 && parse(body3)}
              </div>

              <div className="text-center -ml-10">
                {iCD3.length !== 0 && <ImageCatalog images={iCD3} />}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Content --> */}

        {/* <!-- Sidebar --> */}
        <RightSide
          link={connectionPosts}
          file={addFiles}
          link2={addlinks}
          author={author}
          role={role}
          addrole={addrole}
          id={id}
        />
        {/* <!-- End Sidebar --> */}
      </div>
    </div>
  );
}
//   // else {
//   //   return (
//   //     <div className="h-96">
//   //       <div
//   //         className="bg-blue-50 border mt-16 border-blue-200 rounded-md p-4"
//   //         role="alert"
//   //       >
//   //         <div className="flex">
//   //           <div className="flex-shrink-0">
//   //             <svg
//   //               className="h-4 w-4 text-blue-600 mt-1"
//   //               xmlns="http://www.w3.org/2000/svg"
//   //               width="16"
//   //               height="16"
//   //               fill="currentColor"
//   //               viewBox="0 0 16 16"
//   //             >
//   //               <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
//   //             </svg>
//   //           </div>
//   //           <div className="ml-4">
//   //             <h3 className="text-gray-800 font-semibold">
//   //               このコンテンツは表示されません。
//   //             </h3>
//   //             <div className="mt-2 text-sm text-gray-600">
//   //               閲覧権限がないためこのコンテンツの表示はされません。
//   //             </div>
//   //             <div className="mt-4"></div>
//   //           </div>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   );
//   // }
// }
