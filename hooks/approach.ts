import { supabase, supabaseCRM } from "@/utils/supabase/supabase";
import { getMonthStartAndEndDates } from "./data";

export const daily = async (date: any, searchid: any) => {
  const { data: ap, error } = await supabase.rpc("approach_daily20", {
    enddate: date.endDate,
    searchid: searchid,
    startdate: date.startDate,
  });
  return ap;
};

export const daily_from_shop = async (date: any, searchid: any) => {
  const { data: ap, error } = await supabaseCRM.rpc(
    "approach_daily_from_shop30",
    {
      searchid: searchid,
      startdate: date.stertDate,
      enddate: date.endDate,
    }
  );
  return [ap, error];
};

export const term = async (date: any, searchid: any) => {
  const { data: apTerm, error: errorTerm } = await supabase.rpc(
    "get_approach_term_shop10",
    {
      searchword: searchid,
      startdate: date.startDate,
      enddate: date.endDate,
    }
  );
  return [apTerm, errorTerm];
};

export const termMember = async (date: any, searchid: any) => {
  const { data: apTerm, error: errorTerm } = await supabase.rpc(
    "get_approach_term_member",
    {
      searchword: searchid,
      startdate: date.startDate,
      enddate: date.endDate,
    }
  );
  return [apTerm, errorTerm];
};
export const termShop = async (date: any, searchid: any) => {
  const { data: apTerm, error: errorTerm } = await supabase.rpc(
    "get_ap_check_term",
    {
      searchid: searchid,
      startdate: date.startDate,
      enddate: date.endDate,
    }
  );
  return [apTerm, errorTerm];
};

export const termApfromShop = async (date: any, searchid: any) => {
  const { data: apTerm, error: errorTerm } = await supabase.rpc(
    "get_ap_check_term_from_shop",
    {
      searchid: searchid,
      startdate: date.startDate,
      enddate: date.endDate,
    }
  );
  return [apTerm, errorTerm];
};

export const approachDetailShop = async (item: string) => {
  switch (item) {
    case "ap":
      const { data: apDetail, error: errorDetail } = await supabase.rpc(
        "approach_detail_year_from_shop_ap104"
      );
      return [apDetail, errorDetail];
      break;
    case "teiji":
      const { data: teijiDetail, error: teijiErrorDetail } = await supabase.rpc(
        "approach_detail_year_from_shop_teiji"
      );
      return [teijiDetail, teijiErrorDetail];
      break;
    case "teijimuji":
      const { data: teijimujiDetail, error: teijimujiErrorDetail } =
        await supabase.rpc("approach_detail_year_from_shop_teijimuji");
      return [teijimujiDetail, teijimujiErrorDetail];
      break;
    case "kakuyakuTento":
      const { data: kakuyakutentoDetail, error: kakuyakutentoErrorDetail } =
        await supabase.rpc("approach_detail_year_from_shop_kakuyakutento");
      return [kakuyakutentoDetail, kakuyakutentoErrorDetail];
      break;
    case "kakuyakuTell":
      const { data: kakuyakutelliDetail, error: kakuyakutellErrorDetail } =
        await supabase.rpc("approach_detail_year_from_shop_kakuyakutento");
      return [kakuyakutelliDetail, kakuyakutellErrorDetail];
      break;
    case "DM":
      const { data: dm, error: dmErrorDetail } = await supabase.rpc(
        "approach_detail_year_from_shop_dm"
      );
      return [dm, dmErrorDetail];
      break;
    case "sokketu":
      const { data: sokketu, error: sokketuDetail } = await supabase.rpc(
        "approach_detail_year_from_shop_sokketu"
      );
      return [sokketu, sokketuDetail];
      break;
    case "komono":
      const { data: komono, error: komonoDetail } = await supabase.rpc(
        "approach_detail_year_from_shop_komono"
      );
      return [komono, komonoDetail];
      break;
    case "apo":
      const { data: apo, error: apoDetail } = await supabase.rpc(
        "approach_detail_year_from_shop_apo"
      );
      return [apo, apoDetail];
      break;

    case "sikkaiTicket":
      const { data: sikkaiTicket, error: sikkaiTicketDetail } =
        await supabase.rpc("approach_detail_year_from_shop_sikkaiticket");
      return [sikkaiTicket, sikkaiTicketDetail];
      break;

    case "Tell":
      const { data: tell, error: tellDetail } = await supabase.rpc(
        "approach_detail_year_from_shop_tell"
      );
      return [tell, tellDetail];
      break;
    case "tuwa":
      const { data: tuwa, error: tuwaDetail } = await supabase.rpc(
        "approach_detail_year_from_shop_tuwa"
      );
      return [tuwa, tuwaDetail];
      break;
    case "kitukeSaiji":
      const { data: kitukeSaiji, error: kitukeSaijiDetail } =
        await supabase.rpc("approach_detail_year_from_shop_kitukesaiji");
      return [kitukeSaiji, kitukeSaijiDetail];
      break;
    case "kitukeHeijyo":
      const { data: kitukeHeijyo, error: kitukeHeijyoDetail } =
        await supabase.rpc("approach_detail_year_from_shop_kitukeheijyo");
      return [kitukeHeijyo, kitukeHeijyoDetail];
      break;
  }
};
export const approachDetailShop2 = async () => {
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_shop104",
    { item: "teiji" }
  );
  return [apDetail, errorDetail];
};

