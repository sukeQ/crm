"use client";

import { useUserStore } from "@/app/store/store";
import { useEffect, useState } from "react";
import { month } from "@/public/data/month";
import { eventNames } from "process";
import { supabase } from "@/utils/supabase/supabase";

const RepeatTool = () => {
  const { userStatus, spUserSt } = useUserStore();

  const [shop, setShop] = useState<any>();
  const [charge, setCharge] = useState<any>();
  const [useMonth, setUseMonth] = useState<any>();

  const [date, setDate] = useState<any>("2000-09-02");
  const [startDate, setStartDate] = useState<any>();
  const [eventnamem, setEventname] = useState<any>();
  const [item1, setItem1] = useState<any>();
  const [item2, setItem2] = useState<any>();
  const [item3, setItem3] = useState<any>();
  const [item4, setItem4] = useState<any>();
  const [over10, setOver10] = useState<any>("以下です");
  const [parmit, setPermit] = useState("申請していない");
  const [memo, setMemo] = useState<any>();
  const [show, setShow] = useState(true);
  const [eventList, setEventList] = useState<any>();

  useEffect(() => {
    if (spUserSt[0]) {
      setShop(spUserSt[0].shop);
      setCharge(spUserSt[0].user_name);
    } else {
      setShop(userStatus.shop);
      setCharge(userStatus.name);
    }
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const { data: list } = await supabase.from("event_list").select();
      setEventList(list);
    };

    fetchData();
  }, []);

  async function submitHandler() {
    const mention = "<@U00000000>";
    let data = {
      name: charge,
      shop: shop,
      useMonth: useMonth,
      date: date,
      eventnamem: eventnamem,
      startDate: startDate,
      item1: item1,
      item2: item2,
      item3: item3,
      item4: item4,
      over10: over10,
      parmit: parmit,
      memo: memo,
    };
    if (shop != "" && charge != "" && date >= "2023-04-01") {
      fetch("/api/forms/marketing/repeattool", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setShow(!show);
      // setErrorFlag(false);
    } else {
      // setErrorFlag(true);
    }
    let messageTest =
      mention +
      "リピート発注" +
      shop +
      "店　" +
      charge +
      "さんが" +
      "リピートツールを発注しました";

    //  slackへ通知
    await fetch("/api/slack/marketing", {
      method: "POST",
      body: messageTest,
      // body: JSON.stringify(payload),
    });
  }

  const mention = "<@U02BZ62D2AW>";
  const payload = [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: "リピートツール発注",
        emoji: true,
      },
    },
    {
      type: "text",
      text: mention,
    },
    {
      type: "rich_text",
      elements: [
        {
          type: "rich_text_section",
          elements: [
            {
              type: "text",
              text: shop + "店\n" + charge + "さんが発注しました",
            },
          ],
        },
      ],
    },
    {
      type: "section",
      block_id: "sectionBlockOnlyPlainText",
      text: {
        type: "plain_text",
        text: "<http:// |発注リスト>",
        emoji: true,
      },
    },
  ];

  const labeltext =
    "py-1 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400";

  if (show) {
    return (
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl lg:max-w-5xl mx-auto">
          <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
            {/* <!-- Card --> */}
            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
              <div className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
                発注フォーマット
              </div>

              <div>
                <div className="grid gap-4">
                  {/* <!-- Grid --> */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="hs-firstname-contacts-1"
                        className="mb-5 border-b-2 py-1 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      >
                        {shop}
                      </label>

                      <label
                        htmlFor="hs-firstname-contacts-1"
                        className={labeltext}
                      >
                        使用月
                      </label>
                      <select
                        onChange={(e) => setUseMonth(e.target.value)}
                        className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      >
                        <option>選択ください</option>
                        {month.map((month, index) => {
                          return (
                            <option
                              value={month.month}
                            >{`${month.month}月`}</option>
                          );
                        })}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="hs-firstname-contacts-1"
                        className="mb-5 border-b-2 py-1 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      >
                        {charge}
                      </label>
                      <label
                        htmlFor="hs-lastname-contacts-1"
                        className={labeltext}
                      >
                        着希望日
                      </label>
                      <input
                        type="date"
                        name="hs-lastname-contacts-1"
                        id="hs-lastname-contacts-1"
                        className="py-3 px-4 border block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        placeholder="着希望日"
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* <!-- End Grid --> */}

                  <div>
                    <label htmlFor="hs-email-contacts-1" className={labeltext}>
                      催事名
                    </label>
                    <select
                      className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      onChange={(e) => setEventname(e.target.value)}
                    >
                      <option>選択してください</option>
                      {eventList &&
                        eventList.map((list: any, index: number) => {
                          return (
                            <option value={list.event_name}>
                              {list.event_name}
                            </option>
                          );
                        })}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="hs-lastname-contacts-1"
                      className={labeltext}
                    >
                      催事開始日
                    </label>
                    <input
                      type="date"
                      name="hs-lastname-contacts-1"
                      id="hs-lastname-contacts-1"
                      className="py-3 px-4 border block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      placeholder="着希望日"
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="hs-phone-number-1" className={labeltext}>
                      祇園きたざと　パウンドケーキ チョコ
                    </label>
                    <input
                      type="number"
                      name="hs-phone-number-1"
                      id="hs-phone-number-1"
                      className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      placeholder="発注数"
                      onChange={(e) => setItem3(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="hs-phone-number-1" className={labeltext}>
                      plune.シール容器5pcセット
                    </label>
                    <input
                      type="number"
                      name="hs-phone-number-1"
                      id="hs-phone-number-1"
                      className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      placeholder="発注数"
                      onChange={(e) => setItem4(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="hs-phone-number-1" className={labeltext}>
                      同じ催事の合計発注数は
                    </label>
                    <div className="flex ml-5">
                      <input
                        type="radio"
                        name="hs-radio-group"
                        className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        id="hs-radio-group-1"
                        value="9点以下です"
                        onChange={(e) => setOver10(e.target.value)}
                      />
                      <label
                        htmlFor="hs-radio-group-1"
                        className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                      >
                        9点以下です
                      </label>
                      <input
                        type="radio"
                        name="hs-radio-group"
                        className="ml-10 shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        id="hs-radio-group-1"
                        value="10点以上です"
                        onChange={(e) => setOver10(e.target.value)}
                      />
                      <label
                        htmlFor="hs-radio-group-1"
                        className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                      >
                        10点以上です
                      </label>
                    </div>
                  </div>

                  {over10 == "10点以上です" && (
                    <div>
                      <label htmlFor="hs-phone-number-1" className={labeltext}>
                        今井部長への発注申請
                      </label>
                      <div className="flex ml-5">
                        <input
                          type="radio"
                          name="hs-radio-group2"
                          className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          id="hs-radio-group-2"
                          value="申請ずみ"
                          onChange={(e) => setPermit(e.target.value)}
                        />
                        <label
                          htmlFor="hs-radio-group-2"
                          className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                        >
                          申請ずみ
                        </label>
                        <input
                          type="radio"
                          name="hs-radio-group2"
                          className="ml-10 shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          id="hs-radio-group-2"
                          value="申請していない"
                          onChange={(e) => setPermit(e.target.value)}
                        />
                        <label
                          htmlFor="hs-radio-group-2"
                          className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                        >
                          申請していない
                        </label>
                      </div>
                    </div>
                  )}

                  <div>
                    <label htmlFor="hs-about-contacts-1" className={labeltext}>
                      連絡事項
                    </label>
                    <textarea
                      id="hs-about-contacts-1"
                      name="hs-about-contacts-1"
                      rows={4}
                      className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      placeholder="連絡事項"
                      onChange={(e) => setMemo(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                {/* <!-- End Grid --> */}

                <div className="mt-4 grid">
                  <button
                    // type=""
                    onClick={() => submitHandler()}
                    className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                  >
                    発注
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- End Card --> */}

            <div className="divide-y divide-gray-200 dark:divide-gray-800">
              {/* <!-- Icon Block --> */}
              <div className="flex gap-x-7 py-6">
                <svg
                  className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                </svg>
                <div>
                  <div className="font-semibold text-gray-800 dark:text-gray-200">
                    発注店舗・発注者について
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    ログインアカウントが反映されます
                  </div>
                </div>
              </div>
              {/* <!-- End Icon Block --> */}

              {/* <!-- Icon Block --> */}
              <div className="flex gap-x-7 py-6">
                <svg
                  className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                <div>
                  <div className="font-semibold text-teal-800 dark:text-gray-200">
                    店長フォロー・来店面談目的で使用したい場合
                  </div>
                  <div className="font-semibold text-teal-800 dark:text-gray-200">
                    今井部長宛にご相談ください{" "}
                  </div>
                </div>
              </div>
              {/* <!-- End Icon Block --> */}

              {/* <!-- Icon Block --> */}
              <div className=" flex gap-x-7 py-6">
                <svg
                  className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                  <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z" />
                </svg>
                <div>
                  <div className="font-semibold text-gray-800 dark:text-gray-200">
                    ー
                  </div>
                </div>
              </div>
              {/* <!-- End Icon Block --> */}

              {/* <!-- Icon Block --> */}
              <div className=" flex gap-x-7 py-6">
                <svg
                  className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
                <div>
                  <div className="font-semibold text-gray-800 dark:text-gray-200">
                    ー
                  </div>
                </div>
              </div>
              {/* <!-- End Icon Block --> */}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className=" bg-blue-50 border border-blue-200 rounded-md p-4 mt-40"
        role="alert"
      >
        <div className="flex">
          <div className="flex-shrink-0"></div>
          <div className="ml-4">
            <div className="text-sm text-red-800 font-semibold">
              送信しました
            </div>
            <div className="mt-2 text-sm text-red-700">
              <ul className="list-disc space-y-1 pl-5">
                <li>{`発注店舗 ${shop}  発注者 ${charge}`}</li>
                <li>発注リストから発注を確認ください</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default RepeatTool;
