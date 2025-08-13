import { contacts } from "./contacts"
import type { ContactGroup } from "~/types/contacts"

export const contactGroups: ContactGroup[] = [
  {
    name: 'Alex Panfilov. CEO',
    contacts: [
      contacts[1],
      contacts[2],
    ],
  },
  {
    name: 'Natalie Lauren. Head of Sales',
    contacts: [
      contacts[2],
    ],
  },
]
