import Link from "next/link";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  PromiseLikeOfReactNode,
  ReactPortal,
} from "react";
import Permition from "./Permition";
import { Icon6 } from "@/components/icon/Icon6";
export default function RightSide(props: {
  link: {
    title:
      | boolean
      | Key
      | ReactElement<any, string | JSXElementConstructor<any>>
      | PromiseLikeOfReactNode
      | Iterable<ReactNode>
      | null
      | undefined;
    id: any;
  }[];
  file: any[];
  link2: any[];
  author: any;
  role: [];
  addrole: string;
  id: string;
}) {
  const length1 = props.link.length;
  const length2 = props.file.length;
  const length3 = props.link2.length;
  const author = props.author;
  const author2 = author && author.author;
  const authorrole = author && author.slack_sd288;
  const role = props.role;
  const addrole = props.addrole;
  const id = props.id;
  return (
    <div className="lg:col-span-3 lg:w- lg:h-full lg:bg-gradient-to-r  lg:via-transparent lg:to-transparent dark:from-slate-800">
      <div className="sticky top-10 left-0 py-8 lg:pl-3">
        {/* <!-- Avatar Media --> */}

        {/* 管理ツール */}
        {(addrole == "backoffice" || addrole == "admin") && (
          <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-gray-700">
            <a className="block flex-shrink-0" href="#"></a>

            <div className="grow">
              <div className="flex justify-end">
                <div
                  className="bg-blue-50 border border-blue-200 rounded-md p-4"
                  role="alert"
                >
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-4 w-4 text-blue-600 mt-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                      </svg>
                    </div>
                    <Permition role={role} id={id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* 管理ツール */}

        {author && (
          <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-gray-700">
            <a className="block flex-shrink-0" href="#">
              <Icon6 width={44} hight={44} />
            </a>

            <a
              className="group grow block"
              href={`https://sd-288.slack.com/team/${authorrole}`}
            >
              <div className="group-hover:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                {author2}
              </div>
              <div className="text-sm text-gray-500">Slack</div>
            </a>

            <div className="grow">
              <div className="flex justify-end">
                <button
                  type="button"
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  記事について
                  <br />
                  連絡する
                </button>
              </div>
            </div>
          </div>
        )}
        {/* <!-- End Avatar Media --> */}

        <div className="space-y-2 mb-10">
          <div className="w-full -mb-10 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold">
            関連記事
          </div>

          <ul className="max-w-xs flex flex-col">
            {length1 !== 0 &&
              props.link.map(
                (
                  link: {
                    title:
                      | boolean
                      | Key
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | PromiseLikeOfReactNode
                      | null
                      | undefined;
                    id: any;
                  },
                  index
                ) => (
                  <li
                    key={index}
                    className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  >
                    <Link href={`/components/ftbManuals/${link.id}`}>
                      {link.title}
                    </Link>
                  </li>
                )
              )}
          </ul>

          <div className="w-full -mb-10 mt-5 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold">
            関連資料
          </div>
          <ul className="max-w-xs flex flex-col">
            {length2 !== 0 &&
              props.file.map(
                (link: {
                  addlinkname: Key | null | undefined;
                  addfile: { url: string | undefined };
                  addfilename:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | PromiseLikeOfReactNode
                    | null
                    | undefined;
                }) => (
                  <li
                    key={link.addlinkname}
                    className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  >
                    <a href={link.addfile.url}>{link.addfilename}</a>
                  </li>
                )
              )}
            {length3 !== 0 &&
              props.link2.map(
                (
                  link: {
                    addlinkname:
                      | boolean
                      | Key
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | PromiseLikeOfReactNode
                      | null
                      | undefined;
                    addlink: string | undefined;
                  },
                  index
                ) => (
                  <li
                    key={index}
                    className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  >
                    <a href={link.addlink}>{link.addlinkname}</a>
                  </li>
                )
              )}
          </ul>
        </div>
      </div>
    </div>
  );
}
