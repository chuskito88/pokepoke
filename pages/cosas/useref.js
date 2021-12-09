import { useEffect } from "react";

function Messenger() {
    const [count, setCount] = useState(0);
    const messagesEnqueued = useRef(count);

    function sendMessage() {
        setCount(count +1);
    }

    useEffect(function () {
        messagesEnqueued.current = count;
        setTimeout(function () {
            console.log(`Messages enqued: ${messagesEnqueued.current}`);
        }, 3000);
    }, [count]);

    return (
        <div>
            <input type="button" value="Enviar mensaje" onClick={sendMessage} />
            <div>Mensajes enviados {count}</div>
        </div>
    )
}