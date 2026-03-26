import { useState } from "react"
import { BookIcon, ArrowRightIcon } from "@phosphor-icons/react"
import { Banner } from "@/components/ui/banner"
import { ComponentPreview } from "../components/ComponentPreview"

function DismissibleBanner({ children }: { children: (onClose: () => void, visible: boolean) => React.ReactNode }) {
  const [visible, setVisible] = useState(true)
  return <>{children(() => setVisible(false), visible)}</>
}

export function BannerPage() {
  return (
    <div className="space-y-6">

      <ComponentPreview
        title="Default"
        description="Banner simples com ícone, texto e botão de fechar."
        responsive
        code={`<Banner
  type="default"
  text={<>Nova identidade foi lançada para a <a href="#" className="text-text-fg-brand underline">Flowbite Library</a></>}
  onClose={() => {}}
/>`}
      >
        <DismissibleBanner>
          {(onClose, visible) => visible && (
            <Banner
              type="default"
              text={
                <>
                  Nova identidade foi lançada para a{" "}
                  <a href="#" className="text-text-fg-brand underline">Flowbite Library</a>
                </>
              }
              onClose={onClose}
            />
          )}
        </DismissibleBanner>
      </ComponentPreview>

      <ComponentPreview
        title="Heading & Description"
        description="Banner com título, descrição e dois botões de ação."
        responsive
        code={`<Banner
  type="heading-description"
  heading="Integration is the key"
  description="You can integrate Flowbite with many tools to make your work even more efficient."
  secondaryAction={{ label: "Learn more", icon: <BookIcon weight="bold" /> }}
  primaryAction={{ label: "Get started", icon: <ArrowRightIcon weight="bold" /> }}
  onClose={() => {}}
/>`}
      >
        <DismissibleBanner>
          {(onClose, visible) => visible && (
            <Banner
              type="heading-description"
              heading="Integration is the key"
              description="You can integrate Flowbite with many tools to make your work even more efficient."
              secondaryAction={{ label: "Learn more", icon: <BookIcon weight="bold" className="size-3.5" /> }}
              primaryAction={{ label: "Get started", icon: <ArrowRightIcon weight="bold" className="size-3.5" /> }}
              onClose={onClose}
            />
          )}
        </DismissibleBanner>
      </ComponentPreview>

      <ComponentPreview
        title="Icon & Link"
        description="Banner inferior com ícone brand, texto e link com seta."
        responsive
        code={`<Banner
  type="icon-link"
  text="Get 2% pricing commission."
  linkLabel="Become a partner"
  linkHref="#"
  onClose={() => {}}
/>`}
      >
        <DismissibleBanner>
          {(onClose, visible) => visible && (
            <Banner
              type="icon-link"
              text="Get 2% pricing commission."
              linkLabel="Become a partner"
              linkHref="#"
              onClose={onClose}
            />
          )}
        </DismissibleBanner>
      </ComponentPreview>

      <ComponentPreview
        title="Logo + Button"
        description="Banner com logo, divisor, texto descritivo e botão de ação. Borda completa e bordas arredondadas."
        responsive
        code={`<Banner
  type="logo-button"
  logoText="Build websites even faster with components on top of Tailwind CSS."
  primaryAction={{ label: "Sign up now" }}
  onClose={() => {}}
/>`}
      >
        <DismissibleBanner>
          {(onClose, visible) => visible && (
            <Banner
              type="logo-button"
              logoText="Build websites even faster with components on top of Tailwind CSS."
              primaryAction={{ label: "Sign up now" }}
              onClose={onClose}
            />
          )}
        </DismissibleBanner>
      </ComponentPreview>

      <ComponentPreview
        title="Newsletter"
        description="Banner centralizado com campo de e-mail e botão de inscrição."
        responsive
        code={`<Banner
  type="newsletter"
  emailPlaceholder="Enter your email"
  subscribeLabel="Subscribe"
  onSubscribe={(email) => console.log(email)}
  onClose={() => {}}
/>`}
      >
        <DismissibleBanner>
          {(onClose, visible) => visible && (
            <Banner
              type="newsletter"
              emailPlaceholder="Enter your email"
              subscribeLabel="Subscribe"
              onSubscribe={(email) => console.log(email)}
              onClose={onClose}
            />
          )}
        </DismissibleBanner>
      </ComponentPreview>

    </div>
  )
}
