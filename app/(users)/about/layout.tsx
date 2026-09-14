export default function AboutLayout({ children }: LayoutProps<"/about">) {
  return (
    <div>
      {" "}
      <h1 className="text-8xl">hello about layout</h1>
      {children}
    </div>
  );
}
