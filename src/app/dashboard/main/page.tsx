import { WidgetsGrip } from "@/components";


export const metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
};
export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="nt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Informacion general</span>
      <WidgetsGrip />
    </div>
  );
}