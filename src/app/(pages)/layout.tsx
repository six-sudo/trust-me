interface PagesLayoutProps {
  children: React.ReactNode;
}

export default function PagesLayout({
  children
}: PagesLayoutProps) {
  return (
    <div className="pages-layout">
      {children}
    </div>
  );
}