// 公式AP表の作成フォーム　引数に日付を渡すように変更をする予定
export const shopFormalreport_Ap = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    // "approach_detail_year_from_shop_formal_ap004",
    // { searchword: searchword }
    "approach_detail_year_from_shop_formal_ap010",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,

      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};
export const shopFormalreport_Teiji = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_shop_formal_teiji",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,

      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const shopFormalreport_Teijmuji = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_shop_formal_teijimuji",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,

      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const shopFormalreport_Kituke = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_shop_formal_kituke",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,

      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const shopFormalreport_Kitukeheijyo = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_shop_formal_kitukeheijyo",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,

      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const shopFormalreport_Sokketu = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_shop_formal_sokketu",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,

      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const shopFormalreport_Komono = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_shop_formal_komono",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const shopFormalreport_Apo = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_shop_formal_apo",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};
export const shopFormalreport_Kakuyakutento = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_shop_formal_kakuyakutento",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const shopFormalreport_Sikkaiticket = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_shop_formal_sikkaiticket",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const shopFormalreport_tell = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_shop_formal_tell",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const shopFormalreport_tuwa = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_shop_formal_tuwa",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const shopFormalreport_Kakuyakutell = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_shop_formal_kakuyakutell",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const shopFormalreport_Pl = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_shop_formal_pl",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const shopFormalreport_KitukeA = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_shop_formal_kituke110",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const shopFormalreport_Meibo = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_shop_formal_meibo",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};
export const shopFormalreport_Kakuyaku = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_shop_formal_kakuyakua",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

