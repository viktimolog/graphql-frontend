import {useQuery} from "@apollo/react-hooks";
import {loader} from 'graphql.macro';

const queryAllPets = loader('./gql/queryAllPets.graphql');

export const useQueryAllPets = () => {
    const {loading, error, data} =  useQuery(queryAllPets);
    const pets = data && data.allPets ? data.allPets : null;

    return {loading, error, pets};
}
