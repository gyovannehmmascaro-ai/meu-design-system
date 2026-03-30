import { ComponentPreview } from "../components/ComponentPreview"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  HouseIcon,
  UserIcon,
  GearIcon,
  BellIcon,
  ChartBarIcon,
  LockIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from "@phosphor-icons/react"

export function TabsPage() {
  return (
    <div className="space-y-10">

      {/* ── Intro ── */}
      <div className="space-y-1">
        <h1 className="text-xl font-bold text-text-heading">Tabs</h1>
        <p className="text-sm text-text-body max-w-2xl">
          Componente de navegação por abas construído sobre o Radix UI Tabs.
          Use <code className="font-mono text-xs bg-bg-neutral-secondary px-1 rounded">variant</code> no{" "}
          <code className="font-mono text-xs bg-bg-neutral-secondary px-1 rounded">TabsList</code> para definir o estilo visual —
          o estilo é herdado automaticamente pelos{" "}
          <code className="font-mono text-xs bg-bg-neutral-secondary px-1 rounded">TabsTrigger</code> filhos.
        </p>
      </div>

      {/* ── 1. Default ── */}
      <ComponentPreview
        title="Default"
        description="Itens simples com ícone e texto. Sem fundo, sem borda — ideal para navegação dentro de uma página."
      >
        <Tabs defaultValue="home">
          <TabsList variant="default">
            <TabsTrigger value="home" iconLeading={<HouseIcon weight="bold" />}>Home</TabsTrigger>
            <TabsTrigger value="users" iconLeading={<UserIcon weight="bold" />}>Users</TabsTrigger>
            <TabsTrigger value="settings" iconLeading={<GearIcon weight="bold" />}>Settings</TabsTrigger>
            <TabsTrigger value="notifications" iconLeading={<BellIcon weight="bold" />}>Notifications</TabsTrigger>
            <TabsTrigger value="analytics" iconLeading={<ChartBarIcon weight="bold" />} disabled>Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="home" className="mt-4 text-sm text-text-body">Conteúdo de Home</TabsContent>
          <TabsContent value="users" className="mt-4 text-sm text-text-body">Conteúdo de Users</TabsContent>
          <TabsContent value="settings" className="mt-4 text-sm text-text-body">Conteúdo de Settings</TabsContent>
          <TabsContent value="notifications" className="mt-4 text-sm text-text-body">Conteúdo de Notifications</TabsContent>
        </Tabs>
      </ComponentPreview>

      {/* ── 2. Border bottom ── */}
      <ComponentPreview
        title="Border bottom"
        description="Linha laranja na base do item ativo. Separador no container. Padrão comum em aplicações web (ex: YouTube, GitHub)."
      >
        <Tabs defaultValue="home">
          <TabsList variant="border-bottom">
            <TabsTrigger value="home" iconLeading={<HouseIcon weight="bold" />}>Home</TabsTrigger>
            <TabsTrigger value="users" iconLeading={<UserIcon weight="bold" />}>Users</TabsTrigger>
            <TabsTrigger value="settings" iconLeading={<GearIcon weight="bold" />}>Settings</TabsTrigger>
            <TabsTrigger value="notifications" iconLeading={<BellIcon weight="bold" />}>Notifications</TabsTrigger>
            <TabsTrigger value="analytics" iconLeading={<ChartBarIcon weight="bold" />} disabled>Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="home" className="mt-4 text-sm text-text-body">Conteúdo de Home</TabsContent>
          <TabsContent value="users" className="mt-4 text-sm text-text-body">Conteúdo de Users</TabsContent>
          <TabsContent value="settings" className="mt-4 text-sm text-text-body">Conteúdo de Settings</TabsContent>
          <TabsContent value="notifications" className="mt-4 text-sm text-text-body">Conteúdo de Notifications</TabsContent>
        </Tabs>
      </ComponentPreview>

      {/* ── 3. Pills ── */}
      <ComponentPreview
        title="Pills"
        description="Fundo laranja no item ativo, bordas arredondadas. Destaque visual forte."
      >
        <Tabs defaultValue="home">
          <TabsList variant="pill">
            <TabsTrigger value="home" iconLeading={<HouseIcon weight="bold" />}>Home</TabsTrigger>
            <TabsTrigger value="users" iconLeading={<UserIcon weight="bold" />}>Users</TabsTrigger>
            <TabsTrigger value="settings" iconLeading={<GearIcon weight="bold" />}>Settings</TabsTrigger>
            <TabsTrigger value="notifications" iconLeading={<BellIcon weight="bold" />}>Notifications</TabsTrigger>
            <TabsTrigger value="analytics" iconLeading={<ChartBarIcon weight="bold" />} disabled>Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="home" className="mt-4 text-sm text-text-body">Conteúdo de Home</TabsContent>
          <TabsContent value="users" className="mt-4 text-sm text-text-body">Conteúdo de Users</TabsContent>
          <TabsContent value="settings" className="mt-4 text-sm text-text-body">Conteúdo de Settings</TabsContent>
          <TabsContent value="notifications" className="mt-4 text-sm text-text-body">Conteúdo de Notifications</TabsContent>
        </Tabs>
      </ComponentPreview>

      {/* ── 4. Vertical pills ── */}
      <ComponentPreview
        title="Vertical pills"
        description="Pills na orientação vertical. Use orientation='vertical' no Tabs root — os itens herdam a largura total automaticamente."
      >
        <Tabs defaultValue="home" orientation="vertical" className="flex gap-6">
          <TabsList variant="pill" className="w-40">
            <TabsTrigger value="home" iconLeading={<HouseIcon weight="bold" />}>Home</TabsTrigger>
            <TabsTrigger value="users" iconLeading={<UserIcon weight="bold" />}>Users</TabsTrigger>
            <TabsTrigger value="settings" iconLeading={<GearIcon weight="bold" />}>Settings</TabsTrigger>
            <TabsTrigger value="notifications" iconLeading={<BellIcon weight="bold" />}>Notifications</TabsTrigger>
            <TabsTrigger value="analytics" iconLeading={<ChartBarIcon weight="bold" />} disabled>Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="home" className="text-sm text-text-body">Conteúdo de Home</TabsContent>
          <TabsContent value="users" className="text-sm text-text-body">Conteúdo de Users</TabsContent>
          <TabsContent value="settings" className="text-sm text-text-body">Conteúdo de Settings</TabsContent>
          <TabsContent value="notifications" className="text-sm text-text-body">Conteúdo de Notifications</TabsContent>
        </Tabs>
      </ComponentPreview>

      {/* ── 5. Ghost (Button) ── */}
      <ComponentPreview
        title="Ghost (Button style)"
        description="Itens no estilo ghost button, com ícone leading e trailing. Container com borda e padding."
      >
        <Tabs defaultValue="home">
          <TabsList variant="ghost">
            <TabsTrigger value="home" iconLeading={<HouseIcon weight="bold" />} iconTrailing={<ArrowRightIcon weight="bold" />}>Home</TabsTrigger>
            <TabsTrigger value="users" iconLeading={<UserIcon weight="bold" />} iconTrailing={<ArrowRightIcon weight="bold" />}>Users</TabsTrigger>
            <TabsTrigger value="settings" iconLeading={<GearIcon weight="bold" />} iconTrailing={<ArrowRightIcon weight="bold" />}>Settings</TabsTrigger>
            <TabsTrigger value="notifications" iconLeading={<BellIcon weight="bold" />} iconTrailing={<ArrowRightIcon weight="bold" />}>Notifications</TabsTrigger>
            <TabsTrigger value="analytics" iconLeading={<ChartBarIcon weight="bold" />} iconTrailing={<ArrowRightIcon weight="bold" />} disabled>Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="home" className="mt-4 text-sm text-text-body">Conteúdo de Home</TabsContent>
          <TabsContent value="users" className="mt-4 text-sm text-text-body">Conteúdo de Users</TabsContent>
          <TabsContent value="settings" className="mt-4 text-sm text-text-body">Conteúdo de Settings</TabsContent>
          <TabsContent value="notifications" className="mt-4 text-sm text-text-body">Conteúdo de Notifications</TabsContent>
        </Tabs>
      </ComponentPreview>

      {/* ── 6. Ghost vertical (mobile secondary/tertiary) ── */}
      <ComponentPreview
        title="Ghost vertical"
        description="Ghost buttons na orientação vertical. Usado na versão mobile dos tabs secondary e tertiary."
      >
        <Tabs defaultValue="home" orientation="vertical" className="flex gap-6">
          <TabsList variant="ghost" className="w-96">
            <TabsTrigger value="home" iconLeading={<HouseIcon weight="bold" />} iconTrailing={<ArrowRightIcon weight="bold" />}>Home</TabsTrigger>
            <TabsTrigger value="users" iconLeading={<UserIcon weight="bold" />} iconTrailing={<ArrowRightIcon weight="bold" />}>Users</TabsTrigger>
            <TabsTrigger value="settings" iconLeading={<GearIcon weight="bold" />} iconTrailing={<ArrowRightIcon weight="bold" />}>Settings</TabsTrigger>
            <TabsTrigger value="notifications" iconLeading={<BellIcon weight="bold" />} iconTrailing={<ArrowRightIcon weight="bold" />}>Notifications</TabsTrigger>
            <TabsTrigger value="analytics" iconLeading={<ChartBarIcon weight="bold" />} iconTrailing={<ArrowRightIcon weight="bold" />} disabled>Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="home" className="text-sm text-text-body">Conteúdo de Home</TabsContent>
          <TabsContent value="users" className="text-sm text-text-body">Conteúdo de Users</TabsContent>
          <TabsContent value="settings" className="text-sm text-text-body">Conteúdo de Settings</TabsContent>
          <TabsContent value="notifications" className="text-sm text-text-body">Conteúdo de Notifications</TabsContent>
        </Tabs>
      </ComponentPreview>

      {/* ── 7. TAB Secondary ── */}
      <ComponentPreview
        title="TAB Secondary"
        description="Abas estilo painel/arquivo. Fundo branco no item inicial, cinza-50 no ativo. Container com borda completa."
      >
        <Tabs defaultValue="home">
          <TabsList variant="tab-secondary">
            <TabsTrigger value="home" iconLeading={<HouseIcon weight="bold" />}>Home</TabsTrigger>
            <TabsTrigger value="users" iconLeading={<UserIcon weight="bold" />}>Users</TabsTrigger>
            <TabsTrigger value="settings" iconLeading={<GearIcon weight="bold" />}>Settings</TabsTrigger>
            <TabsTrigger value="notifications" iconLeading={<BellIcon weight="bold" />}>Notifications</TabsTrigger>
            <TabsTrigger value="analytics" iconLeading={<ChartBarIcon weight="bold" />} disabled>Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="home" className="mt-4 text-sm text-text-body">Conteúdo de Home</TabsContent>
          <TabsContent value="users" className="mt-4 text-sm text-text-body">Conteúdo de Users</TabsContent>
          <TabsContent value="settings" className="mt-4 text-sm text-text-body">Conteúdo de Settings</TabsContent>
          <TabsContent value="notifications" className="mt-4 text-sm text-text-body">Conteúdo de Notifications</TabsContent>
        </Tabs>
      </ComponentPreview>

      {/* ── 8. TAB Tertiary ── */}
      <ComponentPreview
        title="TAB Tertiary"
        description="Abas estilo painel/arquivo. Fundo cinza-50 no item inicial, cinza-100 no ativo. Container com borda completa."
      >
        <Tabs defaultValue="home">
          <TabsList variant="tab-tertiary">
            <TabsTrigger value="home" iconLeading={<HouseIcon weight="bold" />}>Home</TabsTrigger>
            <TabsTrigger value="users" iconLeading={<UserIcon weight="bold" />}>Users</TabsTrigger>
            <TabsTrigger value="settings" iconLeading={<GearIcon weight="bold" />}>Settings</TabsTrigger>
            <TabsTrigger value="notifications" iconLeading={<BellIcon weight="bold" />}>Notifications</TabsTrigger>
            <TabsTrigger value="analytics" iconLeading={<ChartBarIcon weight="bold" />} disabled>Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="home" className="mt-4 text-sm text-text-body">Conteúdo de Home</TabsContent>
          <TabsContent value="users" className="mt-4 text-sm text-text-body">Conteúdo de Users</TabsContent>
          <TabsContent value="settings" className="mt-4 text-sm text-text-body">Conteúdo de Settings</TabsContent>
          <TabsContent value="notifications" className="mt-4 text-sm text-text-body">Conteúdo de Notifications</TabsContent>
        </Tabs>
      </ComponentPreview>

      {/* ── 9. Mobile placeholder ── */}
      <ComponentPreview
        title="Mobile (placeholder)"
        description="Em mobile, os tabs Default, Pills e Border bottom exibem um dropdown com a aba selecionada. Placeholder enquanto o componente Input/Dropdown não existe."
      >
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-fig bg-bg-neutral-secondary border border-border-default w-96 text-sm text-text-placeholder">
          <UserIcon className="size-4 shrink-0 text-text-body" />
          <span className="flex-1">Selecionar aba...</span>
          <ArrowRightIcon className="size-4 shrink-0 text-text-body" weight="bold" />
        </div>
      </ComponentPreview>

    </div>
  )
}
