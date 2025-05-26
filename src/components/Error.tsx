import type { ReactNode } from "react";

export default function Error({children}: {children:ReactNode}) {
  return (
    <p className="text-red-700 border border-red-700 font-semibold p-1 text-center rounded-lg mt-2">{children}</p>
  )
}
