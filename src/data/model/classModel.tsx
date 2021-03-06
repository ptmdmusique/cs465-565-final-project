import { Identifier } from './commonModels';

export type Class = {
    class_levels: string | null,
    hit_die: number | null,
    index: string,
    name: string,
    proficiencies: [Identifier] | null,
    proficiency_choices: [Options] | null,
    saving_throws: [Identifier] | null,
    starting_equipment: [StartingEquipment] | null,
    starting_equipment_options: [Options] | null,
    subclasses: [Identifier] | null,
    url: string
};

type Options = {
    choose: number,
    from: [Identifier],
    type: string
};

type StartingEquipment = {
    equipment: [Identifier],
    quantity: number
};