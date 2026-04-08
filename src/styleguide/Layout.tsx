import { useState } from "react"
import { Sidebar } from "./Sidebar"
import { Colors } from "./pages/Colors"
import { Typography } from "./pages/Typography"
import { ButtonPage } from "./pages/ButtonPage"
import { BadgePage } from "./pages/BadgePage"
import { SpinnerPage } from "./pages/SpinnerPage"
import { ShadcnComponents } from "./pages/ShadcnComponents"
import { AvatarPage } from "./pages/AvatarPage"
import { AccordionPage } from "./pages/AccordionPage"
import { LogoPage } from "./pages/LogoPage"
import { BannerPage } from "./pages/BannerPage"
import { AlertPage } from "./pages/AlertPage"
import { ButtonGroupPage } from "./pages/ButtonGroupPage"
import { BreadcrumbPage } from "./pages/BreadcrumbPage"
import { TabsPage } from "./pages/TabsPage"
import { InputPage } from "./pages/InputPage"
import { FieldLabelPage } from "./pages/FieldLabelPage"
import { ProgressBarPage } from "./pages/ProgressBarPage"
import { HelperTextPage } from "./pages/HelperTextPage"
import { PasswordStrengthPage } from "./pages/PasswordStrengthPage"
import { InputGroupPage } from "./pages/InputGroupPage"
import { InputFieldPage } from "./pages/InputFieldPage"

type Page = "colors" | "typography" | "logo" | "button" | "button-group" | "badge" | "spinner" | "avatar" | "accordion" | "banner" | "alert" | "breadcrumb" | "tabs" | "input" | "field-label" | "progress-bar" | "helper-text" | "password-strength" | "input-group" | "input-field" | "shadcn-components"

const pageTitles: Record<Page, string> = {
  "colors":             "Colors",
  "typography":         "Typography",
  "logo":               "Logo",
  "button":             "Button",
  "badge":              "Badge",
  "spinner":            "Spinner",
  "avatar":             "Avatar",
  "accordion":          "Accordion",
  "banner":             "Banner",
  "alert":              "Alert",
  "button-group":       "Button Group",
  "breadcrumb":         "Breadcrumb",
  "tabs":               "Tabs",
  "input":              "Input",
  "field-label":        "Field Label",
  "progress-bar":       "Progress Bar",
  "helper-text":        "Helper Text",
  "password-strength":  "Password Strength",
  "input-group":        "Input Group",
  "input-field":        "Input Field",
  "shadcn-components":  "Shadcn Components",
}

export function StyleguideLayout() {
  const [activePage, setActivePage] = useState<Page>("colors")

  return (
    <div className="flex h-screen overflow-hidden font-sans bg-white">
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
          {activePage === "accordion"         && <AccordionPage />}
          {activePage === "logo"              && <LogoPage />}
          {activePage === "banner"            && <BannerPage />}
          {activePage === "alert"             && <AlertPage />}
          {activePage === "button-group"      && <ButtonGroupPage />}
          {activePage === "breadcrumb"        && <BreadcrumbPage />}
          {activePage === "tabs"              && <TabsPage />}
          {activePage === "input"             && <InputPage />}
          {activePage === "field-label"       && <FieldLabelPage />}
          {activePage === "progress-bar"      && <ProgressBarPage />}
          {activePage === "helper-text"        && <HelperTextPage />}
          {activePage === "password-strength" && <PasswordStrengthPage />}
          {activePage === "input-group"       && <InputGroupPage />}
          {activePage === "input-field"       && <InputFieldPage />}
          {activePage === "shadcn-components" && <ShadcnComponents />}
        </main>
      </div>
    </div>
  )
}
