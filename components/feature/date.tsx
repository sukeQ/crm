import dayjs from "dayjs";

interface ConvertDateProps {
  dateString: string;
}

export default function ConvertDate({ dateString }: ConvertDateProps) {
  const publishedAt = dayjs(dateString).format("YYYY年MM月DD日");
  return <time dateTime={dateString}>{publishedAt}</time>;
}
