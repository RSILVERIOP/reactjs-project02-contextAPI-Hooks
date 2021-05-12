import { useCounterContext } from '../../contexts/CounterContext';

export const Heading = () => {
    const [state] = useCounterContext();
    return <h1>{state.counter}</h1>
};