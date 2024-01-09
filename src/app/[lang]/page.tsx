import { Nav } from "@/components/Nav";
import { Locale } from "@/config/i18n.config";
import { getDictionaryServerOnly } from "@/dictionaries/default-dictionary-server-only";

export default function Home({ params }: { params: { lang: Locale } }) {
  const { dictionary, interpolation } = getDictionaryServerOnly(params.lang);

  return (
    <div className="flex flex-col">
      <div className="flex items-start">
        <Nav />
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <h2>
          {interpolation(dictionary["Welcome {{name}}"], { name: "Bárbara" })}
        </h2>
        <div className="flex flex-col items-center gap-2">
          <h3>
            {interpolation(dictionary["Birth: {{nascimento}}"], {
              nascimento: "05/01/1994",
            })}
          </h3>
          <h3>
            {interpolation(dictionary["Age: {{idade}}"], {
              idade: 29,
            })}
          </h3>
        </div>
      </div>
    </div>
  );
}
