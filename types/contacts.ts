export interface Contact {
    href: string;
    icon: string;
    label: string;
}

export interface ContactGroup {
    name: string;
    contacts: Contact[]
}