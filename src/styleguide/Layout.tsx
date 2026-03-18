import { useState } from "react"
import { Sidebar } from "./Sidebar"
import { Colors } from "./pages/Colors"
import { Typography } from "./pages/Typography"
import { ButtonPage } from "./pages/ButtonPage"
import { BadgePage } from "./pages/BadgePage"
import { SpinnerPage } from "./pages/SpinnerPage"
import { ShadcnComponents } from "./pages/ShadcnComponents"
import { AvatarPage } from "./pages/AvatarPage"

type Page = "colors" | "typography" | "button" | "badge" | "spinner" | "avatar" | "shadcn-components"

const pageTitles: Record<Page, string> = {
  "colors":             "Colors",
  "typography":         "Typography",
  "button":             "Button",
  "badge":              "Badge",
  "spinner":            "Spinner",
  "avatar":             "Avatar",
  "shadcn-components":  "Shadcn Components",
}

export function StyleguideLayout() {
  const [activePage, setActivePage] = useState<Page>("colors")

  return (
    <div className="flex min-h-screen font-sans bg-white">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col">
        <header className="h-12 border-b border-border-default flex items-center px-8 bg-white shrink-0">
          <span className="text-sm font-semibold text-text-heading">{pageTitles[activePage]}</span>
        </header>
        <main className="flex-1 p-8 bg-bg-neutral-primary-soft overflow-auto">
          {activePage === "colors"            && <Colors />}
          {activePage === "typography"        && <Typography />}
          {activePage === "button"            && <ButtonPage />}
          {activePage === "badge"             && <BadgePage />}
          {activePage === "spinner"           && <SpinnerPage />}
          {activePage === "avatar"            && <AvatarPage />}
          {activePage === "shadcn-components" && <ShadcnComponents />}
        </main>
      </div>
    </div>
  )
}
