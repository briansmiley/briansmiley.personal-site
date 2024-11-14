import { IconDefinition } from "@fortawesome/free-brands-svg-icons"

export type ProjectType = {
  title: string
  thumbnail: string
  blurb: string
  url: string
  github: string
  icons?: string[]
}

export type IconLinkType = {
  label: string
  icon: IconDefinition
  url: string
}
