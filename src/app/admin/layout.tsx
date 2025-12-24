import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Admin | ZYXEN',
  description: 'Content Management System',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script id="cms-manual-init-flag" strategy="beforeInteractive">
        {`window.CMS_MANUAL_INIT = true;`}
      </Script>
      <Script
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        strategy="beforeInteractive"
      />
      <div className="admin-wrapper">
        {children}
      </div>
    </>
  );
}
