
export interface CardsResponse {
    data: Card[];
}

export interface Card {
    id:            number;
    name:          string;
    type:          string;
    desc:          string;
    race:          string;
    archetype:    string;
    card_sets:    CardSet[];
    card_images:   CardImage[];
    card_prices:   CardPrice[];
    atk?:          number;
    def?:          number;
    level?:        number;
    attribute?:    Attribute;
}

export enum Attribute {
    Dark = "DARK",
    Divine = "DIVINE",
    Earth = "EARTH",
    Fire = "FIRE",
    Light = "LIGHT",
    Water = "WATER",
    Wind = "WIND",
}

export interface CardImage {
    id:                number;
    image_url:         string;
    image_url_small:   string;
    image_url_cropped: string;
}

export interface CardPrice {
    cardmarket_price:   string;
    tcgplayer_price:    string;
    ebay_price:         string;
    amazon_price:       string;
    coolstuffinc_price: string;
}

export interface CardSet {
    set_name:        string;
    set_code:        string;
    set_rarity:      string;
    set_rarity_code: string;
    set_price:       string;
}
