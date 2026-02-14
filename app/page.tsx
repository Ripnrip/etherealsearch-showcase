import { SearchInterface } from "@/components/SearchInterface";
import { MinimalFooter } from "@/components/MinimalFooter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <SearchInterface />
      <MinimalFooter />
    </main>
  );
}
