export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Template</h1>
      <div>{children}</div>
    </div>
  );
}
