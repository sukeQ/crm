"use client";

import { use, useEffect, useState } from "react";
import DetailTableTento from "../table/DetailTableTento";
import {
  approachDetailShop,
  approachDetailShop2,
  shopFormalreport_Ap,
  shopFormalreport_Apo,
  shopFormalreport_Kakuyaku,
  shopFormalreport_Kakuyakutell,
  shopFormalreport_Kakuyakutento,
  shopFormalreport_Kituke,
  shopFormalreport_KitukeA,
  shopFormalreport_Kitukeheijyo,
  shopFormalreport_Komono,
  shopFormalreport_Meibo,
  shopFormalreport_Pl,
  shopFormalreport_Sikkaiticket,
  shopFormalreport_Sokketu,
  shopFormalreport_Teiji,
  shopFormalreport_Teijmuji,
  shopFormalreport_tell,
  shopFormalreport_tuwa,
} from "@/hooks/approach";
import { findObjectsWithText } from "@/hooks/search";
import { getMonthStartAndEndDates } from "@/hooks/data";
import DetailTableMirai from "../table/DetailTableMirai";
import DetailTableBackyard from "../table/DetailTableBackyard";
import DetailTableMeibo from "../table/DetailTableMeibo";
import { supabase } from "../../../../../../libs/supabase";
import DetailTableApproach from "../table/DetailTableApproach";

//
const FormaltableBackyard = ({ shoplist }: any) => {
  console.log(
    "🚀 ~ file: Formaltable.tsx:34 ~ Formaltable ~ shoplist:",
    shoplist
  );
  const [apdata, setApdata] = useState<any>();
  const [teijidata, setTeijidata] = useState<any>();
  const [teijimujidata, setTeijimujidata] = useState<any>();
  const [kitukedata, setKitukedata] = useState<any>();
  const [kitukeheijyodata, setKitukeheijyodata] = useState<any>();
  const [sokketudata, setSokketudata] = useState<any>();
  const [komonodata, setKomonodata] = useState<any>();
  const [apodata, setApodata] = useState<any>();
  const [kakuyakutentodata, setKakuyakutentodata] = useState<any>();
  const [sikkaiticketdata, setSikkaiticketdata] = useState<any>();
  const [telldata, setTelldata] = useState<any>();
  const [tuwadata, setTuwadata] = useState<any>();
  const [kakuyakutelldata, setKakuyakutelldata] = useState<any>();
  const [pldata, setPldata] = useState<any>();
  const [meibodata, setMeibodata] = useState<any>();
  const [kakuyakudata, setKakuyakudata] = useState<any>();

  const [dataa, setDataa] = useState<any>();

  const [dataSectionA2, setDataSectionA2] = useState<any>([]);
  const [dataSectionB, setDataSectionB] = useState<any>([]);
  const [dataSectionC, setDataSectionC] = useState<any>([]);
  const [dataSectionD, setDataSectionD] = useState<any>([]);

  let maintitle = "店頭：　売り切る仕事";
  let title1 = "アプローチ";
  let title2 = "絹布提示";
  let title3 = "色無地提示";
  let title4 = "着付";
  let title5 = "着付平常日";
  let title6 = "即決";

  let maintitle2 = "未来の仕事";
  let title7 = "小物";
  let title8 = "アンケート";
  let title9 = "店頭確約";
  let title10 = "悉皆チケット";

  let maintaitle3 = "バックヤード";
  let title11 = "ダイヤル";
  let title12 = "通話";
  let title13 = "電話確約";
  let title14 = "ハガキ・封書";

  let title15 = "名簿";
  let subtitle15 = "小物＋アポ";

  let title16 = "確約";
  let subtitle16 = "店頭＋電話";

  let dataSectionA: any = [];

  useEffect(() => {
    if (shoplist) {
      const fetchData = async () => {
        const promises = shoplist.map((shop: any) =>
          shopFormalreport_tell(shop.code)
        );
        const promisesTeiji = shoplist.map((shop: any) =>
          shopFormalreport_tuwa(shop.code)
        );
        const promisesTeijimuji = shoplist.map((shop: any) =>
          shopFormalreport_Kakuyakutell(shop.code)
        );
        const promisesKituke = shoplist.map((shop: any) =>
          shopFormalreport_Pl(shop.code)
        );
        const results = await Promise.all(promises);
        const resultsTeiji = await Promise.all(promisesTeiji);
        const resultsTeijimuji = await Promise.all(promisesTeijimuji);
        const resultsKituke = await Promise.all(promisesKituke);

        setDataSectionA2(results);
        setDataSectionB(resultsTeiji);
        setDataSectionC(resultsTeijimuji);
        setDataSectionD(resultsKituke);

        // setData
      };
      fetchData();
    }
  }, [shoplist]);

  console.log("999", dataSectionA2);

  return (
    <>
      <div>
        <DetailTableApproach data={dataSectionA2} title={"ダイヤル"} />
      </div>
      <div>
        <DetailTableApproach data={dataSectionB} title={"通話"} />
      </div>
      <div>
        <DetailTableApproach data={dataSectionC} title={"電話確約"} />
      </div>
      <div>
        <DetailTableApproach data={dataSectionD} title={"ハガキ・封書"} />
      </div>
    </>
  );
};

export default FormaltableBackyard;
