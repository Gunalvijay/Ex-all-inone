import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";
import { useEffect } from "react";
import { fetchPokemon } from "../features/pokeSlice";

interface Ability {
    ability: {
        name: string;
    };
}

const Pokemon = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { data, loading, error } = useSelector(
        (state: RootState) => state.pokemon
    );

    useEffect(() => {
        dispatch(fetchPokemon());
    }, [dispatch]);

    if (loading) return <h1>Loading...</h1>;

    if (error) return <h1>{error}</h1>;

    return (
        <div>
            <h1>{data?.name}</h1>

            {data?.abilities?.map((item: Ability) => (
                <p key={item.ability.name}>
                    {item.ability.name}
                </p>
            ))}
        </div>
    );
};

export default Pokemon;