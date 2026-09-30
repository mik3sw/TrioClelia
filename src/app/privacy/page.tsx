import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL, url } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy e cookie",
  description:
    "Informativa sul trattamento dei dati personali e sui cookie del sito del Trio Clelia.",
  alternates: { canonical: url("/privacy/") },
};

const TITOLARE = "Federico Matteo Marcucci";
const AGGIORNAMENTO = "30 settembre 2026";

function Sezione({
  titolo,
  children,
}: {
  titolo: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-ivory/10 pt-10">
      <h2 className="mb-6 font-display text-2xl font-light text-ivory md:text-3xl">
        {titolo}
      </h2>
      <div className="space-y-4 text-base leading-relaxed text-pearl/80 [&_a]:text-gold-soft [&_a]:underline [&_a]:underline-offset-4 [&_li]:ml-5 [&_li]:list-disc [&_strong]:font-normal [&_strong]:text-ivory">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      {/* Intestazione leggera */}
      <header className="fixed inset-x-0 top-0 z-50 bg-ebony/70 py-5 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
          <Link
            href="/"
            className="font-display text-xl tracking-wide text-ivory transition-colors hover:text-gold-soft"
          >
            Trio&nbsp;Clelia
          </Link>
          <Link
            href="/"
            className="link-fine text-[0.7rem] uppercase tracking-[0.24em] text-mist transition-colors hover:text-ivory"
          >
            ← Torna al sito
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-3xl px-6 pb-24 pt-40 md:px-10 md:pt-48">
        <p className="overline mb-8">Informativa</p>
        <h1 className="font-display text-[clamp(2.6rem,6vw,4.5rem)] font-light leading-[1.05] text-ivory text-balance">
          Privacy e cookie
        </h1>
        <p className="mt-8 text-base leading-relaxed text-mist md:text-lg">
          Questa informativa spiega quali dati personali vengono raccolti
          attraverso questo sito e come vengono trattati, ai sensi
          dell&apos;art. 13 del Regolamento (UE) 2016/679 (GDPR).
        </p>
        <p className="mt-4 text-sm text-mist/70">
          Ultimo aggiornamento: {AGGIORNAMENTO}
        </p>

        <div className="mt-16 space-y-14">
          <Sezione titolo="Titolare del trattamento">
            <p>
              <strong>{TITOLARE}</strong>, per conto del Trio Clelia.
              <br />
              Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </Sezione>

          <Sezione titolo="Quali dati trattiamo">
            <p>
              <strong>Dati che ci inviate voi.</strong> Quando ci scrivete
              (tramite il modulo di contatto, via email o per telefono) trattiamo
              i dati che scegliete di comunicarci: nome e cognome, indirizzo
              email, numero di telefono, data e luogo dell&apos;evento e le
              informazioni contenute nel messaggio.
            </p>
            <p>
              Il modulo di contatto non salva nulla sul sito: si limita ad
              aprire il vostro programma di posta con il messaggio già
              compilato, che poi siete voi a inviare al nostro indirizzo email.
            </p>
            <p>
              <strong>Dati di navigazione.</strong> Come qualsiasi sito web, il
              servizio di hosting registra automaticamente alcuni dati tecnici
              delle visite (indirizzo IP, data e ora, pagina richiesta, tipo di
              browser) per garantire il funzionamento e la sicurezza del sito.
              Non usiamo questi dati per identificarvi né per profilarvi.
            </p>
          </Sezione>

          <Sezione titolo="Perché li trattiamo e su quale base">
            <ul className="space-y-3">
              <li>
                Rispondere alle vostre richieste e preparare una proposta per
                il vostro evento: misure precontrattuali richieste da voi (art.
                6.1.b GDPR).
              </li>
              <li>
                Organizzare ed eseguire la prestazione concordata: esecuzione
                del contratto (art. 6.1.b GDPR).
              </li>
              <li>
                Adempiere agli obblighi di legge, ad esempio fiscali: obbligo
                legale (art. 6.1.c GDPR).
              </li>
              <li>
                Garantire il funzionamento e la sicurezza del sito: legittimo
                interesse (art. 6.1.f GDPR).
              </li>
            </ul>
            <p>
              Comunicarci i vostri dati è facoltativo, ma senza di essi non
              possiamo rispondervi. Non usiamo i vostri dati per newsletter o
              invii promozionali e non li vendiamo a nessuno.
            </p>
          </Sezione>

          <Sezione titolo="Chi può vedere i dati">
            <ul className="space-y-3">
              <li>
                Gli altri componenti del Trio, solo per organizzare il vostro
                evento.
              </li>
              <li>
                <strong>GitHub, Inc.</strong> (GitHub Pages), che ospita il
                sito e ne gestisce i dati di navigazione.
              </li>
              <li>
                <strong>Google</strong>, che fornisce il servizio di posta
                (Gmail) su cui riceviamo i vostri messaggi e che gestisce
                YouTube, da cui vengono caricati i video (vedi la sezione
                sui cookie).
              </li>
            </ul>
            <p>
              GitHub e Google possono trattare dati anche negli Stati Uniti.
              Entrambe le società aderiscono all&apos;EU-U.S. Data Privacy
              Framework, riconosciuto adeguato dalla Commissione europea.
            </p>
          </Sezione>

          <Sezione titolo="Per quanto tempo li conserviamo">
            <ul className="space-y-3">
              <li>
                Richieste a cui non segue un incarico: il tempo necessario a
                rispondere e comunque non oltre 12 mesi.
              </li>
              <li>
                Dati legati a una prestazione concordata: per la durata del
                rapporto e, in seguito, per il tempo previsto dalla normativa
                fiscale (di norma 10 anni).
              </li>
            </ul>
          </Sezione>

          <Sezione titolo="Cookie">
            <p>
              Questo sito <strong>non usa cookie propri</strong>, né strumenti
              di statistica, di profilazione o di pubblicità. Per questo non vi
              mostriamo alcun banner.
            </p>
            <p>
              <strong>Video YouTube.</strong> I video sono incorporati in
              modalità &laquo;privacy avanzata&raquo; (youtube-nocookie.com) e
              il lettore viene caricato solo quando premete play. Da quel
              momento YouTube (Google Ireland Limited) può salvare cookie o
              dati simili sul vostro dispositivo e raccogliere dati sulla
              visione, secondo la propria{" "}
              <a
                href="https://policies.google.com/privacy?hl=it"
                target="_blank"
                rel="noopener noreferrer"
              >
                informativa privacy
              </a>
              . Se preferite evitarlo, basta non avviare i video: le immagini di
              anteprima sono ospitate su questo sito e non contattano YouTube.
            </p>
            <p>
              Potete sempre cancellare o bloccare i cookie dalle impostazioni
              del vostro browser.
            </p>
          </Sezione>

          <Sezione titolo="I vostri diritti">
            <p>
              In qualsiasi momento potete chiederci di accedere ai vostri dati,
              correggerli, cancellarli, limitarne il trattamento, riceverli in
              un formato portabile o opporvi al trattamento (artt. 15–22 GDPR).
              Basta scrivere a{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
            <p>
              Se ritenete che il trattamento violi la normativa, potete
              presentare reclamo al{" "}
              <a
                href="https://www.garanteprivacy.it"
                target="_blank"
                rel="noopener noreferrer"
              >
                Garante per la protezione dei dati personali
              </a>
              .
            </p>
            <p>
              Non prendiamo decisioni basate unicamente su trattamenti
              automatizzati.
            </p>
          </Sezione>
        </div>
      </main>

      <Footer />
    </>
  );
}
