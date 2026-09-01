import Image from "next/image";

import { cn } from "@/lib/utils";

interface PlayerAvatarProps {
  name: string;
  uuid?: string;
  size?: number;
  className?: string;
}

export const PlayerAvatar = ({
  name,
  uuid,
  size,
  className
}: PlayerAvatarProps) => (
  <Image 
    // 强制直接使用 name，忽略离线 UUID，解决离线模式无法加载正版皮肤的问题
    src={`https://minotar.net/helm/${name}`}
    alt={`${name}'s avatar`}
    width={size ?? 32}
    height={size ?? 32}
    className={cn("mx-auto rounded-sm", className)}
  />
)