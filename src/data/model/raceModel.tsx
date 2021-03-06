import { Identifier } from './commonModels';

export type Race = {
    ability_bonuses: [AbilityBonus] | null,
    age: string | null,
    alignment: string | null,
    index: string,
    language_desc: string | null,
    languages: [Identifier] | null,
    name: string,
    size: string | null,
    size_description: string | null,
    speed: number | null,
    starting_proficiencies: [Identifier] | null,
    starting_proficiency_options: {
        choose: number,
        from: [Identifier],
        type: string
    } | null,
    subraces: [Identifier] | null,
    trait_options: {
        choose: number | null,
        from: [Identifier] | null,
        type: string | null
    } | null,
    traits: [Identifier] | null,
    url: string
};

type AbilityBonus = {
    ability_score: Identifier | null,
    bonus: number | null
};
