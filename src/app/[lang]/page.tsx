import { Locale } from "@/config/i18n.config";
import { getDictionaryServerOnly } from "@/dictionaries/default-dictionary-server-only";

export default function Home({ params }: { params: { lang: Locale } }) {
  const dictionary = getDictionaryServerOnly(params.lang);

  return (
    <>
      <nav>
        <h1>{dictionary.site.name}</h1>
        <p>{dictionary.site.description}</p>
      </nav>
    </>
  );
}
