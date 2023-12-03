import { useEffect, useState } from "react";
import DetailTableApproach from "../table/DetailTableApproach";
import {
  shopFormalreport_Komono,
  shopFormalreport_Apo,
  shopFormalreport_Kakuyakutento,
  shopFormalreport_Sikkaiticket,
} from "@/hooks/approach";

const FormaltableMirai = ({ shoplist }: any) => {
  const [dataSectionA2, setDataSectionA2] = useState<any>([]);
  const [dataSectionB, setDataSectionB] = useState<any>([]);
  const [dataSectionC, setDataSectionC] = useState<any>([]);
  const [dataSectionD, setDataSectionD] = useState<any>([]);

  useEffect(() => {
    if (shoplist) {
      const fetchData = async () => {
        const promises = shoplist.map((shop: any) =>
          shopFormalreport_Komono(shop.code)
        );
        const promisesTeiji = shoplist.map((shop: any) =>
          shopFormalreport_Apo(shop.code)
        );
        const promisesTeijimuji = shoplist.map((shop: any) =>
          shopFormalreport_Kakuyakutento(shop.code)
        );
        const promisesKituke = shoplist.map((shop: any) =>
          shopFormalreport_Sikkaiticket(shop.code)
        );
        const results = await Promise.all(promises);
        const resultsTeiji = await Promise.all(promisesTeiji);
        const resultsTeijimuji = await Promise.all(promisesTeijimuji);
        const resultsKituke = await Promise.all(promisesKituke);

        setDataSectionA2(results);
        setDataSectionB(resultsTeiji);
        setDataSectionC(resultsTeijimuji);
        setDataSectionD(resultsKituke);
      };
      fetchData();
    }
  }, [shoplist]);

  return (
    <>
      <div>
        <DetailTableApproach data={dataSectionA2} title={"小物名簿"} />
      </div>
      <div>
        <DetailTableApproach data={dataSectionB} title={"アンケート名簿"} />
      </div>
      <div>
        <DetailTableApproach data={dataSectionC} title={"店頭確約"} />
      </div>
      <div>
        <DetailTableApproach data={dataSectionD} title={"悉皆チケット"} />
      </div>
    </>
  );
};

export default FormaltableMirai;