// ここから個人よう
export const Formalreport_Kakuyaku = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_formal_kakuyaku100",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const Formalreport_Meibo = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_formal_meibo100",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const Formalreport_Ap = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_formal_ap100",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};
export const Formalreport_Teiji = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_formal_teiji100",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const Formalreport_Teijimuji = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_formal_teijimuji100",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const Formalreport_Kituke = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_formal_kituke100",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const Formalreport_Kitukeheijyo = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_formal_kitukeheijyo100",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const Formalreport_Sokketu = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_formal_sokketu100",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const Formalreport_Komono = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_formal_komono100",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};
export const Formalreport_Apo = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_formal_apo100",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const Formalreport_Kakuyakutenoto = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_formal_kakuyakutento100",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const Formalreport_Sikkaiticket = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_formal_sikkaiticket100",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};
export const Formalreport_Tell = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_formal_tell100",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const Formalreport_Tuwa = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_formal_tuwa100",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const Formalreport_Kakuyakutell = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_formal_kakuyakutell100",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const Formalreport_Pl = async (searchword: string) => {
  let dates = getMonthStartAndEndDates();
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_formal_pl100",
    {
      searchword: searchword,
      last4start: dates[0].firstDay,
      last4end: dates[0].lastDay,
      last5start: dates[1].firstDay,
      last5end: dates[1].lastDay,
      last6start: dates[2].firstDay,
      last6end: dates[2].lastDay,
      last7start: dates[3].firstDay,
      last7end: dates[3].lastDay,
      last8start: dates[4].firstDay,
      last8end: dates[4].lastDay,
      last9start: dates[5].firstDay,
      last9end: dates[5].lastDay,
      last10start: dates[6].firstDay,
      last10end: dates[6].lastDay,
      last11start: dates[7].firstDay,
      last11end: dates[7].lastDay,
      last12start: dates[8].firstDay,
      last12end: dates[8].lastDay,
      last1start: dates[9].firstDay,
      last1end: dates[9].lastDay,
      last2start: dates[10].firstDay,
      last2end: dates[10].lastDay,
      last3start: dates[11].firstDay,
      last3end: dates[11].lastDay,
      current4start: dates[12].firstDay,
      current4end: dates[12].lastDay,
      current5start: dates[13].firstDay,
      current5end: dates[13].lastDay,
      current6start: dates[14].firstDay,
      current6end: dates[14].lastDay,
      current7start: dates[15].firstDay,
      current7end: dates[15].lastDay,
      current8start: dates[16].firstDay,
      current8end: dates[16].lastDay,
      current9start: dates[17].firstDay,
      current9end: dates[17].lastDay,
      current10start: dates[18].firstDay,
      current10end: dates[18].lastDay,
      current11start: dates[19].firstDay,
      current11end: dates[19].lastDay,
      current12start: dates[20].firstDay,
      current12end: dates[20].lastDay,
      current1start: dates[21].firstDay,
      current1end: dates[21].lastDay,
      current2start: dates[22].firstDay,
      current2end: dates[22].lastDay,
      current3start: dates[23].firstDay,
      current3end: dates[23].lastDay,
    }
  );
  return [apDetail, errorDetail];
};

export const ap_for_org_and_block = async () => {
  const { data: ap_for_org, error: errorAp_for_org } = await supabase.rpc(
    "get_approach_for_org030",
    {
      currentyearstart: "2023-04-01",
      currentyearend: "2024-03-31",
      lastyeaerstart: "2022-04-01",
      lastyearend: "2023-03-31",
    }
  );

  return [ap_for_org, errorAp_for_org];
};

export const ap_for_org_and_block_orign = async (id: any) => {
  const { data: ap_for_org, error: errorAp_for_org } = await supabase.rpc(
    "get_approach_for_org050",
    {
      currentyearstart: "2023-04-01",
      currentyearend: "2024-03-31",
      lastyeaerstart: "2022-04-01",
      lastyearend: "2023-03-31",
      futabayaid: id,
    }
  );

  return [ap_for_org, errorAp_for_org];
};

// テスト用関数
export const approachDetailShop22 = async () => {
  const { data: apDetail, error: errorDetail } = await supabase.rpc(
    "approach_detail_year_from_shop03"
  );
  return [apDetail, errorDetail];
};

export const ap_assist_data_monthly = async (
  date: any,
  startDate: any,
  endDate: any
) => {
  const { data: assistMonthly, error: errorAssistMonthly } = await supabase.rpc(
    "ap_assist_data_monthly",
    {
      date: date,
      startdate: startDate,
      enddate: endDate,
    }
  );
  return [assistMonthly, errorAssistMonthly];
};

export const ap_assist_data_monthly100 = async (
  date: any,
  startDate: any,
  endDate: any
) => {
  const { data: assistMonthly, error: errorAssistMonthly } = await supabase.rpc(
    "ap_assist_data_monthly100",
    {
      date: date,
      startdate: startDate,
      enddate: endDate,
    }
  );
  return [assistMonthly, errorAssistMonthly];
};

export const ap_assist_kojin_monthly = async (
  searchid: any,
  startDate: any,
  endDate: any
) => {
  const { data: assistMonthly, error: errorAssistMonthly } = await supabase.rpc(
    "get_tancho_ap_monthly_tally003",
    {
      searchid: searchid,
      startdate: startDate,
      enddate: endDate,
    }
  );
  return [assistMonthly, errorAssistMonthly];
};
