import { PromptsDescriptionCard } from '@/lib/definitions/types'
import React from 'react'

export default function DescriptionCard({description, last}:PromptsDescriptionCard) {
  return (
    <span className={`border-t-3 border-blue-neutral-50 p-5 w-full ${last ?"border-b-3":""}`}>{description}</span>
  )
}
