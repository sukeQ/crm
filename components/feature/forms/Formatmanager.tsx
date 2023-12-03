// Formmanagerのキーを受けて　フォームコンポーネントを返す

import RepeatTool from "./marketing/RepeatTool";
const Formmanager = ({ id }: { id: string }) => {
  switch (id) {
    case "marketing001":
      return <RepeatTool />;
      break;
  }
};

export default Formmanager;
