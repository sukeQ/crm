export const today = () => {
  let today = new Date();
  let yyyy = today.getFullYear();
  let mm = String(today.getMonth() + 1).padStart(2, "0"); // 月は0から始まるので、1を足します。
  let dd = String(today.getDate()).padStart(2, "0");
  let formattedDate = `${yyyy}-${mm}-${dd}`;
  return formattedDate;
};

export const tomorrow = () => {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  let yyyy = tomorrow.getFullYear();
  let mm = String(tomorrow.getMonth() + 1).padStart(2, "0"); // 月は0から始まるので、1を足します。
  let dd = String(tomorrow.getDate()).padStart(2, "0");

  let formattedDate = `${yyyy}-${mm}-${dd}`;
  return formattedDate;
};

export const yesterday = () => {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() - 1);

  let yyyy = tomorrow.getFullYear();
  let mm = String(tomorrow.getMonth() + 1).padStart(2, "0"); // 月は0から始まるので、1を足します。
  let dd = String(tomorrow.getDate()).padStart(2, "0");

  let formattedDate = `${yyyy}-${mm}-${dd}`;
  return formattedDate;
};

export const theDayBeforeYesterday = () => {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() - 2);

  let yyyy = tomorrow.getFullYear();
  let mm = String(tomorrow.getMonth() + 1).padStart(2, "0"); // 月は0から始まるので、1を足します。
  let dd = String(tomorrow.getDate()).padStart(2, "0");

  let formattedDate = `${yyyy}-${mm}-${dd}`;
  return formattedDate;
};

export const twoWeeksAgo = () => {
  let today = new Date();
  today.setDate(today.getDate() - 14); // 2週間前の日付を取得

  let yyyy = today.getFullYear();
  let mm = String(today.getMonth() + 1).padStart(2, "0"); // 月は0から始まるので、1を足します。
  let dd = String(today.getDate()).padStart(2, "0");
  let formattedDate = `${yyyy}-${mm}-${dd}`;

  return formattedDate;
};

// 年度の中で月初日と月末を計算する
export const getFiscalMonthBounds = (month: number) => {
  const now = new Date();
  let year = now.getFullYear();

  // 年度の開始年を計算（4月から始まるので、1-3月の場合は前の年を使用）
  if (month < 4) {
    year--;
  }

  // 月の初日を設定
  const firstDay = new Date(year, month - 1, 1);
  // 月の最終日を取得するため、次の月の0日を取得（つまり、指定した月の最後の日）
  const lastDay = new Date(year, month, 0);

  // YYYY-MM-DD 形式にフォーマットする関数
  function formatDate(date: any) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0"); // getMonth()は0から始まるので1を加算
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }

  // 配列で初日と最終日を返す
  return [formatDate(firstDay), formatDate(lastDay)];
};

// 去年度から本年度　の月初月末の日付を取得する関数
export function getMonthStartAndEndDates() {
  let startYear = new Date().getFullYear() - 1;
  let endYear = new Date().getFullYear() + 1;
  let startMonth = 4;
  let endMonth = 3;

  let dates = [];
  let currentDate = new Date(startYear, startMonth - 1, 1); // JavaScriptの月は0から始まるので、1を引きます

  while (
    currentDate.getFullYear() < endYear ||
    (currentDate.getFullYear() === endYear &&
      currentDate.getMonth() + 1 <= endMonth)
  ) {
    // 月初日をYYYY-MM-DD形式で取得
    let firstDay = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-01`;

    // 月末日を取得
    let lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );
    let lastDay = `${lastDayOfMonth.getFullYear()}-${String(
      lastDayOfMonth.getMonth() + 1
    ).padStart(2, "0")}-${String(lastDayOfMonth.getDate()).padStart(2, "0")}`;

    // 日付を追加
    dates.push({ firstDay, lastDay });

    // 次の月に移動
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  return dates;
}
