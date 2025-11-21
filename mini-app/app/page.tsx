import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";
import Article from "@/components/article";

export { generateMetadata };

export default function Home() {
  // NEVER write anything here, only use this page to import components
  return (
    <main className="flex flex-col gap-3 place-items-center place-content-center px-4 grow">
      <span className="text-2xl">{title}</span>
      <span className="text-muted-foreground">{description}</span>
      <Article
        title="Sample Article"
        content="This is a sample article content. It demonstrates tokenization."
        writerAddress="0x1234567890abcdef1234567890abcdef12345678"
      />
    </main>
  );
}
