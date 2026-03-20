import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarRemoveButton,
  AvatarGroup,
  AvatarGroupLabel,
} from "@/components/ui/avatar"
import { ComponentPreview } from "../components/ComponentPreview"

// Fotos reais de banco de imagens gratuito (pravatar.cc)
const PHOTOS = [
  { src: "https://i.pravatar.cc/150?img=1",  initials: "AL" },
  { src: "https://i.pravatar.cc/150?img=5",  initials: "BM" },
  { src: "https://i.pravatar.cc/150?img=9",  initials: "CR" },
  { src: "https://i.pravatar.cc/150?img=12", initials: "DS" },
  { src: "https://i.pravatar.cc/150?img=20", initials: "EK" },
  { src: "https://i.pravatar.cc/150?img=32", initials: "FP" },
]

const SIZES = ["xs", "sm", "base", "lg", "xl", "2xl"] as const

// Um status diferente por tamanho (6 tamanhos × 4 status, ciclando)
const STATUS_PER_SIZE = ["online", "away", "busy", "offline", "online", "busy"] as const

export function AvatarPage() {
  return (
    <div className="space-y-6">

      {/* Tamanhos com foto */}
      <ComponentPreview title="Avatar — Tamanhos">
        {SIZES.map(size => (
          <Avatar key={size} size={size}>
            <AvatarImage src={PHOTOS[0].src} alt={`Avatar ${size}`} />
            <AvatarFallback>{PHOTOS[0].initials}</AvatarFallback>
          </Avatar>
        ))}
      </ComponentPreview>

      {/* Fallback com iniciais */}
      <ComponentPreview title="Avatar — Iniciais (fallback)">
        {SIZES.map(size => (
          <Avatar key={size} size={size}>
            <AvatarFallback>JL</AvatarFallback>
          </Avatar>
        ))}
      </ComponentPreview>

      {/* Placeholder genérico sem iniciais */}
      <ComponentPreview title="Avatar — Placeholder">
        {SIZES.map(size => (
          <Avatar key={size} size={size}>
            <AvatarFallback />
          </Avatar>
        ))}
      </ComponentPreview>

      {/* Status — todos os tamanhos, cada um com um status diferente */}
      <ComponentPreview title="Avatar — Status">
        {SIZES.map((size, i) => (
          <Avatar key={size} size={size}>
            <AvatarImage src={PHOTOS[i % PHOTOS.length].src} alt={STATUS_PER_SIZE[i]} />
            <AvatarFallback>{PHOTOS[i % PHOTOS.length].initials}</AvatarFallback>
            <AvatarBadge status={STATUS_PER_SIZE[i]} />
          </Avatar>
        ))}
      </ComponentPreview>

      {/* Remove button — todos os tamanhos */}
      <ComponentPreview title="Avatar — Com botão de remover">
        {SIZES.map((size, i) => (
          <Avatar key={size} size={size}>
            <AvatarImage src={PHOTOS[i % PHOTOS.length].src} alt={`Remove ${size}`} />
            <AvatarFallback>{PHOTOS[i % PHOTOS.length].initials}</AvatarFallback>
            <AvatarRemoveButton onRemove={() => {}} />
          </Avatar>
        ))}
      </ComponentPreview>

      {/* Avatar Group */}
      <ComponentPreview title="Avatar Group">
        <div className="flex flex-col gap-6">
          {(["sm", "base", "lg"] as const).map(size => (
            <AvatarGroup key={size} size={size} max={4}>
              {PHOTOS.map((p, i) => (
                <Avatar key={i}>
                  <AvatarImage src={p.src} alt={p.initials} />
                  <AvatarFallback>{p.initials}</AvatarFallback>
                </Avatar>
              ))}
            </AvatarGroup>
          ))}
        </div>
      </ComponentPreview>

      {/* Avatar Group Label — com helper */}
      <ComponentPreview title="Avatar Group Label — Com helper">
        <div className="flex flex-col gap-4">
          {(["sm", "base", "lg", "xl"] as const).map(size => (
            <AvatarGroupLabel key={size} size={size} title="Jese Leos" helper="jese@flowbite.com">
              <AvatarImage src={PHOTOS[0].src} alt="Jese Leos" />
              <AvatarFallback>JL</AvatarFallback>
            </AvatarGroupLabel>
          ))}
        </div>
      </ComponentPreview>

      {/* Avatar Group Label — só nome */}
      <ComponentPreview title="Avatar Group Label — Só nome">
        <div className="flex flex-col gap-4">
          {(["sm", "base", "lg", "xl"] as const).map(size => (
            <AvatarGroupLabel key={size} size={size} title="Jese Leos">
              <AvatarImage src={PHOTOS[0].src} alt="Jese Leos" />
              <AvatarFallback>JL</AvatarFallback>
            </AvatarGroupLabel>
          ))}
        </div>
      </ComponentPreview>

    </div>
  )
}
