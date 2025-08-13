export interface Card {
    title: string;
    description: string
}

export interface MissionCard extends Card {
    icon: string;
}

export interface HomeCard extends Card {
    image: string;
    to: string;
}

export interface CommodityCard extends Card {
    image: string;
    specs: string[]
}