import React, { ReactNode } from 'react';
import AppWrappers from './AppWrappers';
import { GeistMono,} from "geist/font/mono";
// import '@asseinfo/react-kanban/dist/styles.css';
// import '/public/styles/Plugins.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${GeistMono.variable}`}>
      <body id={'root'}>
        <AppWrappers>{children}</AppWrappers>
      </body>
    </html>
  );
}
