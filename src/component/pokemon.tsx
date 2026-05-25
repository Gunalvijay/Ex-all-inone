import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";
import { useEffect } from "react";
import { fetchPokemon } from "../features/pokeSlice";

const Pokemon = () => {

    const dispatch = useDispatch<AppDispatch>();

    const { data, loading, error } = useSelector(
        (state: RootState) => state.pokemon
    );

    useEffect(() => {

        dispatch(fetchPokemon());

    }, []);

    if (loading) return <h1>Loading...</h1>;

    if (error) return <h1>{error}</h1>;

    return (
        <div>

            <h1>{data.name}</h1>

            {data?.abilities?.map((item: any) => (

                <p key={item.ability.name}>
                    {item.ability.name}
                </p>

            ))}

        </div>
    );
};

export default Pokemon;