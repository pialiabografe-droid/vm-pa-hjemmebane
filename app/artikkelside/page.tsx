import Link from "next/link";
import Reveal from "../../components/Reveal";

const VIF = {
  blue: "#044EA2",
} as const;

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-[#F3F7FF] text-[#1A2238]">
      <main className="mx-auto max-w-4xl px-6 py-24">
        <Reveal>
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#044EA2]">
              Nyhet
            </p>

            <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
              Champions League-finalen LIVE i Jordal Amfi
            </h1>

            <p className="mt-6 text-xl text-black/70">
              Over 3 000 har allerede sikret seg billett.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <article className="mx-auto mt-16 max-w-3xl space-y-8 text-lg leading-relaxed text-black/80">
            <p>
              I dag skjer det. PSG mot Arsenal. Champions League-finalen vises
              LIVE i Jordal Amfi, og over 3 000 har allerede sikret seg billett.
            </p>

            <p>
              Nå er det bare å gjøre seg klar for en dag ingen av oss kommer til
              å glemme.
            </p>

            <h2 className="text-3xl font-semibold text-[#1A2238]">
              Kom tidlig – dørene åpner kl. 14:30
            </h2>

            <p>
              Finn deg til rette i hallen og nyt stemningen fra første stund.
              Alle kiosker og barer åpner samtidig med dørene, så det er
              ingenting i veien for en kald drikke før det hele sparker i gang.
            </p>

            <div className="rounded-2xl bg-white p-6">
              <h3 className="mb-3 text-xl font-semibold">Innganger</h3>

              <ul className="space-y-2">
                <li>• Bordområdet og nedre tribune → Inngang 2A</li>
                <li>• Øvre tribune → Inngang 4A</li>
              </ul>
            </div>

            <h2 className="text-3xl font-semibold text-[#1A2238]">
              Bordgjester og armbånd
            </h2>

            <p>
              Kommer ikke hele bordet samlet? Ingen stress. Den første som
              ankommer med billetten får utdelt 8 armbånd ved inngangen, som
              selv fordeler til resten av bordet.
            </p>

            <p>
              Sørg for at én i gruppen tar ansvar for dette.
            </p>

            <h2 className="text-3xl font-semibold text-[#1A2238]">
              Mat og drikke
            </h2>

            <p>
              Det er godt med alternativer uansett hvor du sitter:
            </p>

            <ul className="space-y-2">
              <li>• Kiosker med pølser, snacks og drikke</li>
              <li>• Uteområde ved inngang 2A med burger og pizza</li>
              <li>• To egne barer for bordgjester</li>
              <li>• Egen Pepsi-stand med Pepsi-drinker</li>
            </ul>

            <h2 className="text-3xl font-semibold text-[#1A2238]">
              Norge mot Sveits på storskjerm
            </h2>

            <p>
              Som oppvarming til Champions League-finalen sender vi direkte fra
              Sveits når Norge møter Sveits i semifinalen i ishockey-VM.
            </p>

            <p>
              I pausene i hockeykampen har vi eget studio med Thomas Aune og
              Kasper Wikestad som analyserer både PSG og Arsenal, og presenterer
              lagoppstillingene så snart de er klare.
            </p>

            <h2 className="text-3xl font-semibold text-[#1A2238]">
              Oppladning til finalen
            </h2>

            <p>
              Fra kl. 17:50 setter vi direkte over til Budapest.
            </p>

            <p className="text-2xl font-semibold text-[#1A2238]">
              To av verdens beste klubber. Én tittel.
            </p>

            <p>
              Vi setter over til finalen i god tid før avspark slik at du får
              med deg hele opplevelsen – fra innmarsj og seremoniene til
              pokalen løftes.
            </p>

            <h2 className="text-3xl font-semibold text-[#1A2238]">
              Vi sees på Jordal!
            </h2>

            <p>
              Vi gleder oss enormt til å se dere alle på Jordal i dag. Dette
              blir en dag for historiebøkene.
            </p>

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <h3 className="text-2xl font-semibold">
                Klar for kamp?
              </h3>

              <p className="mt-3 text-black/70">
                Se programmet eller kjøp billetter til kommende arrangementer.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/program"
                  className="rounded-2xl bg-[#044EA2] px-7 py-3 font-semibold text-white transition hover:opacity-90"
                >
                  Se program
                </Link>

                <Link
                  href="/program"
                  className="rounded-2xl border border-[#044EA2] px-7 py-3 font-semibold text-[#044EA2] transition hover:bg-[#044EA2]/5"
                >
                  Kjøp billetter
                </Link>
              </div>
            </div>
          </article>
        </Reveal>
      </main>
    </div>
  );
}