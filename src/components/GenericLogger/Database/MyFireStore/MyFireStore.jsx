import Loggers from './Loggers';
import Logs from './Logs';

export default function MyFireStore({ app }) {

    return (
        <>
            <Loggers {...{ app }} />
            <Logs {...{ app }} />
        </>
    )
}