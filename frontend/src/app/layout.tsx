import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="KiboJobs - Simplifiez votre recherche d'emploi" />
        <meta name="description" content="KiboJobs est une application web qui centralise les offres d'emploi, facilite la gestion des candidatures et optimise votre recherche grâce à un tableau de bord intuitif." />
        <meta name="keywords" content="emploi, stage, alternance, recherche d'emploi, candidatures, tableau de bord, KiboJobs" />
        <meta name="author" content="LeoBrd" />
        <meta name="robots" content="index, follow" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
