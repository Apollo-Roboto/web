import { ColorMode } from '@chakra-ui/system';
import ClientProviders from 'components/Providers';
import { NtDapperFont } from 'fonts';

// @todo add correct metadata here
export const metadata = {
  title: 'React Flow Pro',
  description: 'Generated by Next.js',
};

const defaultColorMode: ColorMode = 'light';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      data-theme={defaultColorMode}
      style={{ colorScheme: defaultColorMode }}
      lang="en"
      className={NtDapperFont.className}
    >
      <head>
        {/* @todo replace with nextjs metadata api: https://nextjs.org/docs/app/api-reference/file-conventions/metadata */}
        <title>React Flow Pro</title>
        <meta name="title" content="React Flow Pro" />
        <meta
          name="description"
          content="Subscribe to React Flow Pro to get access to exclusive features of React Flow, a highly customizable library for building node-based editors, interactive graphs and flow charts"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@reactflowdev" />
        <meta name="twitter:title" content="React Flow Pro" />
        <meta
          name="twitter:description"
          content="Subscribe to React Flow Pro to get access to exclusive features of React Flow, a highly customizable library for building node-based editors, interactive graphs and flow charts"
        />
        <meta name="twitter:image" content="https://reactflow.dev/img/social/social.jpeg" />
        <meta property="og:title" content="React Flow Pro" />
        <meta property="og:url" content="https://pro.reactflow.dev" />
        <meta property="og:image" content="https://reactflow.dev/img/social/social.jpeg" />
      </head>
      <body className={`chakra-ui-${defaultColorMode}`}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
