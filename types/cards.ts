export interface Card {
    title: string;
    description: string
}

export interface CardMission extends Card {
    icon: string;
}

export interface CardHome extends Card {
    image: string;
    to: string;
}

export interface CardCommodity extends Card {
    image: string;
    specs: string[]
}