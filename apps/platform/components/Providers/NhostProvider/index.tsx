'use client';

import { NhostClient, NhostProvider } from '@nhost/nextjs';
import { NhostApolloProvider } from '@nhost/react-apollo';

export const nhost = new NhostClient({
  subdomain: 'local',
  region: process.env.NEXT_PUBLIC_NHOST_REGION,
});

type Props = {
  children: React.ReactNode;
};

function NhostClientProvider({ children }: Props) {
  return (
    <NhostProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost}>{children}</NhostApolloProvider>
    </NhostProvider>
  );
}

export default NhostClientProvider;
