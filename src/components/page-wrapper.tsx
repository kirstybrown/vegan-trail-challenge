import { ReactNode } from "react";

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col pt-2  space-y-2 bg-blue-100 flex-grow pb-4">
      {children}
    </div>
  );
}
