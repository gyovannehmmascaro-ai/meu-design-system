import { Accordion, AccordionItem } from "@/components/ui/accordion"
import { Bell } from "@phosphor-icons/react"
import { ComponentPreview } from "../components/ComponentPreview"

const ITEMS = [
  {
    id:      "q1",
    title:   "O que é um design system?",
    content: "Um design system é um conjunto de padrões, componentes e diretrizes que garantem consistência visual e de experiência em produtos digitais. Ele serve como fonte única de verdade para designers e desenvolvedores.",
  },
  {
    id:      "q2",
    title:   "Posso usar este projeto em produção?",
    content: "Sim. Os componentes são construídos com React, TypeScript e Tailwind CSS, seguindo boas práticas de acessibilidade e tokens de design rastreáveis ao Figma.",
  },
  {
    id:      "q3",
    title:   "Como adicionar novos componentes?",
    content: "Crie o arquivo em src/components/ui/, exporte os tipos e componentes, adicione uma página no styleguide e registre na Sidebar e no Layout.",
  },
]

export function AccordionPage() {
  return (
    <div className="space-y-6 max-w-2xl">

      <ComponentPreview title="Default">
        <div className="w-full">
          <Accordion type="default" defaultOpen="q2">
            {ITEMS.map(item => (
              <AccordionItem key={item.id} id={item.id} title={item.title}>
                <p>{item.content}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Default — alwaysOpen (múltiplos abertos)">
        <div className="w-full">
          <Accordion type="default" alwaysOpen defaultOpen={["q1", "q2"]}>
            {ITEMS.map(item => (
              <AccordionItem key={item.id} id={item.id} title={item.title}>
                <p>{item.content}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Separate Cards">
        <div className="w-full">
          <Accordion type="card" defaultOpen="q1">
            {ITEMS.map(item => (
              <AccordionItem key={item.id} id={item.id} title={item.title}>
                <p>{item.content}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Flush">
        <div className="w-full">
          <Accordion type="flush" defaultOpen="q3">
            {ITEMS.map(item => (
              <AccordionItem key={item.id} id={item.id} title={item.title}>
                <p>{item.content}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Default — colorScheme Brand">
        <div className="w-full">
          <Accordion type="default" colorScheme="brand">
            {ITEMS.map(item => (
              <AccordionItem key={item.id} id={item.id} title={item.title}>
                <p>{item.content}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Sem leading icon">
        <div className="w-full">
          <Accordion type="default">
            {ITEMS.map(item => (
              <AccordionItem key={item.id} id={item.id} title={item.title} leadingIcon={false}>
                <p>{item.content}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Sem trailing icon (caret)">
        <div className="w-full">
          <Accordion type="default">
            {ITEMS.map(item => (
              <AccordionItem key={item.id} id={item.id} title={item.title} trailingIcon={false}>
                <p>{item.content}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Trailing icon sem rotação">
        <div className="w-full">
          <Accordion type="default" defaultOpen="q1">
            {ITEMS.map(item => (
              <AccordionItem key={item.id} id={item.id} title={item.title} trailingIconRotates={false}>
                <p>{item.content}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ComponentPreview>

      <ComponentPreview title="Leading icon customizado">
        <div className="w-full">
          <Accordion type="default">
            {ITEMS.map(item => (
              <AccordionItem key={item.id} id={item.id} title={item.title} leadingIcon={<Bell weight="bold" />}>
                <p>{item.content}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ComponentPreview>

    </div>
  )
}
