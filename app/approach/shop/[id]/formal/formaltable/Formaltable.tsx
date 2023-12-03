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

//
const Formaltable = ({ id }: any) => {
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

  useEffect(() => {
    const dataFatch = async () => {
      const data = await shopFormalreport_Ap(id);
      setApdata(data);
      const teijidata = await shopFormalreport_Teiji(id);
      setTeijidata(teijidata);
      const teijimujidata = await shopFormalreport_Teijmuji(id);
      setTeijimujidata(teijimujidata);
      const kitukedata = await shopFormalreport_KitukeA(id);
      setKitukedata(kitukedata);
      const kitukeheijyodata = await shopFormalreport_Kitukeheijyo(id);
      setKitukeheijyodata(kitukeheijyodata);
      const sokketudata = await shopFormalreport_Sokketu(id);
      setSokketudata(sokketudata);
      const komonodata = await shopFormalreport_Komono(id);
      setKomonodata(komonodata);
      const apodata = await shopFormalreport_Apo(id);
      setApodata(apodata);
      const kakuyakutentodata = await shopFormalreport_Kakuyakutento(id);
      setKakuyakutentodata(kakuyakutentodata);
      const sikkaiticketdata = await shopFormalreport_Sikkaiticket(id);
      setSikkaiticketdata(sikkaiticketdata);
      const telldata = await shopFormalreport_tell(id);
      setTelldata(telldata);
      const tuwadata = await shopFormalreport_tuwa(id);
      setTuwadata(tuwadata);
      const kakuyakutelldata = await shopFormalreport_Kakuyakutell(id);
      setKakuyakutelldata(kakuyakutelldata);
      const pldata = await shopFormalreport_Pl(id);
      setPldata(pldata);
      const meibodata = await shopFormalreport_Meibo(id);
      setMeibodata(meibodata);
      const kakuyakudata = await shopFormalreport_Kakuyaku(id);
      setKakuyakudata(kakuyakudata);
    };
    dataFatch();
  }, []);

  return (
    <>
      <div>
        <DetailTableTento
          apdata={apdata}
          maintitle={maintitle}
          title1={title1}
          teijidata={teijidata}
          title2={title2}
          teijimujidata={teijimujidata}
          title3={title3}
          kitukedata={kitukedata}
          title4={title4}
          kitukeheijyodata={kitukeheijyodata}
          title5={title5}
          sokketudata={sokketudata}
          title6={title6}
        />
      </div>
      <div>
        <DetailTableMirai
          maintitle2={maintitle2}
          komonodata={komonodata}
          title7={title7}
          apodata={apodata}
          title8={title8}
          kakuyakutentodata={kakuyakutentodata}
          title9={title9}
          sikkaiticketdata={sikkaiticketdata}
          title10={title10}
        />
      </div>
      <div>
        <DetailTableBackyard
          maintaitle3={maintaitle3}
          telldata={telldata}
          title11={title11}
          tuwadata={tuwadata}
          title12={title12}
          kakuyakutelldata={kakuyakutelldata}
          title13={title13}
          pldata={pldata}
          title14={title14}
        />
      </div>
      <div>
        <DetailTableMeibo
          meibodata={meibodata}
          title15={title15}
          subtitle15={subtitle15}
          kakuyakudata={kakuyakudata}
          title16={title16}
          subtitle16={subtitle16}
        />
      </div>
    </>
  );
};

export default Formaltable;
