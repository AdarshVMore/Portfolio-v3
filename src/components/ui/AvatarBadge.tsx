type AvatarBadgeProps = {
  name: string
}

export function AvatarBadge({ name }: AvatarBadgeProps) {
  const initial = name.charAt(0).toUpperCase()

  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-violet-600 text-sm font-bold text-white">
      {initial}
    </div>
  )
}
