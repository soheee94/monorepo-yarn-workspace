export const metadata = {
  title: 'Content Page',
  description: 'Generated by create next app',
};

export default function ContentLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}