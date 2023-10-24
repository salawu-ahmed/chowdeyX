import { sample_foods } from "../data";

export const getAll = async () => sample_foods

// to lowercase makes the search case insensitive
export const search = async (searchTerm) => 
    sample_foods.filter(item => 
        item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    )