import Header from "@/components/Navi/Header";
import Navi from "@/components/Nvi";

export default function CrmLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <Navi />
      <div>{children}</div>
    </div>
  );
}
